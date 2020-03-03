import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavLeft from "../components/navLeft";

const MainLayout = props => {
  const { children } = props;
  return (
    <Container fluid className="wrapper">
      <Row>
        {/* <Col xs={12} md={2} className="wrapper-left"> */}
        <Col className="wrapper-left">
          <NavLeft />
        </Col>
        {/* <Col xs={12} md={10} className="wrapper-content"> */}
        <Col className="wrapper-content">      
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
