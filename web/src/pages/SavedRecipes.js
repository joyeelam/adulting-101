import axios from "axios";
import { useEffect, useState } from "react";
import style from "../pages/static/SavedRecipes.css"

const ShowRecipes = () => {
    const [data, setData] = useState([])
    const user_id = localStorage.getItem('id');

    useEffect(() => {
        getSavedRecipes();
    }, [])

    const getSavedRecipes = () => {
        axios.get(`http://localhost:5000/recipe-generator/${user_id}`)
            .then(resp => {
                const recipes = resp.data
                setData(recipes)
                console.log(data)

                // recipes.map(recipe => {
                //     console.log(recipe.url)
                //     console.log(recipe.image)
                // })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="container">
            <h1> Saved Recipes: </h1>
            {data.map(recipe => (

                <div className="recipelist">
                    <a href={recipe.url} id="link" target="_blank" rel="noreferrer">
                        <div id="recipetitle"> {recipe.title} </div>
                        <div>
                            <img src={recipe.image} alt={recipe.title} />
                        </div>
                        Get Recipe ➪
                    </a>
                </div>

            ))
            }
        </div >
    )
}

export default ShowRecipes;

