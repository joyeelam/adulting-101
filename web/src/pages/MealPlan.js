import { useState } from "react";
import MealPlanList from "../containers/mealplanner/MealPlanList";
import "../pages/static/MealPlan.css"

function MealPlan() {
    const [mealPlanData, setMealPlanData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function getMealPlanData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=29448a8ed2254f778b309500b1cfc046&timeFrame=day&targetCalories=${calories}`
        )
            .then((response) => response.json())
            .then((data) => {
                setMealPlanData(data);
                console.log(data)
            })
            .catch(() => {
                console.log("error");
            });
    }

    function handleChange(e) {
        setCalories(e.target.value);
    }

    function handleReload() {
        window.location.reload();
    }

    return (
        <div className="mealplanner">
            <h1 className="pagetitle" onClick={handleReload}> daily meal planner </h1>
            <div clasName="inputcontainer">
                <input
                    type="number"
                    step="100"
                    placeholder="Total Calories"
                    onChange={handleChange}
                    min="1000"
                    id="inputfield"
                />
                <button onClick={getMealPlanData} id="getbutton">Get Today's Meal Plan</button>
            </div>
            <div className="mealcontainer">
                {mealPlanData && <MealPlanList mealPlanData={mealPlanData} />}
            </div>
        </div>
    );
}

export default MealPlan;
