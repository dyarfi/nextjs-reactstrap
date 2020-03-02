import React from "react";
import { Container } from "reactstrap";

const ErrorLayout = props => {
  const { children } = props;
  return (
    <Container fluid className="page-error">
      {children}
    </Container>
  );
};

export default ErrorLayout;
