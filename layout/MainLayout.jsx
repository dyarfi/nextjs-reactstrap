import React from "react";
import { Container, Row, Col } from "reactstrap";

const MainLayout = props => {
  const { children } = props;
  return <Container fluid>{children}</Container>;
};

export default MainLayout;
