import React from "react";
import Head from "next/head";
import { Row, Col } from "reactstrap";
import { Button, Card, CardTitle, CardText } from "reactstrap";

import MainLayout from "../../layout/MainLayout";
import HeadHome from "../../components/head";
import NavBar from "../../components/navbar/navbar";
import NavLeft from "../../components/navLeft";
import Footer from "../../components/footer";

import { THEME } from "../../constants/vars";
import { CARDS } from "../../constants/cards";

const Posts = props => (
  <>
    <HeadHome title="Posts" />
    <NavBar />
    <MainLayout>
      <Row>
        <Col xs={12} sm={2} className="bg-light">
          <NavLeft />
        </Col>
        <Col xs={12} sm={10}>
          <h1>Cards</h1>
          <div className="hero">
            <h3>Posts</h3>
            <Row>
              {CARDS.posts.map((post, key) => {
                return (
                  <Col md="6" lg="4" key={key}>
                    <Card body>
                      <CardTitle tag="h4">{post.title}</CardTitle>
                      <CardText>{post.text}</CardText>
                      <Button color="primary">{post.category}</Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <h3>Menus</h3>
            <Row>
              {CARDS.menus.map((menu, key) => {
                return (
                  <Col md="6" lg="4" key={key}>
                    <Card body>
                      <CardTitle tag="h4">{menu.title}</CardTitle>
                      <CardText>{menu.description}</CardText>
                      <Button color="success">{menu.category}</Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </MainLayout>
    <Footer />
  </>
);

export default Posts;
