import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownItem, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

const NavigationBar = ({ logOut }) => {

  const history = useHistory()

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const [currentUser, setCurrentUser] = useState(!!localStorage.getItem('token'))

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);


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

  // const handleRecipe = (e) => {
  //   history.push('/recipe-generator')
  // }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className='landing-title' href="/">Adulting 101</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink onClick={handleQuiz}>Trivias</NavLink>
            </NavItem>
            <NavItem>
              {/* <NavLink onClick={handleRecipe}>Recipe Generator</NavLink> */}
              <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle nav caret>
                  Recipes
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="http://localhost:3000/recipe-generator">Random Recipe Generator </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="http://localhost:3000/saved-recipes">Starred Recipes </DropdownItem>
                </DropdownMenu>
              </Dropdown>

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
