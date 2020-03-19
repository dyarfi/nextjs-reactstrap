import React, { memo } from 'react';
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import {
  Button,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';

const SettingPage = memo(props => {
  const { isOpen, toggle } = props;

  return (
    <>
      <h2>Settings</h2>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={isOpen === '1' ? 'active' : ''}
            onClick={() => {
              toggle('1');
            }}
          >
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={isOpen === '2' ? 'active' : ''}
            onClick={() => {
              toggle('2');
            }}
          >
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={isOpen === '3' ? 'active' : ''}
            onClick={() => {
              toggle('3');
            }}
          >
            Post
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={isOpen === '4' ? 'active' : ''}
            onClick={() => {
              toggle('4');
            }}
          >
            Widget
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={isOpen}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
                <h5>Profile</h5>
                <div className="bg-white p-3 text-secondary mx-auto">
                  <Form className="form-horizontal" action="" method="GET">
                    <div className="form-row">
                      <Col sm="2">
                        <span className="text-black">Public Profile</span>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="visible_profile"
                            id="visible_profile_yes"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="visible_profile_yes"
                          >
                            Yes
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="visible_profile"
                            id="visible_profile_no"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="visible_profile_no"
                          >
                            No
                          </Label>
                        </div>
                      </Col>
                      <Col sm="2">
                        <span className="text-black">Show Email</span>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="hideEmail"
                            id="hideEmailYes"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="hideEmailYes"
                          >
                            Yes
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="hideEmail"
                            id="hideEmailNo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label className="form-check-label" for="hideEmailNo">
                            No
                          </Label>
                        </div>
                      </Col>
                      <Col sm="8"></Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="12" className="text-right mt-1">
                        <Button
                          type="submit"
                          name="submit"
                          className="btn btn-md btn-primary"
                        >
                          <i className="fas fa-check"></i> Save
                        </Button>
                      </Col>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
                <h5>Contact</h5>
                <div className="bg-white p-3 text-secondary mx-auto">
                  <Form action="" method="GET">
                    <div className="form-row">
                      <Col sm="2">
                        <span className="text-black">Disable Contact Form</span>
                        <FormGroup check>
                          <Label check for="disableFormYes">
                            <Input
                              type="radio"
                              name="disableForm"
                              id="disableFormYes"
                              defaultValue="1"
                            />
                            Yes
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check for="disableFormNo">
                            <Input
                              type="radio"
                              name="disableForm"
                              id="disableFormNo"
                              defaultValue="0"
                            />
                            No
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col sm="3">
                        <div className="form-group">
                          <Label for="contactPhone">Phone</Label>
                          <Input
                            type="text"
                            name="contactPhone"
                            className="form-control"
                            id="contactPhone"
                            placeholder="Business phone"
                          />
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="form-group">
                          <Label for="contactEmail">Email</Label>
                          <Input
                            type="text"
                            name="contactEmail"
                            className="form-control"
                            id="contactEmail"
                            placeholder="Business email"
                          />
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="form-group">
                          <Label for="contactAddress">Address</Label>
                          <Input
                            type="textarea"
                            name="contactAddress"
                            id="contactAddress"
                            className="form-control"
                            placeholder="My business address"
                          />
                        </div>
                      </Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="12" className="text-right mt-1">
                        <Button
                          type="submit"
                          name="submit"
                          className="btn btn-md btn-primary"
                        >
                          <i className="fas fa-check"></i> Save
                        </Button>
                      </Col>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <div className="p-3 align-items-center text-white-50 bg-gradient-primary box-shadow">
                <h5>Post</h5>
                <div className="bg-white p-3 text-secondary mx-auto">
                  <Form className="form-horizontal" action="" method="GET">
                    <div className="form-row">
                      <Col sm="2">
                        <span className="text-black font-weight-bold">
                          Maintenance Mode
                        </span>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="maintenanceMode"
                            id="maintenanceModeYes"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="maintenanceModeYes"
                          >
                            Yes
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="maintenanceMode"
                            id="maintenanceModeNo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="maintenanceModeNo"
                          >
                            No
                          </Label>
                        </div>
                      </Col>
                      <Col sm="2">
                        <span className="text-black font-weight-bold">
                          Disable Comments
                        </span>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="comments"
                            id="disableCommentYes"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="disableCommentYes"
                          >
                            Yes
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="comments"
                            id="disableCommentNo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="disableCommentNo"
                          >
                            No
                          </Label>
                        </div>
                      </Col>
                      <Col sm="2">
                        <Label className="font-weight-bold">Comments</Label>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="commentModerate"
                            id="commentModerationOne"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="commentModerationOne"
                          >
                            Always Moderate
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="commentModerate"
                            id="commentModerationTwo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="commentModerationTwo"
                          >
                            Wait Moderation
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="commentModerate"
                            id="commentModerationThree"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="commentModerationThree"
                          >
                            Delete Instantly
                          </Label>
                        </div>
                      </Col>
                      <Col sm="6">
                        <Label className="font-weight-bold">Post Format</Label>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="postFormat"
                            id="postFormatOne"
                            className="form-check-input"
                            value="1"
                          />
                          <Label
                            className="form-check-label"
                            for="postFormatOne"
                          >
                            /your-blog-post-title/
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="postFormat"
                            id="postFormatTwo"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="postFormatTwo"
                          >
                            /dd-mm-yyyy/your-blog-post-title/
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="postFormat"
                            id="postFormatThree"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="postFormatThree"
                          >
                            /category/your-blog-post-title/
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            name="postFormat"
                            id="postFormatFour"
                            className="form-check-input"
                            value="0"
                          />
                          <Label
                            className="form-check-label"
                            for="postFormatFour"
                          >
                            /dd-mm-yyyy/category/your-blog-post-title/
                          </Label>
                        </div>
                      </Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="6">
                        <Label for="maintenanceModeText">
                          Maintenance Message
                        </Label>
                        <Input
                          type="textarea"
                          id="maintenanceModeText"
                          name="maintenanceModeText"
                          className="form-control"
                          placeholder="Your status"
                          defaultValue="We are in maintenance mode, sorry for the convinience!"
                        />
                      </Col>
                      <Col sm="6">
                        <Label for="statusText">Status</Label>
                        <Input
                          type="textarea"
                          id="statusText"
                          name="statusText"
                          className="form-control"
                          placeholder="Your status"
                          defaultValue="Hi, John Doe was here!"
                        />
                      </Col>
                    </div>
                    <div className="form-row mt-3">
                      <Col sm="12" className="text-right mt-1">
                        <Button
                          type="submit"
                          name="submit"
                          className="btn btn-md btn-primary"
                        >
                          <i className="fas fa-check"></i> Save
                        </Button>
                      </Col>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row className="pt-4">
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
            <a href="#" title="Update Image">
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
            <a className="btn btn-info btn-sm" href="#">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a className="btn btn-secondary btn-sm" href="#">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
        <div className="col-sm-9">
          <form>
            <div className="form-group">
              <div className="form-row">
                <div className="col-sm-6">
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Fullname"
                    className="form-control"
                    defaultValue="John Doe"
                  />
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="@username"
                    className="form-control"
                    defaultValue="johndoe"
                  />
                </div>
                <div className="col-sm-6">
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@email.com"
                    className="form-control"
                    defaultValue="johndoe@gmail.com"
                  />
                  <Label for="phone">Phone</Label>
                  <Input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <Label for="email">About</Label>
                <Input
                  type="textarea"
                  name="about"
                  className="form-control"
                  placeholder="About"
                  defaultValue="Web Administrator"
                />
              </div>
              <div className="form-group">
                <Button name="submit" className="btn btn-primary btn-sm">
                  <i className="fas fa-check"></i> Update Profile
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

export default SettingPage;
