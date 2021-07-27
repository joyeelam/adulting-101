import { useState } from "react";
import MealPlanList from "../containers/mealplanner/MealPlanList";
import Input from "../containers/mealplanner/Input";
import Header from "../containers/mealplanner/Header";
import "../pages/static/MealPlan.css"

function MealPlan() {
    const API_KEY = "29448a8ed2254f778b309500b1cfc046";
    const [mealPlanData, setMealPlanData] = useState(null);
    const [calories, setCalories] = useState(2000);
    const [diet, setDiet] = useState("paleo");
    const [loaded, setLoaded] = useState(false);

    function getMealPlanData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${diet}`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setMealPlanData(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
        console.log("Recipes fetched from 3rd party!");
        setLoaded(true);
    }

    return (
        <div className="mealplanner">
            <Header />

            {!loaded ? (<Input setCalories={setCalories} setDiet={setDiet} />) : null}

            <div className="mealcontainer">
                {mealPlanData && <MealPlanList mealPlanData={mealPlanData} getMealPlanData={getMealPlanData} />}
            </div>
        </div >
    );
}

export default MealPlan;
