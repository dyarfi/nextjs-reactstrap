webpackHotUpdate("static/development/pages/page/setting.js",{

/***/ "./components/container/page/SettingContainer.jsx":
/*!********************************************************!*\
  !*** ./components/container/page/SettingContainer.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SettingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingPage */ "./components/container/page/SettingPage.jsx");

var _jsxFileName = "/Users/defrianyarfi/Website/nextjs-reactstrap/components/container/page/SettingContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** npm packages */
 // import propTypes from 'prop-types';

/** components */



function SettingContainer(_ref) {
  var dispatch = _ref.dispatch,
      storeLayout = _ref.storeLayout;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle(e) {
    return setIsOpen(e);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsOpen(1);
  }, [isOpen]); // console.log(isOpen);

  var props = {
    dispatch: dispatch,
    storeLayout: storeLayout,

    /* states */
    isOpen: isOpen,
    toggle: toggle
  };
  return __jsx(_SettingPage__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
} // SettingContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (SettingContainer);

/***/ })

})
//# sourceMappingURL=setting.js.17f4e4b44945124da5a3.hot-update.js.map