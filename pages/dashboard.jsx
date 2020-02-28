import React from "react";
import Head from "next/head";

import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import MainLayout from "../layout/MainLayout";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Dashboard = props => (
  <>
    <Head>
      <title>Dashboard</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <MainLayout>
      <Row>
        <Col xs={12} sm={3} className="bg-light">
          <h1>Left Menu</h1>
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
              <Input type="textarea" name="text" id="exampleText" />
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
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Check me out
              </Label>
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
        <Col xs={12} sm={9}>
          <h1>Dashboard</h1>
          <p>
            To get started, edit <code>pages/dashboard.jsx</code> and save to
            reload.
          </p>
          <Row>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem, recusandae?
                </CardText>
                <Button>
                  <i className="fab fa-facebook"></i> Go somewhere
                </Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem, recusandae?
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </MainLayout>
    <Footer />
    {/* <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style> */}
  </>
);

export default Dashboard;
