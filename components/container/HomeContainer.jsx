/** npm packages */
import React from 'react';
// import propTypes from 'prop-types';

/** components */
import HomePage from './HomePage';

function HomeContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <HomePage {...props} />;
}

// HomeContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default HomeContainer;
