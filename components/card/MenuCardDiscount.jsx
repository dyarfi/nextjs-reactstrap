import React from 'react';
import NextLink from 'next/link';
import propTypes from 'prop-types';
import {
  Col,
  Row,
  Badge,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

class MenuCardDiscount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }
  render() {
    const { items } = this.props;
    return (
      <Row>
        {items.map((menu, key) => {
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
                        <span className="card-menu-disc">{disc * 10}% Off</span>
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
    );
  }
}

MenuCardDiscount.propTypes = {
  items: propTypes.array.isRequired,
};

export default MenuCardDiscount;
