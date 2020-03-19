import React from 'react';
import NextLink from 'next/link';
import propTypes from 'prop-types';
import { Col } from 'reactstrap';

class EmployeeVCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  render() {
    const { items } = this.props;
    return (
      <div className="card-employee">
        <div className="card-employee-row">
          {items.map((employee, key) => {
            return (
              <Col
                key={key}
                xs="12"
                md="6"
                lg="4"
                className="card-employee-col"
              >
                <div className="card-employee-content vcard ilist">
                  <Col xs="12" md="12" xl="6" className="align-self-center">
                    <div className="text-center p-2">
                      <img
                        alt={employee.name}
                        src={employee.photo}
                        className="img-thumbnail rounded-circle img-fluid"
                      />
                      <h5 className="mt-3">
                        <NextLink
                          as={`/card/employees?id=${employee.id}`}
                          href={{
                            pathname: `/card/employees`,
                            query: { id: employee.id },
                          }}
                        >
                          <a>{employee.name}</a>
                        </NextLink>
                      </h5>
                    </div>
                  </Col>
                  <Col
                    xs="12"
                    md="12"
                    xl="6"
                    className="align-self-center text-center text-xl-left"
                  >
                    <h5>{employee.title}</h5>
                    <p className="border-bottom border-top text-secondary py-2">
                      {employee.about}
                    </p>
                    <div>
                      <a href="#" className="text-info h5 mr-1">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="text-dark h5 mr-1">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="#" className="text-primary h5 mr-1">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                  </Col>
                </div>
              </Col>
            );
          })}
        </div>
      </div>
    );
  }
}

EmployeeVCard.propTypes = {
  items: propTypes.array.isRequired,
};

export default EmployeeVCard;
