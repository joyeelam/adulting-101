import { useState } from "react";
import MealPlanList from "../containers/mealplanner/MealPlanList";
import "../pages/static/MealPlan.css"

function MealPlan() {
    const API_KEY = "29448a8ed2254f778b309500b1cfc046";
    const [mealPlanData, setMealPlanData] = useState(null);
    const [calories, setCalories] = useState(2000);
    const [diet, setDiet] = useState("paleo");
    const [loaded, setLoaded] = useState(false);

    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    date = dd + '/' + mm + '/' + yyyy;

    function getMealPlanData() {
        fetch(
            `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${diet}`
        )
            .then((resp) => resp.json())
            .then((data) => {
                setMealPlanData(data);
                console.log(data)
            })
            .catch((error) => {
                console.log(error.message);
            });
        console.log("Recipes fetched from 3rd party!")
        setLoaded(true);
    }

    function handleCaloriesChange(e) {
        setCalories(e.target.value);
    }

    function handleReload() {
        window.location.reload();
    }

    function handleSelectDiet(e) {
        console.log(e.target.value)
        setDiet(e.target.value)
    }

    return (
        <div className="mealplanner">
            <h1 className="pagetitle" onClick={handleReload}> daily meal planner </h1>
            <h4> <mark> today is {date}. </mark> </h4>

            {!loaded ? (
                <div>
                    <div clasName="inputcontainer">
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
                    </div>
                </div>) : null
            }

            <div className="mealcontainer">
                {mealPlanData && <MealPlanList mealPlanData={mealPlanData} />}
            </div>
        </div >
    );
}

export default MealPlan;
