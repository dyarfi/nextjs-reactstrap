import React, { useState } from "react";
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
  NavbarText
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" fixed="top" className="py-0">
        <NavbarBrand href="/">
          <img src="../logo.svg" alt="Logo" className="logo" />
          NextJS BS 4
        </NavbarBrand>
        <NavbarToggler onClick={toggle} color="dark" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/typography">Typography</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Pages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="div">
                  <NavLink href="/card/posts" className="text-primary">
                    Posts
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
              <NavbarText className="align-self-center text-right font-weight-bold">
                <img
                  src="/images/profile2.jpg"
                  className="border rounded-circle w-15 img-fluid mr-1"
                />
                John Doe
              </NavbarText>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag="div">
                <NavLink href="/table/tables" className="text-dark">
                  <i className="fas fa-user"></i> Profile
                </NavLink>
              </DropdownItem>
              <DropdownItem tag="div">
                <NavLink href="/form/buttons" className="text-dark">
                  <i className="fas fa-cog"></i> Settings
                </NavLink>
              </DropdownItem>
              <DropdownItem tag="div">
                <NavLink href="/card/posts" className="text-dark">
                  <i className="fas fa-home"></i> Logout
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
