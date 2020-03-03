import React from "react";
import Link from "next/link";
import { Row, Col } from "reactstrap";

import ErrorLayout from "../layout/ErrorLayout";
import HeadHome from "../components/head";
function Error({ statusCode }) {
  return (
    <>
      <HeadHome title={`Page not Found - ${statusCode}`} />
      <ErrorLayout>
        <Row>
          <Col auto>
            <h2 className="text-danger">
              {statusCode
                ? `An error ${statusCode} occurred on server`
                : "An error occurred on client"}
            </h2>
            <span className="small clearfix d-block text-center my-2">
              <Link href="/" className="text-primary">
                <a>
                  <i className="fas fa-home"></i> Back to Home
                </a>
              </Link>
            </span>
          </Col>
        </Row>
      </ErrorLayout>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
