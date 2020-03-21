import React from 'react';
import NextLink from 'next/link';
import propTypes from 'prop-types';
import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardLink,
} from 'reactstrap';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }
  render() {
    const { items } = this.props;
    return (
      <Row>
        {items.map((post, key) => {
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
    );
  }
}

ProfileCard.propTypes = {
  items: propTypes.array.isRequired,
};

export default ProfileCard;
