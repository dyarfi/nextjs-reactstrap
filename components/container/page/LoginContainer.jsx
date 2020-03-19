/** npm packages */
import React, { useState, useEffect } from 'react';
// import propTypes from 'prop-types';

/** components */
import LoginPage from './LoginPage';

function LoginContainer({ dispatch, storeLayout }) {
  const [isOpen, setIsOpen] = useState('1');
  const toggle = e => setIsOpen(e);

  const props = {
    dispatch,
    storeLayout,
    /* states */
    isOpen,
    toggle,
  };

  return <LoginPage {...props} />;
}

// LoginContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default LoginContainer;
