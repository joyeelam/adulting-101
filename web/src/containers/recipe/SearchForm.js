import React from 'react';


const SearchForm = ({ setSearch, setQuery, setFirstSearch, search }) => {
    const randomRecipe = ["pot roast", "pancakes", "hashbrowns", "mushrooms", "chicken", "salad", "corn", "Indian", "pasta", "bacon", "muffins", "peppers", "Mexican", "Cuban", "Malaysian", "sandwich", "pizza", "Korean", "cookies", "cake", "burger", "chilli", "barbeque", "dessert", "pineapple", "beef", "South American", "Japanese", "British", "Middle Eastern", "carrot", "lentils", "mayonaise"]

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const searchQuery = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
        setFirstSearch(false);
    }

    const randomQuery = e => {
        e.preventDefault();
        const randomInt = Math.floor(Math.random() * randomRecipe.length);
        setQuery(randomRecipe[randomInt]);
        setFirstSearch(false);
    }

    return (
        <div>
            Enter a search term:
            <form onSubmit={searchQuery}>
                <div>
                    <input type="text" className="search-bar" value={search} onChange={updateSearch} placeholder="Find a Recipe" />
                    <button type="submit" className="search-btn"> Search </button>
                </div>
            </form>

            <div>
                <button type="submit" onClick={randomQuery} id="recipe-gen"> Generate Random Recipes </button>
            </div>

        </div>
    );
}

export default SearchForm;