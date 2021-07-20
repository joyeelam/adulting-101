import {useState} from 'react'
import {Route, useHistory} from 'react-router-dom'

import Homepage from './pages/Homepage'

import NavigationBar from './components/Navbar'

import './App.css'

function App() {

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'))
  const history = useHistory()

  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    setLoggedIn(!loggedIn)
    history.push('/')
  }

  return (
    <div className='App'>
      <NavigationBar logOut = {logOut} />
      <Route exact path='/home' component={Homepage}/>
    </div>
  )
}

export default App
