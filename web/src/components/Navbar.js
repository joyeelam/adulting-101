import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

const NavigationBar = ({logOut}) => {

  const history = useHistory()

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const [currentUser, setCurrentUser] = useState(!!localStorage.getItem('token'))

  const handleLogout = (e) => {
    logOut(e)
    setCurrentUser(!currentUser)
  }

  const handleQuiz = (e) => {
    history.push('/trivia')
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Project App</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {currentUser ?
              <>
                <NavItem>
                  <NavLink onClick={handleQuiz}>Trivias</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={handleLogout}>Log Out</NavLink>
                </NavItem>
              </>
              :
              <>
                <NavItem>
                  <LoginModal setCurrentUser={setCurrentUser}/>
                </NavItem>
                <NavItem>
                  <SignUpModal setCurrentUser={setCurrentUser}/>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
