import React, { memo, useState } from "react";
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";

const SettingPage = memo(props => {
  const [stateDropUp, setStateDropUp] = useState(false);
  const [stateDropLeft, setStateDropLeft] = useState(false);
  const [stateDropRight, setStateDropRight] = useState(false);
  const [stateDropRightAlign, setStateDropRightAlign] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <>
      <h2>Settings</h2>
      <Nav tabs>
        <NavItem>
          <NavLink
            className=""
            onClick={() => {
              toggle("1");
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className=""
            onClick={() => {
              toggle("2");
            }}
          >
            Moar Tabs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab="">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      <h2>Profile</h2>
      <div className="d-flex p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
        <div className="col-sm-3">
          <blockquote className="blockquote text-left p-0 m-0">
            <a href="javascript:;" title="Update Image">
              <img
                className="mr-3 img-thumbnail"
                src="/images/profile2.jpg"
                alt="Profile Image"
              />
            </a>
            <p className="m-0 font-weight-bold">John Doe</p>
            <div className="blockquote-footer text-white">
              Web Administrator
            </div>
          </blockquote>
          <div className="pt-2">
            <a className="btn btn-info btn-sm" href="javascript:;">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a className="btn btn-secondary btn-sm" href="javascript:;">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
        <div className="col-sm-9">
          <form>
            <div className="form-group">
              <div className="form-row">
                <div className="col-sm-6">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Fullname"
                    className="form-control"
                    value="John Doe"
                  />
                  <label for="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="@username"
                    className="form-control"
                    value="johndoe"
                  />
                </div>
                <div className="col-sm-6">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@email.com"
                    className="form-control"
                    value="johndoe@gmail.com"
                  />
                  <label for="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="email">About</label>
                <textarea
                  name="about"
                  className="form-control"
                  placeholder="About"
                >
                  Web Administrator
                </textarea>
              </div>
              <div className="form-group">
                <button name="submit" className="btn btn-primary btn-sm">
                  <i className="fas fa-check"></i> Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

export default SettingPage;
