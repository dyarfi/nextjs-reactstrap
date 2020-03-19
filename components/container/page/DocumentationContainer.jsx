/** npm packages */
import React from 'react';
// import propTypes from 'prop-types';

/** components */
import DocumentationPage from './DocumentationPage';

function DocumentationContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <DocumentationPage {...props} />;
}

// DocumentationContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default DocumentationContainer;
