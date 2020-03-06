webpackHotUpdate("static/development/pages/carousel/carousels.js",{

/***/ "./components/container/carousel/CarouselsPage.jsx":
/*!*********************************************************!*\
  !*** ./components/container/carousel/CarouselsPage.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _constants_slides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/slides */ "./constants/slides.js");
var _jsxFileName = "/Users/defrianyarfi/Website/nextjs-reactstrap/components/container/carousel/CarouselsPage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CarouselsPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (props) {
  var dispatch = props.dispatch,
      storeLayout = props.storeLayout,
      activeIndex = props.activeIndex,
      setAnimating = props.setAnimating,
      next = props.next,
      previous = props.previous,
      goToIndex = props.goToIndex;
  var slides = _constants_slides__WEBPACK_IMPORTED_MODULE_2__["SLIDES"].carousels.map(function (item) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"], {
      onExiting: function onExiting() {
        return setAnimating(true);
      },
      onExited: function onExited() {
        return setAnimating(false);
      },
      key: item.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      src: item.src,
      alt: item.altText,
      className: "img-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselCaption"], {
      captionText: item.caption,
      captionHeader: item.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Carousel"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    lg: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselIndicators"], {
    items: _constants_slides__WEBPACK_IMPORTED_MODULE_2__["SLIDES"].carousels,
    activeIndex: activeIndex,
    onClickHandler: goToIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (CarouselsPage);

/***/ })

})
//# sourceMappingURL=carousels.js.c5cd0e03b93a0b7f1c81.hot-update.js.map