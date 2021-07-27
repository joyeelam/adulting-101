import './static/Profile.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Form, FormGroup, Input, FormFeedback, List, Label, FormText} from "reactstrap"

const EditProfile = () => {

  const history = useHistory()

  const [user, setUser] = useState({})
  const user_id = localStorage.getItem('id')

  useEffect(()=>{
    axios.get(`http://localhost:5000/users/get_user/${user_id}`).then(resp => {
      setUser(resp.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [user_id])

  const [profileFile, setProfileFile] = useState(null)
  const [previewProfile, setPreviewProfile] = useState(null)

  const fileElem = document.getElementById('fileElem')

  const handleClick = (e) => {
    if (fileElem) {
      fileElem.click()
    }
  }

  const handleUpload = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', profileFile)
    axios.post(`http://localhost:5000/users/${user_id}/upload`, formData)
      .then(resp => console.log(resp))
    window.location.reload()
  }

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [delay, setDelay] = useState(null)
  const [usernameValid, setUsernameValid] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const emailRegex = /\S+@\S+\.\S+/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{6,}$/

  const handleEdit = () => {
    axios({
      method: 'POST',
      url: `http://localhost:5000/users/${user_id}/update`,
      data: {
        username: username,
        email: email,
        password: password
      }
    })
    .then(resp => {
      // console.log(resp)
      window.location.reload()
    })
    .catch(error => {
      console.log(error)
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
      console.log(error)
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
            <li>Password should have both uppercase and lowercase characters.</li>
            <li>Password should have at least one special character.</li>
            <li>Password should have at least one number.</li>
          </ul>
        </List>
      </FormFeedback>
    }
  }

  const handleCancel = (e) => {
    history.push('/dashboard')
  }

  return (
    <div className='edit-container'>
      <h3 className='title'>Edit Profile</h3>
      <hr/>
      {previewProfile ?
        (<img src={previewProfile} alt='profile' className='dashboard-profile'/>)
        :
        (<img src={user.profile_image} alt='profile' className='dashboard-profile'/>)
      }
      <br/>
      <Form encType='multipart/form-data'>
        <FormGroup>
          <Button
            outline color='secondary' size='sm'
            id='fileSelect'
            onClick={handleClick}
          >
            Select Photo
          </Button>
          <Input
            id='fileElem'
            style={{display:'none'}}
            type='file'
            name='profileFile'
            accept='image/*'
            onChange={(e)=>{
              setProfileFile(e.target.files[0])
              setPreviewProfile(URL.createObjectURL(e.target.files[0]))
            }}
          />
          <br/>
          <FormText color='muted'>
            Please ensure image file is in JPG, JPEG, PNG, or GIF only
          </FormText>
          <br/>
          <Button
            outline color='secondary' size='sm'
            onClick={handleUpload}
          >
            Upload
          </Button>
        </FormGroup>
      </Form>
      <hr/>
      <Form className="form">
        <FormGroup>
          <Label>Username</Label>
          <Input
            id='edit-input'
            type="text"
            placeholder={user.username}
            value={username}
            onChange={handleUsernameInput}
            {...getUsernameInputProp()}
          />
          {getUsernameFormFeedback()}
        </FormGroup>
        <br/>
        <FormGroup>
          <Label>Email</Label>
          <Input
            id='edit-input'
            type="email"
            placeholder={user.email}
            value = {email}
            onChange = {handleEmailInput}
            {...getEmailInputProp()}
          />
          {getEmailFormFeedback()}
        </FormGroup>
        <br/>
        <FormGroup>
          <Label>Password</Label>
          <Input
            id='edit-input'
            type="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
            value = {password}
            onChange = {handlePasswordInput}
            {...getPasswordInputProp()}
          />
          {getPasswordFormFeedback()}
        </FormGroup>
        <br/>
        <Button
          color="primary" size='sm'
          onClick={handleEdit}
        >
          Save Changes
        </Button>
        {' '}
        <Button
          outline color="secondary" size='sm'
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Form>
    </div>
  )
}

export default EditProfile
