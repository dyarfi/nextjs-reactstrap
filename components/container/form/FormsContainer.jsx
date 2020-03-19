/** npm packages */
import React from 'react';
// import propTypes from 'prop-types';

/** components */
import FormsPage from './FormsPage';

function FormsContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <FormsPage {...props} />;
}

// FormsContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default FormsContainer;
