import { useState } from "react";
import MealPlanList from "../containers/mealplanner/MealPlanList";
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

    function handleCaloriesChange(e) {
        setCalories(e.target.value);
    }

    function handleSelectDiet(e) {
        console.log(e.target.value)
        setDiet(e.target.value)
    }

    return (
        <div className="mealplanner">
            <Header />

            {!loaded ? (<div> <div clasName="inputcontainer">
                <input
                    type="number"
                    step="100"
                    placeholder="Total Calories"
                    onChange={handleCaloriesChange}
                    min="1000"
                    id="inputfield"
                />
                <button onClick={getMealPlanData} id="getbutton">Get Today's Meal Plan</button>
                <div className="diet">
                    <label for="diet"> diet restrictions? </label>
                    <div>
                        <select name="diet" id="diet" onChange={handleSelectDiet}>
                            <option selected="selected"> None </option>
                            <option value="paleo"> Paleo </option>
                            <option value="vegetarian"> Vegetarian </option>
                            <option value="ketogenic"> Keto </option>
                            <option value="vegan"> Vegan </option>
                            <option value="pescetarian"> Pescetarian </option>
                        </select>
                    </div>
                </div>
            </div>
                <div>
                    <img src="recipe-imgs/loading_cat2.gif" width="200px" alt="cat eating pizza" />
                    <p> ready to eat?</p>
                </div></div>) : null}

            <div className="mealcontainer">
                {mealPlanData && <MealPlanList mealPlanData={mealPlanData} getMealPlanData={getMealPlanData} />}
            </div>
        </div >
    );
}

export default MealPlan;
