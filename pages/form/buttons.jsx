import React from "react";
import Head from "next/head";
import { Row, Col } from "reactstrap";
import { Button } from "reactstrap";

import MainLayout from "../../layout/MainLayout";
import HeadHome from "../../components/head";
import NavBar from "../../components/navbar/navbar";
import NavLeft from "../../components/navLeft";
import Footer from "../../components/footer";

const Buttons = props => (
  <>
    <HeadHome title="Buttons" />
    <NavBar />
    <MainLayout>
      <Row>
        <Col xs={12} sm={2} className="bg-light">
          <NavLeft />
        </Col>
        <Col xs={12} sm={10}>
          <h1>Buttons</h1>
          <div className="hero-start">
            <h3>Sizes</h3>
            <Button color="primary" size="lg">
              Large Button
            </Button>
            <Button color="secondary" size="lg">
              Large Button
            </Button>
            <br />
            <br />
            <Button color="primary" size="md">
              Medium Button
            </Button>
            <Button color="secondary" size="md">
              Medium Button
            </Button>
            <br />
            <br />
            <Button color="primary" size="sm">
              Small Button
            </Button>
            <Button color="secondary" size="sm">
              Small Button
            </Button>
            <h3>Blocks</h3>
            <Button color="primary" size="lg" block>
              Block level button
            </Button>
            <Button color="secondary" size="lg" block>
              Block level button
            </Button>
            <h3>Outline</h3>
            <div>
              <Button outline color="primary">
                primary
              </Button>{" "}
              <Button outline color="secondary">
                secondary
              </Button>{" "}
              <Button outline color="success">
                success
              </Button>{" "}
              <Button outline color="info">
                info
              </Button>{" "}
              <Button outline color="warning">
                warning
              </Button>{" "}
              <Button outline color="danger">
                danger
              </Button>
            </div>
            <h3>Icons</h3>
            <div>
              <Button outline color="primary">
                <i className="fab fa-facebook"></i> primary
              </Button>{" "}
              <Button outline color="secondary">
                <i className="fab fa-github"></i> secondary
              </Button>{" "}
              <Button outline color="success">
                <i className="fab fa-twitter"></i> success
              </Button>{" "}
              <Button outline color="info">
                <i className="fab fa-linkedin"></i> info
              </Button>{" "}
              <Button outline color="warning">
                <i className="fab fa-yelp"></i> warning
              </Button>{" "}
              <Button outline color="danger">
                <i className="fab fa-yahoo"></i> danger
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </MainLayout>
    <Footer />
  </>
);

export default Buttons;
