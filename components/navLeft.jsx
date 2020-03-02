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
    <h1>Left Menu</h1>
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
  </>
);

export default NavLeft;
