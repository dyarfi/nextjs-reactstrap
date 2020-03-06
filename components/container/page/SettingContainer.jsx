/** npm packages */
import React from "react";
// import propTypes from 'prop-types';

/** components */
import SettingPage from "./SettingPage";

function SettingContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout
  };

  return <SettingPage {...props} />;
}

// SettingContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default SettingContainer;
