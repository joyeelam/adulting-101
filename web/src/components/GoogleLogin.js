import {GoogleLogin} from 'react-google-login'

const clientId = process.env.REACT_APP_G_CLIENT_ID

const LoginGoogle = () => {

  const onSuccess = (res) => {
    console.log('[Login Succcess] currentUser:', res.profileObj)
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
        isSignedIn = {true}
      />
    </div>
  )

}

export default LoginGoogle
