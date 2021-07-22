import {GoogleLogout} from 'react-google-login'

const clientId = process.env.REACT_APP_G_CLIENT_ID

const GoogleLogout = () => {

  const onSuccess = () => {
    alert('Logout successful')
  }

  return (
    <div>
      <GoogleLogout
        clientId = {clientId}
        buttonText = 'Sign Out'
        onLogoutSuccess = {onSuccess}
      ></GoogleLogout>
    </div>
  )

}

export default GoogleLogout
