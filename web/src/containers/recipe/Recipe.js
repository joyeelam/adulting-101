import React, { useEffect, useState } from 'react';
import style from "../../pages/static/recipe.module.css"
import axios from 'axios';

// Recipe Component
const Recipe = ({ title, calories, image, ingredients, source }) => {

    const [data, setData] = useState([])
    const [saveStatus, setSaveStatus] = useState(false)
    const [dataTitle, setDataTitle] = useState("");
    const [dataUrl, setDataUrl] = useState("");
    const user_id = localStorage.getItem('id')


    const doSomething = () => {
        axios.get(`http://localhost:5000/recipe-generator/${user_id}`)
            .then(resp => {
                const recipes = resp.data
                setData(recipes)
                console.log(data)
                // recipes.map(recipe => {
                //     console.log(recipe.url)
                // })
            })
            .catch((error) => {
                console.log(error.message)
            });
    };

    const saveRecipe = () => {

        if (saveStatus === true) {
            setSaveStatus(false)
            console.log("Recipe removed from Favorites")

            // axios({
            //     method: "POST",
            //     url: "http://localhost:5000/recipe-generator/remove",
            //     data: {
            //         recipe_url: source
            //     }
            // })
            //     .then(resp => {
            //         console.log(resp);
            //     })
            //     .catch((error) => {
            //         console.log(error.message);
            //     })

        } else {
            setSaveStatus(true)
            console.log("Recipe saved to Favorites")

            axios({
                method: "POST",
                url: "http://localhost:5000/recipe-generator/save",
                data: {
                    user_id: user_id,
                    recipe_title: title,
                    recipe_url: source,
                    recipe_img_url: image
                }
            })
                .then(resp => {
                    console.log(resp);
                })
                .catch((error) => {
                    console.log(error.message);
                })
        }
        // console.log(saveStatus)
    };

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
            <button onClick={doSomething}>do something </button>

        </div >

    );
}


export default Recipe;