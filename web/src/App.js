import { useState } from 'react'
import { Route, useHistory } from 'react-router-dom'

import NavigationBar from './components/Navbar'

import Landing from './pages/Landing'
import Homepage from './pages/Homepage'
import Trivia from './pages/Trivia'

import Recipes from './pages/Recipes'
import Dashboard from './pages/Dashboard'
import EditProfile from './pages/EditProfile'
import Cooking from './pages/Cooking.js'
import SavedRecipes from './pages/SavedRecipes'

import './App.css'
import MealPlan from './pages/MealPlan'

function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'))
  const history = useHistory()

  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    setLoggedIn(!loggedIn)
    history.push('/')
  }

  if (!loggedIn) {
    return (
      <>
        <Route exact path='/' component={Landing} />
      </>
    )
  } else {
    return (
      <>
        <NavigationBar logOut={logOut} />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/trivia' component={Trivia} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/edit' component={EditProfile} />
        <Route exact path='/recipe-generator' component={Recipes} />
        <Route exact path='/cooking' component={Cooking} />
        <Route exact path='/saved-recipes' component={SavedRecipes} />
        <Route exact path='/meal-planner' component={MealPlan} />
      </>
    )
  }
}

export default App
