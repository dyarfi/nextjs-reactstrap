/** npm packages */
import React from 'react';
// import propTypes from 'prop-types';

/** components */
import TablePage from './TablePage';

function TableContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <TablePage {...props} />;
}

// TableContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default TableContainer;
