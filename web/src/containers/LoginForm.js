import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {Button, Form, FormGroup, FormText, Input} from "reactstrap"
import {Player} from '@lottiefiles/react-lottie-player'

const LoginForm = ({setCurrentUser, toggle}) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const login = () => {
    // console.log(username)
    // console.log(password)
    axios.post("https://adulthood-101.herokuapp.com/users/token", {username, password}).then(resp => {
      // console.log(resp)
      localStorage.setItem("token", resp.data.token)
      localStorage.setItem("id", resp.data.user_id)
      // console.log(localStorage.getItem("token"))
      setCurrentUser(true)
      toggle()
      window.location.reload()
      history.push('/')
    })
    .catch(error => {
      console.log(error)
      console.error(error.response)
    })
  }

  return(
    <div className="form">
      <h4>Sign In</h4>
      <Player autoplay loop src = 'https://assets4.lottiefiles.com/packages/lf20_2qmtqq0y.json' style = {{ height: '300px', width: '300px' }}></Player>
      <hr/>
      <Form>
        <FormGroup>
          <Input type="text" placeholder="Username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        </FormGroup>
        <br/>
        <FormGroup>
          <Input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        </FormGroup>
        <hr/>
        <FormText>
          Don't have an account? <Button color="link">Sign Up.</Button>
        </FormText>
      </Form>
      <Button color="primary" onClick={login}>Log In</Button>{' '}
      <Button color="secondary" onClick={toggle}>Cancel</Button>
    </div>
  )
}

export default LoginForm
