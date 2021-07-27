import React from "react";
import Meal from "./Meal"

function MealPlanList({ mealPlanData }) {
    const nutrients = mealPlanData.nutrients;

    return (
        <div>
            <div id="totalcalories">
                <h2> Total Daily Calories </h2>
                <ul className="mealinfo">
                    <li>Calories: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>
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

