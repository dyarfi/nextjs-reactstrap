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
    <h2 className="headline">Left Menu</h2>
    <ListGroup flush>
      <ListGroupItem tag="a" href="/form/forms">
        Forms
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
    <h2 className="headline">UI Elements</h2>
    <ListGroup flush>
      <ListGroupItem tag="a" href="/page/pages">
        Pages
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
  </>
);

export default NavLeft;
