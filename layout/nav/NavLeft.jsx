import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCollapse,
} from 'reactstrap';

import { MENUS, SUBMENUS } from '../../constants/menus';

function NavLeft(props) {
  const { activeLink } = props;

  return (
    <>
      <h4 className="headline">Components</h4>
      <div className="wrapper-list-group">
        <ListGroup flush className="list-group-nav-left">
          {MENUS.map((item, k) => {
            const isActive = activeLink === item.name ? true : false;
            return (
              <ListGroupItem
                key={`l${k}`}
                active={isActive}
                tag={item.as}
                href={item.href}
              >
                {item.icon && <i className={item.icon}></i>} {item.label}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
      <h4 className="headline">UI Elements</h4>
      <div className="wrapper-list-group">
        <ListGroup flush className="list-group-nav-left">
          {SUBMENUS.map((subItem, k) => {
            const isActive = activeLink === subItem.name ? true : false;
            return (
              !subItem.subLinks &&
              <ListGroupItem
              key={`k${k}`}
              active={isActive}
              tag={subItem.as}
              href={subItem.href}
            >                
              {subItem.icon && <i className={subItem.icon}></i>}&nbsp;{subItem.label}
              </ListGroupItem>
              || (
              <ListGroupItem key={`ks${k}`}>
                <a
                  href={subItem.href}
                  className="dropdown-toggle"
                  id={`toggleCollapser-${k}`}
                >
                  {subItem.icon && <i className={subItem.icon}></i>}&nbsp;{subItem.label}
                </a>
                <UncontrolledCollapse toggler={`toggleCollapser-${k}`}>
                  <Nav vertical className="mt-2">
                  {subItem.subLinks.map((subs, l) => {
                    return (
                        <NavItem key={`l${l}`}>
                          <NavLink href={subs.href}>{subs.label}</NavLink>
                        </NavItem>
                    );
                  })}
                  </Nav>
                </UncontrolledCollapse>
              </ListGroupItem>)           
            )}
          )}
        </ListGroup>
      </div>
    </>
  );
}

export default NavLeft;
