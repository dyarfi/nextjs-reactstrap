import React from 'react';
import NextLink from 'next/link';
import propTypes from 'prop-types';
import { Container, Col } from 'reactstrap';

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }
  render() {
    const { items } = this.props;
    return (
      <Container fluid>
        <div className="boxed-bottom">
          {items.map((post, key) => {
            const oddEven = `boxed-bottom-${key % 2 === 1 ? 'left' : 'right'}`;
            return (
              <Col key={`b-${key}`} className={oddEven} xs="12" md="12" lg="4">
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
                  <NextLink
                    as={`/card/posts?id=${post.id}`}
                    href={{
                      pathname: `/card/posts`,
                      query: { id: post.id },
                    }}
                  >
                    <a className="btn btn-sm btn-default btn-hidden text-muted">
                      <span>read more</span>&nbsp;
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </NextLink>
                </div>
              </Col>
            );
          })}
        </div>
      </Container>
    );
  }
}

PostCard.propTypes = {
  items: propTypes.array.isRequired,
};

export default PostCard;
