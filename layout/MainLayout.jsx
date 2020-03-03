import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavLeft from "../components/navLeft";

const MainLayout = props => {
  const { children } = props;
  return (
    <Container fluid className="wrapper">
      <Row>
        <Col xs={12} md={2} className="bg-light">
          <NavLeft />
        </Col>
        {children}
      </Row>
    </Container>
  );
};

export default MainLayout;
