import {useState} from 'react'
import {Route, useHistory} from 'react-router-dom'

import NavigationBar from './components/Navbar'

import Homepage from './pages/Homepage'
import Trivia from './pages/Trivia'
import Landing from './pages/Landing'

import './App.css'

function App() {

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'))
  const history = useHistory()

  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    setLoggedIn(!loggedIn)
    history.push('/')
  }

  if(!loggedIn) {
    return (
      <>
        <Route exact path='/' component={Landing}/>
      </>
    )
  } else {
    return (
      <>
        <NavigationBar logOut = {logOut} />
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/trivia' component={Trivia}/>
      </>
    )
  }
}

export default App
