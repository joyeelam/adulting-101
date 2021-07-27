import React from "react";
import Meal from "./Meal"

function MealPlanList({ mealPlanData }) {
    const n = mealPlanData.nutrients;
    return (
        <div>
            <div id="totalcalories">
                <h2> Total Daily Calories </h2>
                <ul className="mealinfo">
                    <li>Calories: {n.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {n.carbohydrates.toFixed(0)}</li>
                    <li>Fat: {n.fat.toFixed(0)}</li>
                    <li>Protein: {n.protein.toFixed(0)}</li>
                </ul>
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

