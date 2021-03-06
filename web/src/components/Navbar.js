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

  return (
    <div>
      <Navbar light expand="md" className='navbar' fixed="top">
        <NavbarBrand id="navbartitle" href="/">Adulting 101</NavbarBrand>
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
                  <DropdownItem tag="a" href="https://pedantic-leakey-9de357.netlify.app/recipe-generator">Random Recipe Generator </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="https://pedantic-leakey-9de357.netlify.app/saved-recipes">Saved Recipes </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="https://pedantic-leakey-9de357.netlify.app/meal-planner"> Daily Meal Planner </DropdownItem>
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
