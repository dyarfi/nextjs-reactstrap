import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Row, Col } from "reactstrap";

import ErrorLayout from "../layout/ErrorLayout";
import { THEME } from "../constants/vars";

function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>404 Page | {THEME.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                <a>Back to Home</a>
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
