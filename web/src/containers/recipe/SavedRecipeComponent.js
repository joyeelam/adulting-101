import axios from 'axios';

const SavedRecipe = ({ title, url, image }) => {
    const user_id = localStorage.getItem('id')

    const handleRemove = () => {
        console.log("Remove from Favorites");

        axios({
            method: "POST",
            url: "http://localhost:5000/recipe-generator/remove-recipe",
            data: {
                user_id: user_id,
                recipe_url: url
            }
        })
            .then(resp => {
                console.log(resp);
            })
            .catch((error) => {
                console.log(error.message);
            })

        window.location.reload()
    }

    return (
        <div>
            <div className="recipelist" key={title}>
                <a href={url} id="link" target="_blank" rel="noreferrer">
                    <div id="recipetitle"> {title} </div>
                    <div id="recipeimgdiv">
                        <img src={image} alt={title} id="recipeimg" />
                    </div>
                    Get Recipe ➪
                </a>
                <div>
                    <button onClick={handleRemove} className="delete-btn"> X </button>
                </div>
            </div>
        </div>
    )
}

export default SavedRecipe;


{/* <div>
<div className="recipelist" key={recipe.title}>
    <a href={recipe.url} id="link" target="_blank" rel="noreferrer">

        <div id="recipetitle"> {recipe.title} </div>
        <div>
            <img src={recipe.image} alt={recipe.title} />
        </div>
        Get Recipe ➪
    </a>
    <div>
        <button onClick={handleRemove} className="delete-btn"> Delete </button>
    </div>
</div>
</div> */}