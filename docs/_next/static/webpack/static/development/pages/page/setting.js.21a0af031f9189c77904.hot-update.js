webpackHotUpdate("static/development/pages/page/setting.js",{

/***/ "./components/container/page/SettingPage.jsx":
/*!***************************************************!*\
  !*** ./components/container/page/SettingPage.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/defrianyarfi/Website/nextjs-reactstrap/components/container/page/SettingPage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SettingPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (props) {
  var isOpen = props.isOpen,
      toggle = props.toggle;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Settings"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tabs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: isOpen === "1" ? "active" : "",
    onClick: function onClick() {
      toggle("1");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Profile")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: isOpen === "2" ? "active" : "",
    onClick: function onClick() {
      toggle("2");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Contact")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: isOpen === "3" ? "active" : "",
    onClick: function onClick() {
      toggle("2");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Post"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    activeTab: isOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "p-3 align-items-center text-white-50 bg-gradient-primary box-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Profile"), __jsx("div", {
    className: "bg-white p-3 text-secondary mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("form", {
    className: "form-horizontal",
    action: "",
    method: "GET",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("span", {
    className: "text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Public Profile"), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("input", {
    type: "radio",
    name: "visible_profile",
    id: "visible_profile_yes",
    className: "form-check-input",
    value: "1",
    checked: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "visible_profile_yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Yes")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("input", {
    type: "radio",
    name: "visible_profile",
    id: "visible_profile_no",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "visible_profile_no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "No"))), __jsx("div", {
    className: "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("span", {
    className: "text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Show Email"), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("input", {
    type: "radio",
    name: "hideEmail",
    id: "hideEmailYes",
    className: "form-check-input",
    value: "1",
    checked: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "hideEmailYes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Yes")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("input", {
    type: "radio",
    name: "hideEmail",
    id: "hideEmailNo",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "hideEmailNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "No"))), __jsx("div", {
    className: "col-sm-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx("div", {
    className: "form-row mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 text-right mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    name: "submit",
    className: "btn btn-md btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), " Save"))))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Special Title Treatment"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "With supporting text below as a natural lead-in to additional content."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Go somewhere"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Special Title Treatment"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "With supporting text below as a natural lead-in to additional content."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Go somewhere"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "Special Title Treatment"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "With supporting text below as a natural lead-in to additional content."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Go somewhere"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Special Title Treatment"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "With supporting text below as a natural lead-in to additional content."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Go somewhere")))))), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Profile"), __jsx("div", {
    className: "d-flex p-3 align-items-center text-white-50 bg-gradient-primary box-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("blockquote", {
    className: "blockquote text-left p-0 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    title: "Update Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("img", {
    className: "mr-3 img-thumbnail",
    src: "/images/profile2.jpg",
    alt: "Profile Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  })), __jsx("p", {
    className: "m-0 font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "John Doe"), __jsx("div", {
    className: "blockquote-footer text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, "Web Administrator")), __jsx("div", {
    className: "pt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("a", {
    className: "btn btn-info btn-sm",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), " LinkedIn"), __jsx("a", {
    className: "btn btn-secondary btn-sm",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), " GitHub"))), __jsx("div", {
    className: "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx("label", {
    htmlhtmlFor: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "Name"), __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Fullname",
    className: "form-control",
    value: "John Doe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), __jsx("label", {
    htmlhtmlFor: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "Username"), __jsx("input", {
    type: "text",
    id: "username",
    name: "username",
    placeholder: "@username",
    className: "form-control",
    value: "johndoe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("label", {
    htmlhtmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Email"), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "email@email.com",
    className: "form-control",
    value: "johndoe@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), __jsx("label", {
    htmlhtmlFor: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "Phone"), __jsx("input", {
    type: "text",
    id: "phone",
    name: "phone",
    placeholder: "Phone",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("label", {
    htmlhtmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "About"), __jsx("textarea", {
    name: "about",
    className: "form-control",
    placeholder: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "Web Administrator")), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx("button", {
    name: "submit",
    className: "btn btn-primary btn-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }), " Update Profile")))))));
});
/* harmony default export */ __webpack_exports__["default"] = (SettingPage);

/***/ })

})
//# sourceMappingURL=setting.js.21a0af031f9189c77904.hot-update.js.map