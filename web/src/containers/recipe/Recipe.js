import React, { useState } from 'react';
import style from "./recipe.module.css";
import axios from 'axios';

// Recipe Component
const Recipe = ({ title, calories, image, ingredients, source }) => {

    const [saveStatus, setSaveStatus] = useState(false)

    const saveRecipe = () => {
        const user_id = localStorage.getItem('id')

        if (saveStatus === true) {
            setSaveStatus(false)
            console.log("Recipe removed from Favorites")
        } else {
            setSaveStatus(true)
            console.log("Recipe saved to Favorites")

            axios({
                method: "POST",
                url: "http://localhost:5000/recipe-generator/",
                data: {
                    user_id: user_id,
                    recipe_title: title,
                    recipe_url: source
                }
            })
                .then(resp => {
                    console.log(resp);
                })
                .catch((error) => {
                    console.log(error.message);
                })
        }
        console.log(saveStatus)
    }

    return (

        <div className={style.recipecard}>
            <div className={saveStatus === true ? style.ribbonsaved : style.ribbon} onClick={saveRecipe}> </div>
            <h3> {title} </h3>
            <img src={image} alt="" className={style.image} />
            <p> {Math.round(calories)} calories </p>
            <h4> Ingredients: </h4>
            <ol className={style.ingredientList}>
                {ingredients.map(ingredient => (
                    <li key={Math.random(150)}>{ingredient.text}</li>
                ))}
            </ol>
            <button className={style.recipebtn}> <a className={style.getlink} href={source} target="_blank" rel="noreferrer" > Get Recipe </a> </button>
        </div >

    );
}


export default Recipe;