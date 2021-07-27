import React from 'react';

const SearchIngredients = ({ setQuery, setSearch, setFirstSearch }) => {

    const handleClick = (e) => {
        setQuery(e.target.alt);
        setSearch('');
        setFirstSearch(false);
    }

    return (

        <div>
            or search by ingredient:
            <div className="ingredients">
                <img src="recipe-imgs/egg.png" alt="egg" className="ingr-img" onClick={handleClick} ></img>
                <img src="recipe-imgs/bread.jpeg" alt="sandwich" className="ingr-img" onClick={handleClick} ></img>
                <img src="recipe-imgs/potato.jpeg" alt="potato" className="ingr-img" onClick={handleClick}></img>
                <img src="recipe-imgs/onion.jpeg" alt="onion" className="ingr-img" onClick={handleClick}></img>
                <img src="recipe-imgs/rice.jpeg" alt="fried rice" className="ingr-img" onClick={handleClick}></img>
                <img src="recipe-imgs/chicken.jpeg" alt="chicken" className="ingr-img" onClick={handleClick}></img>
                <img src="recipe-imgs/fish.png" alt="fish" className="ingr-img" onClick={handleClick}></img>
                <img src="recipe-imgs/cheese.png" alt="cheese" className="ingr-img" onClick={handleClick}></img>
                <img src="recipe-imgs/beef.png" alt="beef" className="ingr-img" onClick={handleClick}></img>
                <img src="recipe-imgs/broccoli.png" alt="broccoli" className="ingr-img" onClick={handleClick} ></img>
                <img src="recipe-imgs/carrot.png" alt="broccoli" className="ingr-img" onClick={handleClick}></img>
                <img src="recipe-imgs/tofu.jpeg" alt="tofu" className="ingr-img" onClick={handleClick}></img>
            </div>
        </div>
    );
}

export default SearchIngredients;

