import { useState, useEffect } from "react";

function Meal({ meal }) {
    const API_KEY = "29448a8ed2254f778b309500b1cfc046";
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY}&includeNutrition=false`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setImageUrl(data.image);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [meal.id]);

    return (
        <div id="mealcard">
            <h3 id="mealtitle">{meal.title}</h3>
            <img id="mealplanimg" src={imageUrl} alt="recipe" />
            <ul className="mealinfo">
                <li>Prep time ⧗: {meal.readyInMinutes} minutes</li>
                <li># of servings: {meal.servings}</li>
            </ul>
            <button className="get-recipe-btn"> <a href={meal.sourceUrl} target="_blank" className="getrecipelink" rel="noreferrer">Get Recipe ➪</a> </button>
        </div>
    );
}

export default Meal;