import React from "react";
import Head from "next/head";

import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import { Button } from "reactstrap";

import MainLayout from "../layout/MainLayout";
import Nav from "../components/nav";
import NavBar from "../components/navbar/navbar";
import NavLeft from "../components/navLeft";
import Footer from "../components/footer";

import { THEME } from "../constants/vars";

const Dashboard = props => (
  <>
    <Head>
      <title>Dashboard | {THEME.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <MainLayout>
      <Row>
        <Col xs={12} sm={2} className="bg-light">
          <NavLeft />
        </Col>
        <Col xs={12} sm={10}>
          <h1>Dashboard</h1>
          <p>
            To get started, edit <code>pages/dashboard.jsx</code> and save to
            reload.
          </p>
          <Row>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem, recusandae?
                </CardText>
                <Button>
                  <i className="fab fa-facebook"></i> Go somewhere
                </Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem, recusandae?
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card body>
                <CardTitle tag="h4">Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </MainLayout>
    <Footer />
    {/* <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style> */}
  </>
);

export default Dashboard;
