import React from 'react';
import NextLink from 'next/link';
import propTypes from 'prop-types';
import { Col, Row, Card } from 'reactstrap';

class MenuCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }
  render() {
    const { items } = this.props;
    return (
      <Row>
        {items.map((menu, m) => {
          return (
            <Col xs="12" md="12" lg="4" key={`p-${m}`}>
              <Card className="card-profile">
                <NextLink
                  as={`/card/posts?id=${menu.id}`}
                  href={{
                    pathname: `/card/posts`,
                    query: { id: menu.id },
                  }}
                >
                  <img src={menu.image} alt={menu.title} />
                </NextLink>
                <div className="card-profile-body">
                  <div>
                    <p>
                      @{menu.postBy}
                      <br />
                      <span>{menu.publishedAt}</span>
                    </p>
                    <img src={menu.image} alt={`@${menu.postBy}`} />
                  </div>
                  <p>{menu.title}</p>
                  <div className="card-profile-interactions">
                    <p>
                      <i className="fab fa-facebook"></i> {menu.views}
                    </p>
                    <p>
                      <i className="fab fa-twitter"></i> {menu.views}
                    </p>
                    <p>
                      <i className="fab fa-linkedin"></i> {menu.views}
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

MenuCard.propTypes = {
  items: propTypes.array.isRequired,
};

export default MenuCard;
