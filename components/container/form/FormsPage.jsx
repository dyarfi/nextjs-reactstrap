import React, { memo, useState } from 'react';

import Link from 'next/link';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  FormText,
} from 'reactstrap';

const FormsPage = memo(props => {
  return (
    <>
      <h1>Form Groups</h1>
      <Row>
        <Col lg="6">
          <h3>Register</h3>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                placeholder="Text Area"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option one is this and
                  that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option two can be
                  something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled /> Option three is
                  disabled
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check className="mb-3">
              <Label check>
                <Input type="checkbox" /> Check me out
              </Label>
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
        <Col lg="6">
          <Form>
            <h3>Register Account</h3>
            <FormGroup>
              <Label for="exampleName2">Name</Label>
              <Input
                type="email"
                name="name"
                id="exampleName2"
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail2">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                placeholder="Email"
              />
              <FormText color="muted">
                We do not share your email address.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword2">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword2"
                placeholder="Password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePhone2">Phone</Label>
              <Input
                type="text"
                name="phone"
                id="examplePhone2"
                placeholder="Phone"
              />
            </FormGroup>
            <FormGroup check className="mb-3">
              <Label check>
                <Input type="checkbox" name="terms" /> Agree{' '}
                <Link href="/terms">
                  <a>terms </a>
                </Link>
                and
                <Link href="/conditions" as="a">
                  <a> condition</a>
                </Link>
              </Label>
            </FormGroup>
            <Button color="primary" size="lg" block>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
});

export default FormsPage;
