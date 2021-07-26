import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

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

  const handleDashboard = (e) => {
    history.push('/dashboard')
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className='landing-title' href="/">Adulting 101</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink onClick={handleQuiz}>Trivias</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleDashboard}>Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleLogout}>Log Out</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
