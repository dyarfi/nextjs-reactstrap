import React, { memo } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Row,
  Col,
  Button,
} from 'reactstrap';

const DashboardPage = memo(props => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>
        Welcome, this is your <code>pages/dashboard.jsx</code>, please continue.
      </p>
      <Row>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Visitors
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col
                  xs="4"
                  className="d-inline align-items-center text-success"
                >
                  <i className="fas fa-users fa-3x"></i>{' '}
                  <span>
                    1290 <CardText>Users</CardText>
                  </span>
                </Col>
                <Col xs="4" className="d-inline align-items-center text-info">
                  <i className="fas fa-cog fa-3x"></i>{' '}
                  <span>
                    1930 <CardText>Sessions</CardText>
                  </span>
                </Col>
                <Col
                  xs="4"
                  className="d-inline align-items-center text-primary"
                >
                  <i className="fas fa-clock fa-3x"></i>{' '}
                  <span>
                    234 <CardText>Real Time</CardText>
                  </span>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter> */}
              <Button color="danger" size="md" block>
                <i className="fas fa-chart-bar"></i> statistic
              </Button>
              {/* </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Followers
              </CardTitle>
              {/* <CardText> */}
              <Row className="mb-2">
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-facebook"></i> 1290
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-twitter"></i> 2324
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-instagram"></i> 12341
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-linkedin"></i> 1331
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-pinterest"></i> 4124
                  </CardText>
                </Col>
                <Col xs="4" className="d-inline align-items-center">
                  <CardText
                    tag="a"
                    href="#"
                    className="color-icons icon-rounded-circle"
                  >
                    <i className="fab fa-github"></i> 13411
                  </CardText>
                </Col>
              </Row>
              {/* </CardText> */}
              {/* <CardFooter>
                <Row>
                  <a href="#" className="float-right">Add new</a>
                </Row>
              </CardFooter> */}
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Autem, recusandae?
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card className="h-100 mb-2">
            <CardBody>
              <CardTitle tag="h4" className="headline-mm">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
});

export default DashboardPage;
