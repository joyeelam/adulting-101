function Input({ setCalories, setDiet, getMealPlanData }) {

    function handleCaloriesChange(e) {
        setCalories(e.target.value);
    }

    function handleSelectDiet(e) {
        console.log(e.target.value)
        setDiet(e.target.value)
    }

    return (
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
        </div>
    );
}

export default Input;