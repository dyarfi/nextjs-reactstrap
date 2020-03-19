import React from 'react';
import NextLink from 'next/link';
import propTypes from 'prop-types';
import { Col } from 'reactstrap';

class EmployeeCard extends React.Component {
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
                <div className="card-employee-content">
                  <Col
                    xs="12"
                    className="card-employee-image align-self-center"
                  >
                    <div className="text-center">
                      <img
                        alt={employee.name}
                        src={employee.photo}
                        className="img-thumbnail ilist-c rounded-circle img-fluid w-50"
                      />
                      <h5 className="mt-2 text-muted">
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
                  <Col xs="12" className="align-self-center text-center">
                    <h6>{employee.title}</h6>
                    <p className="border-bottom border-top text-secondary p-3">
                      {employee.about}
                    </p>
                    <div>
                      <a
                        href="#"
                        className="btn btn-sm btn-info rounded-circle mr-1"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-dark rounded-circle mr-1"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-primary rounded-circle mr-1"
                      >
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

EmployeeCard.propTypes = {
  items: propTypes.array.isRequired,
};

export default EmployeeCard;
