import React from "react";
import Link from "next/link";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const links = [
  { href: "/", label: "Logo" },
  { href: "/dashboard", label: "Dashboard" }
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`
}));

const NavLeft = () => (
  <>
    <h4 className="headline">Components</h4>
    <ListGroup flush className="list-group-nav-left">
      <ListGroupItem tag="a" href="/dashboard">
        Dashboard
      </ListGroupItem>
      <ListGroupItem tag="a" href="/form/buttons">
        Buttons
      </ListGroupItem>
      <ListGroupItem tag="a" href="/table/tables">
        Tables
      </ListGroupItem>
      <ListGroupItem tag="a" href="/card/posts">
        Cards
      </ListGroupItem>
      <ListGroupItem tag="a" href="/typography">
        Typography
      </ListGroupItem>
    </ListGroup>
    <h4 className="headline">UI Elements</h4>
    <ListGroup flush className="list-group-nav-left">
      <ListGroupItem tag="a" href="/card/employees">
        Employees
      </ListGroupItem>
      <ListGroupItem tag="a" href="/carousel/carousels">
        Carousels
      </ListGroupItem>
      <ListGroupItem tag="a" href="/table/tables">
        Tables
      </ListGroupItem>
      <ListGroupItem tag="a" href="/card/posts">
        Cards
      </ListGroupItem>
      <ListGroupItem tag="a" href="/typography">
        Typography
      </ListGroupItem>
    </ListGroup>
  </>
);

export default NavLeft;
