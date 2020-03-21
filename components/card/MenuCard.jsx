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
    console.log(items);

    return (
      <Row>
        {items.map((profile, m) => {
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
    );
  }
}

MenuCard.propTypes = {
  items: propTypes.array.isRequired,
};

export default MenuCard;
