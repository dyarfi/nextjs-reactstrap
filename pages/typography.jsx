import React from "react";
import Head from "next/head";

import {
  Container,
  Row,
  Col,
  CardDeck,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import MainLayout from "../layout/MainLayout";
import HeadHome from "../components/head";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer";

const Typography = props => (
  <>
    <HeadHome title="Typography" />
    <NavBar />
    <MainLayout>
      <Col xs={12} md={10} className="content-wrapper">
        <Container fluid>
          <Row>
            <Col md="12" id="typography" className="typography">
              <h1>Typography</h1>
              <h2>Paragraph</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium veritatis ratione expedita consequatur magnam
                explicabo, omnis facilis blanditiis maxime eius nesciunt! Autem
                tempore aut cupiditate. Quibusdam, natus cum reiciendis id nulla
                ad vitae.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium veritatis ratione expedita consequatur magnam
                explicabo, omnis facilis blanditiis maxime eius nesciunt! Autem
                tempore aut cupiditate. Quibusdam, natus cum reiciendis id nulla
                ad vitae. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Pariatur aliquid sint, quae dolor dolore perspiciatis ab
                nesciunt impedit, obcaecati eveniet earum omnis facilis
                accusamus similique voluptatum tenetur placeat. Distinctio
                architecto assumenda, sint quidem necessitatibus quo nam nemo
                dicta unde omnis itaque repellat voluptatum doloremque soluta
                veritatis ratione sequi! Optio incidunt delectus est doloribus
                similique quidem soluta excepturi doloremque, repellendus
                impedit tempora cum consequuntur quasi cupiditate deserunt
                aspernatur reiciendis sunt sit fugit repudiandae enim! Harum
                consequatur magni ea officia cum provident atque neque, non
                corrupti nesciunt minus optio rem enim doloribus ipsam ipsa quae
                corporis vel placeat iste laboriosam quasi?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium veritatis ratione expedita consequatur magnam
                explicabo, omnis facilis blanditiis maxime eius nesciunt! Autem
                tempore aut cupiditate. Quibusdam, natus cum reiciendis id nulla
                ad vitae.
              </p>
              <h1>
                h1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h1>
              <h2>
                h2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <h3>
                h3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <h4>
                h4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h4>
              <br />
              <br />
              <h2 className="d-block clearfix">Buttons</h2>
              <div className="d-block hero-start">
                <Button className="btn btn-warning btn-sm">Submit</Button>
                <Button className="btn btn-warning btn-md">Submit</Button>
                <Button className="btn btn-warning btn-lg">Submit</Button>
                <Button className="btn btn-warning btn-sm btn-rounded">
                  Submit
                </Button>
                <Button className="btn btn-warning btn-md btn-rounded">
                  Submit
                </Button>
                <Button className="btn btn-warning btn-lg btn-rounded">
                  Submit
                </Button>
                <p className="my-4">
                  <span className="text-muted mr-2">Hidden Icons</span>
                  <Button className="btn btn-danger btn-sm btn-square btn-hidden">
                    <i className="fas fa-eye"></i>{" "}
                    <span className="links">Read More</span>
                  </Button>
                  <Button className="btn btn-danger btn-sm btn-square btn-hidden">
                    <i className="fas fa-trash"></i>{" "}
                    <span className="links">Delete</span>
                  </Button>
                  <Button className="btn btn-danger btn-sm btn-square btn-hidden">
                    <i className="fas fa-chevron-left"></i>{" "}
                    <span className="links">Submit</span>
                  </Button>
                  <Button className="btn btn-danger btn-sm btn-square btn-hidden">
                    <i className="fab fa-facebook"></i>{" "}
                    <span className="links">Post</span>
                  </Button>
                  <Button className="btn btn-danger btn-sm btn-square btn-hidden">
                    <i className="fab fa-twitter"></i>{" "}
                    <span className="links">Twit</span>
                  </Button>
                  <Button className="btn btn-danger btn-sm btn-square btn-hidden">
                    <i className="fab fa-github"></i>{" "}
                    <span className="links">Commit</span>
                  </Button>
                </p>
                <br />
                <br />
                <div className="container">
                  <CardDeck>
                    <Card className="m-2 box-shadow">
                      <CardBody className="col-12">
                        <Form>
                          <fieldset>
                            <legend className="text-info font-weight-bold uppercase">
                              Login
                            </legend>
                            <FormGroup>
                              <Label for="exampleInputEmail1">
                                Email address
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                              />
                              <small
                                id="emailHelp"
                                className="form-text text-muted"
                              >
                                We'll never share your email with anyone else.
                              </small>
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleInputPassword1">
                                Password
                              </Label>
                              <Input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                              />
                            </FormGroup>
                            <FormGroup check>
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <Label check for="exampleCheck1">
                                Check me out
                              </Label>
                            </FormGroup>
                          </fieldset>
                          <Button className="btn btn-info btn-sm btn-block">
                            Submit
                          </Button>
                        </Form>
                      </CardBody>
                    </Card>
                    <Card className="m-2 box-shadow">
                      <CardBody className="col-12">
                        <Form>
                          <fieldset>
                            <legend className="text-success font-weight-bold uppercase">
                              Login
                            </legend>
                            <FormGroup>
                              <Label for="exampleInputEmail2">
                                Email address
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail2"
                                aria-describedby="emailHelp"
                              />
                              <small
                                id="emailHelp"
                                className="form-text text-muted"
                              >
                                We'll never share your email with anyone else.
                              </small>
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleInputPassword2">
                                Password
                              </Label>
                              <Input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword2"
                              />
                            </FormGroup>
                            <FormGroup check>
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck2"
                              />
                              <Label check for="exampleCheck2">
                                Check me out
                              </Label>
                            </FormGroup>
                          </fieldset>
                          <Button className="btn btn-success btn-md btn-block">
                            Submit
                          </Button>
                        </Form>
                      </CardBody>
                    </Card>
                    <Card className="m-2 box-shadow">
                      <CardBody className="col-12">
                        <Form>
                          <fieldset>
                            <legend className="text-primary font-weight-bold uppercase">
                              Login
                            </legend>
                            <FormGroup>
                              <Label for="exampleInputEmail3">
                                Email address
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail3"
                                aria-describedby="emailHelp"
                              />
                              <small
                                id="emailHelp"
                                className="form-text text-muted"
                              >
                                We'll never share your email with anyone else.
                              </small>
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleInputPassword3">
                                Password
                              </Label>
                              <Input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword3"
                              />
                            </FormGroup>
                            <FormGroup check>
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck3"
                              />
                              <Label check for="exampleCheck3">
                                Check me out
                              </Label>
                            </FormGroup>
                          </fieldset>
                          <Button className="btn btn-primary btn-lg btn-block">
                            Submit
                          </Button>
                        </Form>
                      </CardBody>
                    </Card>
                  </CardDeck>
                </div>
                <br />
                <br />
                <Button className="btn btn-warning btn-sm">
                  Submit{" "}
                  <span className="badge badge-danger badge-pill">14</span>
                </Button>
                <Button className="btn btn-warning btn-md">
                  Submit{" "}
                  <span className="badge badge-danger badge-pill">14</span>
                </Button>
                <Button className="btn btn-warning btn-lg">
                  Submit{" "}
                  <span className="badge badge-danger badge-pill">14</span>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Col>
    </MainLayout>
    <Footer />
  </>
);

export default Typography;
