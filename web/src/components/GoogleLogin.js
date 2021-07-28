import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {GoogleLogin} from 'react-google-login'

const clientId = process.env.REACT_APP_G_CLIENT_ID

const LoginGoogle = ({setCurrentUser}) => {

  const history = useHistory()

  const onSuccess = (res) => {

    console.log('[Login Succcess] currentUser:', res.profileObj)

    const name = res.profileObj['givenName']
    const id = res.profileObj['googleId']
    const gmail = res.profileObj['email']

    axios({
      method: 'POST',
      url: 'https://adulthood-101.herokuapp.com/users/google_login',
      data: {
        givenName: name,
        googleId: id,
        email: gmail
      }
    })
    .then(resp => {
      // console.log(resp)
      localStorage.setItem('token', resp.data.token)
      localStorage.setItem("id", resp.data.user_id)
      setCurrentUser(true)
      window.location.reload()
      history.push('/')
    })
    .catch(error => {
      console.log(error)
    })
  }
  const onFailure = (res) => {
    console.log('[Login failed] res:', res)
  }

  return (
    <div>
      <GoogleLogin
        clientId = {clientId}
        buttonText = 'Sign in with Google'
        onSuccess = {onSuccess}
        onFailure = {onFailure}
        cookiePolicy = {'single_host_origin'}
        style = {{marginTop: '100px'}}
      />
    </div>
  )
}

export default LoginGoogle;
