import React from "react";
import { Container, Col, CardDeck, Card } from "reactstrap";

import MainLayout from "../layout/MainLayout";
import HeadHome from "../components/head";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer";

const Home = props => (
  <>
    <HeadHome title="Home" />
    <NavBar />
    <MainLayout>
      <h1>Content</h1>
      <div className="hero-start">
        <h1 className="title">Welcome to Next.js!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
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
                    Learn about Next.js by following an interactive tutorial!
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
                  <p>Find other example boilerplates on the Next.js GitHub.</p>
                </a>
              </Col>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </MainLayout>
    <Footer />
  </>
);

export default Home;
