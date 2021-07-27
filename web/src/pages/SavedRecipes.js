import axios from "axios";
import { useEffect, useState } from "react";
import SavedRecipe from "../containers/recipe/SavedRecipeComponent";
import "../pages/static/SavedRecipes.css"

const AllSavedRecipes = () => {
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
        <div>
            <h1 id="savedrecipesh1"> Saved Recipes </h1>

            <div className="container">
                {data.map(recipe => (
                    <SavedRecipe title={recipe.title} url={recipe.url} image={recipe.image} />
                ))
                }
            </div>


        </div >
    )
}

export default AllSavedRecipes;
