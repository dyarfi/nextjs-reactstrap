/** npm packages */
import React from 'react';
// import propTypes from 'prop-types';

/** components */
import DashboardPage from './DashboardPage';

function DashboardContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <DashboardPage {...props} />;
}

// DashboardContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default DashboardContainer;
