import React from "react";
import { Container } from "reactstrap";

function SingleLayout(props) {
  const { children } = props;
  return (
    <Container fluid className="page-single bg-gradient-primary">
      {children}
    </Container>
  );
}

export default SingleLayout;
