import React from 'react';

const Header = () => {
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div>
            <h1> <img id="header-img" src="recipe-imgs/loading_cat.gif" width="120px" alt="cooking cat" onClick={refreshPage}></img></h1>
        </div>

    );
}

export default Header;