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
      <Navbar color="dark" dark expand="sm" fixed="top">
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
          <NavbarText>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
