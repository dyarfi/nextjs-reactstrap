/** npm packages */
import React, { useState } from 'react';
// import propTypes from 'prop-types';

/** components */
import ButtonsPage from './ButtonsPage';

function ButtonsContainer({ dispatch, storeLayout }) {
  const [stateDropUp, setStateDropUp] = useState(false);
  const [stateDropLeft, setStateDropLeft] = useState(false);
  const [stateDropRight, setStateDropRight] = useState(false);
  const [stateDropRightAlign, setStateDropRightAlign] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  const props = {
    dispatch,
    storeLayout,
    /* dropdowns */
    isOpen,
    stateDropUp,
    setStateDropUp,
    stateDropLeft,
    setStateDropLeft,
    stateDropRight,
    setStateDropRight,
    stateDropRightAlign,
    setStateDropRightAlign,
    toggle,
  };

  return <ButtonsPage {...props} />;
}

// ButtonsContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default ButtonsContainer;
