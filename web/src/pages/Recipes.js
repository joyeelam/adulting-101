import './static/Recipe.css'
import { useEffect, useState } from 'react'
import Recipe from "../containers/recipe/Recipe"
import Header from '../containers/recipe/Header'
import SearchIngredients from '../containers/recipe/SearchIngredients'
import SearchForm from '../containers/recipe/SearchForm'
import axios from 'axios';

const Recipes = () => {

    const APP_ID = process.env.REACT_APP_APP_ID
    const API_KEY = process.env.REACT_APP_API_KEY

    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [firstSearch, setFirstSearch] = useState(true)
    const [noHits, setNoHits] = useState()
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    const user_id = localStorage.getItem('id')

    useEffect(() => {
        getRecipes();
        getSavedUrls();
    }, [query])

    const getRecipes = async () => {
        setIsLoading(true)
        const response = await fetch(
            `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${query}`
        )

        const data = await response.json()
        if (data.hits.length !== 0) {
            setRecipes(data.hits);
            setNoHits(false);
            console.log(data.hits);
            // console.log(data.hits.length);

        } else {
            // console.log(data.hits.length);
            setRecipes(data.hits)
            setNoHits(true)
        }
        setIsLoading(false)
    }

    const getSavedUrls = () => {
        axios.get(`https://adulthood-101.herokuapp.com/recipe-generator/${user_id}`)
            .then(resp => {
                const recipes = resp.data
                setData(recipes)
                // console.log(recipes)
                console.log(data)

            })
            .catch((error) => {
                console.log(error.message)
            });
    };

    return (
        <div className="App">

            <Header />

            <SearchForm
                setSearch={setSearch}
                setQuery={setQuery}
                setFirstSearch={setFirstSearch}
                search={search}
            />

            {firstSearch ? <SearchIngredients
                setQuery={setQuery}
                setSearch={setSearch}
                setFirstSearch={setFirstSearch}
            /> : null}

            {isLoading ? (<p> Fetching Recipes from 3rd party... Wait a moment please </p>) :

                <div className="recipes-container">

                    {recipes.map(recipe => (
                        <Recipe
                            key={Math.random(150)}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            source={recipe.recipe.url}
                            ingredients={recipe.recipe.ingredients}
                        />
                    ))}
                </div>
            }

            {!firstSearch && noHits ? <p> No Recipes Found </p> : null}

        </div>
    )
}

export default Recipes
