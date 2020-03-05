/** npm packages */
import React from "react";
// import propTypes from 'prop-types';

/** components */
import EmployeePage from "./EmployeePage";

function EmployeeContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout
  };

  return <EmployeePage {...props} />;
}

// EmployeeContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default EmployeeContainer;
