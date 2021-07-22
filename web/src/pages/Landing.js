import SignUpModal from '../components/SignUpModal'
import LoginModal from '../components/LoginModal'
import LoginGoogle from '../components/GoogleLogin'

const Landing = () => {
  return (
    <div className='center-container'>
      <SignUpModal/>
      <br/>
      <LoginModal/>
      <br/>
      <LoginGoogle/>
    </div>
  )
}

export default Landing
