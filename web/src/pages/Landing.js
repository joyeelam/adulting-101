import './static/Landing.css'
import {useState} from 'react'
import {Player} from '@lottiefiles/react-lottie-player'

import SignUpModal from '../components/SignUpModal'
import LoginModal from '../components/LoginModal'
import LoginGoogle from '../components/GoogleLogin'

const Landing = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [currentUser, setCurrentUser] = useState(!!localStorage.getItem('token'))

  return (
    <div className='center-container'>
      <h1 className='landing-title'>Adulting 101</h1>
      <h5 className='landing-text'>We're all pretending to be adults here</h5>
      <Player autoplay loop src = 'https://assets5.lottiefiles.com/packages/lf20_vcfdbwsj.json' style={{height: '150px'}}></Player>
      <hr/>
      <SignUpModal setCurrentUser={setCurrentUser} toggle={toggle}/>
      <br/>
      <LoginModal setCurrentUser={setCurrentUser} toggle={toggle}/>
      <br/>
      <LoginGoogle setCurrentUser={setCurrentUser}/>
    </div>
  )
}

export default Landing
