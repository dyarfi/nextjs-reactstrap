import React, { memo } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardLink
} from "reactstrap";

import { CARDS } from "../../../constants/cards";

const PostsPage = memo(props => {
  return (
    <>
      <h1>Cards</h1>
      <div className="hero">
        <h3>Posts</h3>
        <Row>
          {CARDS.posts.map((post, key) => {
            return (
              <Col md="6" lg="4" key={key}>
                <Card>
                  <CardImg top width="100%" src={post.image} alt={post.title} />
                  <CardBody>
                    <CardTitle tag="h4">{post.title}</CardTitle>
                    <CardText>{post.text}</CardText>
                    <CardLink href="#" className="text-success">
                      <i className="fas fa-folder"></i> {post.category}
                    </CardLink>
                    <CardLink href="#" className="text-success">
                      <i className="fas fa-user"></i> {post.postBy}
                    </CardLink>
                    <CardLink href="#" className="text-success">
                      <i className="fas fa-eye"></i> {post.views}
                    </CardLink>
                  </CardBody>
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
                <Card>
                  <CardImg top width="100%" src={menu.image} alt={menu.title} />
                  <CardBody>
                    <CardTitle tag="h4">{menu.title}</CardTitle>
                    <CardText>{menu.description}</CardText>
                    <Button color="success">{menu.category}</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
});

export default PostsPage;
