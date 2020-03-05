import React, { memo } from "react";
import { Col } from "reactstrap";

import { CARDS } from "../../../constants/cards";

const EmployeePage = memo(props => {
  return (
    <>
      <h1>Cards</h1>
      <h4>V-Card Default</h4>
      <div className="card-employee">
        <div className="card-employee-row">
          {CARDS.employees.map((employee, key) => {
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
                        src={employee.photo}
                        className="img-thumbnail rounded-circle img-fluid"
                      />
                      <h5 className="mt-3">
                        <a className="text-muted" href="employee-single.html">
                          {employee.name}
                        </a>
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
      <div className="d-block clearfix"></div>
      <h4>V-Card Square</h4>
      <div className="card-employee">
        <div className="card-employee-row">
          {CARDS.employees.map((employee, key) => {
            return (
              <Col xs="12" md="6" lg="4" className="card-employee-col">
                <div className="card-employee-content">
                  <Col
                    xs="12"
                    className="card-employee-image align-self-center"
                  >
                    <div className="text-center">
                      <img
                        src={employee.photo}
                        className="img-thumbnail ilist-c rounded-circle img-fluid w-50"
                      />
                      <h5 className="mt-2 text-muted">
                        <a href="employee-single.html">{employee.name}</a>
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
    </>
  );
});

export default EmployeePage;
