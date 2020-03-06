webpackHotUpdate("static/development/pages/carousel/carousels.js",{

/***/ "./components/container/carousel/CarouselsContainer.jsx":
/*!**************************************************************!*\
  !*** ./components/container/carousel/CarouselsContainer.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CarouselsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselsPage */ "./components/container/carousel/CarouselsPage.jsx");

var _jsxFileName = "/Users/defrianyarfi/Website/nextjs-reactstrap/components/container/carousel/CarouselsContainer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** npm packages */
 // import propTypes from 'prop-types';

/** components */



function CarouselsContainer(_ref) {
  var dispatch = _ref.dispatch,
      storeLayout = _ref.storeLayout;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      animating = _useState2[0],
      setAnimating = _useState2[1];

  var next = function next() {
    if (animating) return;
    var nextIndex = activeIndex === SLIDES.carousels.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  var previous = function previous() {
    if (animating) return;
    var nextIndex = activeIndex === 0 ? SLIDES.carousels.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  var goToIndex = function goToIndex(newIndex) {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  var props = {
    dispatch: dispatch,
    storeLayout: storeLayout,

    /* slides */
    activeIndex: activeIndex,
    // animating,
    setAnimating: setAnimating,
    next: next,
    previous: previous,
    goToIndex: goToIndex
  };
  return __jsx(_CarouselsPage__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
} // CarouselsContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };


/* harmony default export */ __webpack_exports__["default"] = (CarouselsContainer);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false

})
//# sourceMappingURL=carousels.js.f52f981ba54cdf08d0cf.hot-update.js.map