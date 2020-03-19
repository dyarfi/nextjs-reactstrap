/** npm packages */
import React, { useState, useEffect } from 'react';
// import propTypes from 'prop-types';

/** components */
import SettingPage from './SettingPage';

function SettingContainer({ dispatch, storeLayout }) {
  const [isOpen, setIsOpen] = useState('1');
  const toggle = e => setIsOpen(e);

  const props = {
    dispatch,
    storeLayout,
    /* states */
    isOpen,
    toggle,
  };

  return <SettingPage {...props} />;
}

// SettingContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default SettingContainer;
