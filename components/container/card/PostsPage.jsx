import React, { memo } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardLink,
} from 'reactstrap';

import { CARDS } from '../../../constants/cards';

const PostsPage = memo(props => {
  return (
    <>
      <h1>Cards</h1>
      <div className="hero">
        <h3>Boxed</h3>
        <Container fluid>
          <div className="boxed-bottom">
            {CARDS.posts.map((post, key) => {
              const oddEven = `boxed-bottom-${
                key % 2 === 1 ? 'left' : 'right'
              }`;
              return (
                <Col
                  key={`b-${key}`}
                  className={oddEven}
                  xs="12"
                  md="12"
                  lg="4"
                >
                  <div className="boxed-bottom-content">
                    <h4 className="font-weight-bolder headline text-muted">
                      {post.title}
                    </h4>
                    <div className="text-muted">
                      {post.postBy}, {post.publishedAt}&nbsp;
                    </div>
                    <h6>
                      <i className="fas fa-folder"></i> {post.category} &nbsp;
                      <small className="float-right text-muted">
                        <i className="fas fa-eye"></i> {post.views}
                      </small>
                    </h6>
                    <img
                      src={post.image}
                      className="img-fluid box-shadow-img mb-3"
                      alt={post.title}
                    />
                    <p className="text-justify">{post.text}</p>

                    <a
                      className="btn btn-sm btn-default btn-hidden text-muted"
                      href="#"
                    >
                      <span>read more</span>&nbsp;
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </Col>
              );
            })}
          </div>
        </Container>
        <h3>Profile</h3>
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
            const disc = 2;
            return (
              <Col md="6" lg="4" key={`m-${key}`}>
                <Card className="card-menu">
                  <CardImg top width="100%" src={menu.image} alt={menu.title} />
                  <CardBody className="card-menu-body">
                    <CardTitle tag="h4">{menu.title}</CardTitle>
                    <CardText tag="div">
                      <Row className="mb-2 font-weight-bold">
                        <Col sm="6" tag="div" className="text-left">
                          <span>${Math.floor(menu.price - (disc % 100))}</span>
                          <span className="card-menu-price">${menu.price}</span>
                          <span className="card-menu-disc">
                            {disc * 10}% Off
                          </span>
                        </Col>
                        <Col sm="6" className="text-right">
                          <Badge color={menu.tag}>{menu.tag}</Badge>
                        </Col>
                      </Row>
                      {menu.description}
                    </CardText>
                    <Row xs="12">
                      <Col className="align-self-center text-left">
                        <span className="font-weight-bold">@{menu.label}</span>
                      </Col>
                      <Col className="align-self-center text-right">
                        <a
                          href="#"
                          className="btn btn-sm color-icons icon-rounded-circle p-1"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-sm color-icons icon-rounded-circle p-1"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href="#"
                          className="btn btn-sm color-icons icon-rounded-circle p-1"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
        <h3>Profile</h3>
        <Row>
          {CARDS.posts.map((profile, m) => {
            return (
              <Col xs="12" md="12" lg="4" key={`p-${m}`}>
                <Card className="card-profile">
                  <img src={profile.image} alt={profile.title} />
                  <div className="card-profile-body">
                    <div>
                      <p>
                        @{profile.postBy}
                        <br />
                        <span>{profile.publishedAt}</span>
                      </p>
                      <img src={profile.image} alt={`@${profile.postBy}`} />
                    </div>
                    <p>{profile.title}</p>
                    <div className="card-profile-interactions">
                      <p>
                        <i className="fab fa-facebook"></i> {profile.views}
                      </p>
                      <p>
                        <i className="fab fa-twitter"></i> {profile.views}
                      </p>
                      <p>
                        <i className="fab fa-linkedin"></i> {profile.views}
                      </p>
                    </div>
                  </div>
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
