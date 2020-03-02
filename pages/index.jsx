import React from "react";
import Head from "next/head";
import { Container, Row, Col, CardDeck, Card } from "reactstrap";

import MainLayout from "../layout/MainLayout";
import NavBar from "../components/navbar/navbar";
import Nav from "../components/nav";
import NavLeft from "../components/navLeft";
import Footer from "../components/footer";

import { THEME } from "../constants/vars";

const Home = props => (
  <>
    <Head>
      <title>Home | {THEME.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <MainLayout>
      <Row>
        <Col xs={12} sm={2} className="bg-light">
          <NavLeft />
        </Col>
        <Col xs={12} sm={10} style={{ height: "100vh" }}>
          <h1>Content</h1>
          <div className="hero-start">
            <h1 className="title">Welcome to Next.js!</h1>
            <p className="description">
              To get started, edit <code>pages/index.js</code> and save to
              reload.
            </p>
            <Container>
              <CardDeck>
                <Card color="dark">
                  <Col lg="12">
                    <a href="https://nextjs.org/docs" className="text-light">
                      <h3>Documentation &rarr;</h3>
                      <p>Learn more about Next.js in the documentation.</p>
                    </a>
                  </Col>
                </Card>
                <Card color="dark">
                  <Col lg="12">
                    <a href="https://nextjs.org/learn" className="text-light">
                      <h3>Next.js Learn &rarr;</h3>
                      <p>
                        Learn about Next.js by following an interactive
                        tutorial!
                      </p>
                    </a>
                  </Col>
                </Card>
                <Card color="dark">
                  <Col lg="12">
                    <a
                      href="https://github.com/zeit/next.js/tree/master/examples"
                      className="text-light"
                    >
                      <h3>Examples &rarr;</h3>
                      <p>
                        Find other example boilerplates on the Next.js GitHub.
                      </p>
                    </a>
                  </Col>
                </Card>
              </CardDeck>
            </Container>
          </div>
        </Col>
      </Row>
    </MainLayout>
    <Footer />
  </>
);

export default Home;
