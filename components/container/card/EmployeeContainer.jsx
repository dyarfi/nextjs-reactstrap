/** npm packages */
import React from 'react';
import propTypes from 'prop-types';

/** components */
import EmployeePage from './EmployeePage';

function EmployeeContainer({ dispatch, storeLayout, id }) {
  const props = {
    dispatch,
    storeLayout,
    id,
  };

  return <EmployeePage {...props} />;
}

EmployeeContainer.propTypes = {
  id: propTypes.number,
};

export default EmployeeContainer;
