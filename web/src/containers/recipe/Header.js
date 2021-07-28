const Header = () => {
  const refreshPage = () => {
      window.location.reload(false);
  }

  return (
    <div>
        <h1>
          <img id="header-img" src="recipe-imgs/loading_cat.gif" alt="cooking cat" onClick={refreshPage}/>
        </h1>
    </div>
  )
}

export default Header
