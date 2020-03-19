/** npm packages */
import React from 'react';
// import propTypes from 'prop-types';

/** components */
import TypographyPage from './TypographyPage';

function TypographyContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <TypographyPage {...props} />;
}

// SettingContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default TypographyContainer;
