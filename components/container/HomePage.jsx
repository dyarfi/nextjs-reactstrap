import React, { memo } from 'react';
import Link from 'next/link';
import { Row, Container, Button, Col, CardDeck, Card } from 'reactstrap';
import Loader from '../../layout/Loader';

const HomePage = memo(props => {
  return (
    <>
      <div className="hero-start">
        <h1 className="title">Welcome to Next.js with Reactstrap!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
        <Container>
          <div className="lead my-5">
            <Row className="text-center mx-auto my-5">
              <Col className="my-3">
                <i className="fab fa-bootstrap fa-8x text-primary"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-sass fa-8x text-danger"></i>
              </Col>
              <Col className="my-3">
                <i className="fab fa-react fa-8x text-info"></i>
              </Col>
            </Row>
            <h4>Feature</h4>
            <ul>
              <li>
                Bootstrap SCSS with customise variables for themes in any
                project.
              </li>
              <li>
                Page, components, typography, forms, button, background, icons
                and cards samples with others additonal libraries.
              </li>
            </ul>
          </div>
          <CardDeck>
            <Card color="dark">
              <Col lg="12">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h3>
                      Documentation{' '}
                      <i className="fas fa-chevron-right align-self-center"></i>
                    </h3>
                    <p>Learn more about Next.js in the documentation.</p>
                  </a>
                </Link>
              </Col>
            </Card>
            <Card color="dark">
              <Col lg="12">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h3>
                      Next.js Learn <i className="fas fa-chevron-right"></i>
                    </h3>
                    <p>
                      Learn about Next.js by following an interactive tutorial!
                    </p>
                  </a>
                </Link>
              </Col>
            </Card>
            <Card color="dark">
              <Col lg="12">
                <Link href="/page/documentation">
                  <a href="/page/documentation" className="text-light">
                    <h3>
                      Examples <i className="fas fa-chevron-right"></i>
                    </h3>
                    <p>
                      Find other example boilerplates on the Next.js GitHub.
                    </p>
                  </a>
                </Link>
              </Col>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </>
  );
});

export default HomePage;
