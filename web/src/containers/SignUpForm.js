import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {Button, Form, FormGroup, FormText, Input, FormFeedback, List} from "reactstrap"
import {Player} from '@lottiefiles/react-lottie-player'

const SignUpForm = ({setCurrentUser, toggle}) => {

  const history = useHistory()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [delay, setDelay] = useState(null)
  const [usernameValid, setUsernameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const emailRegex = /\S+@\S+\.\S+/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

  const signUp = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/users/',
      data: {
        username: username,
        email: email,
        password: password
      }
    })
    .then(resp => {
      // console.log(resp.data)
      localStorage.setItem('token', resp.data.token)
      toggle()
      history.push('/home')
      setCurrentUser(true)
    })
    .catch(error => {
      console.error(error.response)
    })
  }

  // username validation

  const checkUsername = (newUsername) => {
    axios.get(`http://localhost:5000/users/check_username/${newUsername}`)
    .then(resp => {
      // console.log(resp.data)
      if (resp.data.valid) {
        setUsernameValid(true)
      } else {
        setUsernameValid(false)
      }
    })
    .catch(error => {
      console.error(error.response)
    })
  }

  const handleUsernameInput = e => {
    clearTimeout(delay)
    const newUsername = e.target.value
    setUsername(newUsername)
    const newDelay = setTimeout(() => {
      checkUsername(newUsername)
    }, 400)
    setDelay(newDelay)
  }

  const getUsernameInputProp = () => {
    if (!username.length) {
      return null
    }
    if (usernameValid) {
      return {valid: true}
    } else {
      return {invalid: true}
    }
  }

  const getUsernameFormFeedback = () => {
    if (!username.length) {
      return null
    }
    if (usernameValid) {
      return <FormFeedback valid>Username is available</FormFeedback>
    } else {
      return <FormFeedback invalid>Username already exists, try something else</FormFeedback>
    }
  }

  // email validation

  const checkEmail = (newEmail) => {
    if (emailRegex.test(newEmail)) {
      axios.get(`http://localhost:5000/users/check_email/${newEmail}`)
      .then(resp => {
        // console.log(resp.data)
        if (resp.data.valid) {
          setEmailValid(true)
        } else {
          setEmailValid(false)
        }
      })
      .catch(error => {
        console.error(error.response)
      })
    }
  }

  const handleEmailInput = e => {
    const newEmail = e.target.value
    setEmail(newEmail)
    const newDelay = setTimeout(() => {
      checkEmail(newEmail)
    }, 400)
    setDelay(newDelay)
  }

  const getEmailInputProp = () => {
    if (!email.length) {
      return null
    } if (emailValid) {
      return {valid: true}
    } else {
      return {invalid: true}
    }
  }

  const getEmailFormFeedback = () => {
    if (!email.length) {
      return null
    }
    if (emailValid) {
      return <FormFeedback valid>Email address looks good!</FormFeedback>
    } else {
      return <FormFeedback invalid>Please enter a valid email</FormFeedback>
    }
  }

  // password validation

  const handlePasswordInput = e => {
    const newPassword = e.target.value
    setPassword(newPassword)
    if (passwordRegex.test(newPassword)) {
      setPasswordValid(true)
    } else {
      setPasswordValid(false)
    }
  }

  const getPasswordInputProp = () => {
    if(!password.length) {
      return null
    }
    if(password.length < 6) {
      return {invalid: true}
    }
  }

  const getPasswordFormFeedback = () => {
    if(!password.length) {
      return null
    }
    if (passwordValid) {
      return <FormFeedback valid>Password looks secure!</FormFeedback>
    } else {
      return <FormFeedback invalid>
        <List>
          <ul>
            <li>Password should be at least 6 characters.</li>
            <li>Password should have both uppercase and lowercase characters.</li>
            <li>Password should have at least one special character.</li>
          </ul>
        </List>
      </FormFeedback>
    }
  }

  // confirm password validation

  const getConfirmPasswordInputProp = () => {
    if (!confirmPassword) {
      return null
    }
    if (password === confirmPassword) {
      return {valid: true}
    } else {
      return {invalid: true}
    }
  }

  const getConfirmPasswordFeedback = () => {
    if (!confirmPassword.length) {
      return null
    }
    if (password === confirmPassword) {
      return <FormFeedback valid>Good to go!</FormFeedback>
    }
    if (password !== confirmPassword) {
      return <FormFeedback invalid>Oops, passwords don't match. Try again.</FormFeedback>
    }
  }

  return (
    <div>
      <h4>Sign Up</h4>
      <Player autoplay loop src = 'https://assets4.lottiefiles.com/packages/lf20_2qmtqq0y.json' style = {{ height: '300px', width: '300px' }}></Player>
      <hr/>
      <Form className="form">
        <FormGroup>
          <Input
            type="text"
            placeholder="Enter a username between 6 and 20 characters"
            value={username}
            onChange={handleUsernameInput}
            {...getUsernameInputProp()}
          />
          {getUsernameFormFeedback()}
        </FormGroup>
        <br/>
        <FormGroup>
          <Input
            type="email"
            placeholder="Email"
            value = {email}
            onChange = {handleEmailInput}
            {...getEmailInputProp()}
          />
          {getEmailFormFeedback()}
        </FormGroup>
        <br/>
        <FormGroup>
          <Input
            type="password"
            placeholder="Minimum 6 characters"
            value = {password}
            onChange = {handlePasswordInput}
            {...getPasswordInputProp()}
          />
          {getPasswordFormFeedback()}
          <br/>
          <Input
            type="password"
            placeholder="Retype password to confirm"
            value = {confirmPassword}
            onChange = {(e) => {setConfirmPassword(e.target.value)}}
            {...getConfirmPasswordInputProp()}
          />
          {getConfirmPasswordFeedback()}
        </FormGroup>
        <hr/>
        <FormGroup>
          <Button color="success" disabled>Sign up with Google</Button>
        </FormGroup>
        <FormText>
          Already a member? <Button color="link">Login here.</Button>
        </FormText>
      </Form>
      <Button color="primary" onClick={signUp}>Sign Up</Button>{' '}
      <Button color="secondary" onClick={toggle}>Cancel</Button>
    </div>
  )
}

export default SignUpForm
