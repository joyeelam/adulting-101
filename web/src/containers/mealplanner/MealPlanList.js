import React from "react";
import Meal from "./Meal"

function MealPlanList({ mealPlanData }) {
    const n = mealPlanData.nutrients;

    return (
        <div>
            <div id="totalcalories">
                <h2> Total Daily Calories </h2>
                <ul className="mealinfo">
                    <li>Calories: {Math.round(n.calories)}</li>
                    <li>Carbohydrates: {Math.round(n.carbohydrates)}</li>
                    <li>Fat: {Math.round(n.fat)}</li>
                    <li>Protein: {Math.round(n.protein)}</li>
                </ul>
                {/* <button id="save-btn"> SAVE MEAL PLAN </button> */}
            </div>

            <div>
                {mealPlanData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />;
                })}
            </div>
        </div>
    );
}

export default MealPlanList;

