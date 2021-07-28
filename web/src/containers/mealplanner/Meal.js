import { useState, useEffect } from "react";

function Meal({ meal }) {
    const API_KEY = "f25c3fe4714a4a0893093dd884d16f19";
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
            <button className="mealplanner-btn"> <a href={meal.sourceUrl} target="_blank" className="getrecipelink" rel="noreferrer">Get Recipe ➪</a> </button>
        </div>
    );
}

export default Meal;