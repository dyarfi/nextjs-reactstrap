webpackHotUpdate("static/development/pages/card/employees.js",{

/***/ "./components/navLeft.jsx":
/*!********************************!*\
  !*** ./components/navLeft.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "/Users/defrianyarfi/Website/nextjs-reactstrap/components/navLeft.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }



var links = [{
  href: "/",
  label: "Logo"
}, {
  href: "/dashboard",
  label: "Dashboard"
}].map(function (link) {
  return _objectSpread({}, link, {
    key: "nav-link-".concat(link.href, "-").concat(link.label)
  });
});

function NavLeft(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h4", {
    className: "headline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Components"), __jsx("div", {
    className: "wrapper-list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"], {
    flush: true,
    className: "list-group-nav-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    tag: "a",
    href: "/dashboard/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Dashboard"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    tag: "a",
    href: "/form/buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Buttons"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    tag: "a",
    href: "/table/tables",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Tables"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    tag: "a",
    href: "/card/posts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Cards"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    tag: "a",
    href: "/page/typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Typography"))), __jsx("h4", {
    className: "headline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "UI Elements"), __jsx("div", {
    className: "wrapper-list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"], {
    flush: true,
    className: "list-group-nav-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    tag: "a",
    href: "/card/employees",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Employees"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    tag: "a",
    href: "/carousel/carousels",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Carousels"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "dropdown-toggle",
    id: "toggleCollapser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Pages"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["UncontrolledCollapse"], {
    toggler: "toggleCollapser",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
    vertical: true,
    className: "mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    href: "/page/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Profile")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    href: "/page/setting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Settings")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    disabled: true,
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Login"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    tag: "a",
    href: "/table/tables",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Tables"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroupItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "dropdown-toggle",
    id: "toggleCollapser1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Pages"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["UncontrolledCollapse"], {
    toggler: "toggleCollapser1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
    vertical: true,
    className: "mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Link")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Link")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Another Link")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavLink"], {
    disabled: true,
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Disabled Link"))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (NavLeft);

/***/ })

})
//# sourceMappingURL=employees.js.0bb7798d62a8097d038f.hot-update.js.map