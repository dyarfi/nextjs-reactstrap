import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function NavBar({
  /* state vars */
  isOpen,
  isToggled,
  /* toggles */
  toggle,
  toggleLeft,
}) {
  return (
    <div>
      <Navbar color="dark" dark expand="sm" fixed="top">
        <NavbarBrand href="/">
          <img src="/logo.svg" alt="Logo" className="logo" />
          NextJS BS 4
        </NavbarBrand>
        <NavbarToggler onClick={toggle} color="dark" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                href="#"
                className="d-none d-sm-block"
                onClick={toggleLeft}
              >
                <i
                  className={`fas fa-caret-square-${
                    isToggled ? 'left' : 'right'
                  }`}
                ></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/page/typography">Typography</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Pages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="div">
                  <NavLink href="/card/posts" className="text-primary">
                    Cards
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="div">
                  <NavLink href="/table/tables" className="text-primary">
                    Tables
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="div">
                  <NavLink href="/form/buttons" className="text-primary">
                    Buttons
                  </NavLink>
                </DropdownItem>
                {/* <DropdownItem divider /> */}
                <DropdownItem tag="div">
                  <NavLink href="/form/forms" className="text-primary">
                    Forms
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle caret nav className="text-secondary">
              <NavbarText className="align-self-center text-left font-weight-bold">
                <img
                  src="/images/profile2.jpg"
                  className="border rounded-circle img-42 img-fluid mr-1"
                />
                John Doe
              </NavbarText>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="div">
                <NavLink href="/page/profile" className="text-dark">
                  <i className="fas fa-user"></i> Profile
                </NavLink>
              </DropdownItem>
              <DropdownItem tag="div">
                <NavLink href="/page/setting" className="text-dark">
                  <i className="fas fa-cog"></i> Setting
                </NavLink>
              </DropdownItem>
              <DropdownItem tag="div">
                <NavLink href="/page/login" className="text-dark">
                  <i className="fas fa-home"></i> Logout
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
