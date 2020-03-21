import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'reactstrap';

import ErrorLayout from '../layout/ErrorLayout';
import HeadDefault from '../layout/head/HeadDefault';
function Error({ statusCode }) {
  return (
    <>
      <HeadDefault
        title={`Page not Found - ${statusCode} | Next.JS with Reactstrap (React dashboard web application)`}
        description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
      />
      <ErrorLayout>
        <Row>
          <Col>
            <h2 className="text-warning">
              {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
            </h2>
            <span className="small clearfix d-block text-center my-2">
              <Link href="/">
                <a className="text-light font-weight-bold">
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
