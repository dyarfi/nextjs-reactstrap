import React, { memo } from 'react';
import { Container, Row, Col } from 'reactstrap';

const ProfilePage = memo(props => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12" id="profile">
            <h1>Profile</h1>
            <Container>
              <Row>
                <Col xs="12" lg="12" className="mx-auto">
                  <div className="text-center">
                    <h1 className="font-head-base text-dark mt-5">
                      Mister Chef Doe
                      <small className="h5 d-block">Master Kitchen</small>
                    </h1>
                    <Col xs="10" md="5" className="mx-auto">
                      <img
                        src="/images/profile2.jpg"
                        className="rounded-circle img-thumbnail mt-5"
                        alt="Profile"
                      />
                    </Col>
                    <div className="text-dark mt-5">
                      <p className="lead my-4 mx-0 mx-sm-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis, architecto facilis obcaecati beatae, aperiam qui
                        animi cumque corrupti, voluptatem cum libero quo.
                      </p>
                      <hr className="col-3 col-lg-3 mx-auto" />
                      <div className="my-4 mx-auto px-0 d-flex justify-content-center">
                        <a
                          href="#"
                          className="btn btn-outline-warning btn-md btn-ghost-light shadow-md mr-1"
                        >
                          Contact Me
                        </a>
                        <a
                          href="#"
                          className="btn btn-outline-warning btn-md btn-ghost-light shadow-md px-3 mr-1"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-outline-warning btn-md btn-ghost-light shadow-md px-3 mr-1"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-outline-warning btn-md btn-ghost-light shadow-md px-3 mr-1"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="mx-auto text-center">
                      <a
                        href="#biography"
                        className="text-secondary scrollTo button-down"
                      >
                        Biography
                        <div className="clearfix">
                          <span className="btn text-secondary">
                            <i className="fas fa-chevron-down up-down-pulse"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
                <div id="biography">
                  <Row className="row">
                    <Col lg="3">
                      <ul className="list-navigation">
                        <li className="list-navigation-item">
                          <a className="list-navigation-link" href="#">
                            About
                          </a>
                        </li>
                        <li className="list-navigation-item">
                          <a className="list-navigation-link" href="#">
                            Background
                          </a>
                        </li>
                        <li className="list-navigation-item">
                          <a className="list-navigation-link" href="#">
                            History
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col lg="9">
                      <h4 className="headline text-left">
                        Grew up where all the families loves to cooks
                      </h4>
                      <blockquote>
                        <p className="lead">
                          Through this Internet network, our company wishes to
                          provide a brief explanation of who we are and how we
                          think and perform our work. Our company perceived that
                          trust and support from the public is required for the
                          success of our work and business. We invite you to get
                          to know our company and product closer through this
                          internet network.
                        </p>
                        <footer>
                          Quote from:
                          <cite title="Source Title" className="text-danger">
                            (Mister Chef Doe)
                          </cite>
                        </footer>
                      </blockquote>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus sit maxime eius! Tempore placeat totam
                        consectetur nostrum, doloribus ratione quas molestiae
                        sit maiores.
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Fuga saepe eum, optio cupiditate, minus a nulla
                        quod nemo eius laudantium dolorem quasi culpa.
                        Consequuntur commodi, rerum reprehenderit eos hic
                        possimus similique dolore reiciendis.
                      </p>

                      <p className="lead text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus sit maxime eius! Tempore placeat totam
                        consectetur nostrum, doloribus ratione quas molestiae
                        sit maiores. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Fuga saepe eum, optio cupiditate,
                        minus a nulla quod nemo eius laudantium dolorem quasi
                        culpa. Consequuntur commodi, rerum reprehenderit eos hic
                        possimus similique dolore reiciendis.
                      </p>
                      <br />

                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Esse minus neque asperiores natus, voluptatem
                        numquam consequuntur sapiente? Libero illum expedita,
                        dolore id velit at dolores aut! Maxime impedit neque
                        expedita numquam, odio voluptate repudiandae.
                      </p>
                      <div>
                        Shares: &nbsp;
                        <a href="#" className="h4 mr-1">
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="h4 mr-1">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="h4 mr-1">
                          <i className="fab fa-pinterest"></i>
                        </a>
                        <a href="#" className="h4 mr-1">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
});

export default ProfilePage;
