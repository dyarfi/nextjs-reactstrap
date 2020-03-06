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
      toggle("3");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Post")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: isOpen === "4" ? "active" : "",
    onClick: function onClick() {
      toggle("4");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Widget"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    activeTab: isOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "p-3 align-items-center text-white-50 bg-gradient-primary box-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Profile"), __jsx("div", {
    className: "bg-white p-3 text-secondary mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "form-horizontal",
    action: "",
    method: "GET",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("span", {
    className: "text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Public Profile"), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "visible_profile",
    id: "visible_profile_yes",
    className: "form-check-input",
    value: "1",
    checked: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "visible_profile_yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Yes")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "visible_profile",
    id: "visible_profile_no",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "visible_profile_no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "No"))), __jsx("div", {
    className: "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("span", {
    className: "text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Show Email"), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "hideEmail",
    id: "hideEmailYes",
    className: "form-check-input",
    value: "1",
    checked: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "hideEmailYes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Yes")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "hideEmail",
    id: "hideEmailNo",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "hideEmailNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "No"))), __jsx("div", {
    className: "col-sm-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx("div", {
    className: "form-row mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 text-right mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    name: "submit",
    className: "btn btn-md btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), " Save"))))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("div", {
    className: "p-3 align-items-center text-white-50 bg-gradient-primary box-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Contact"), __jsx("div", {
    className: "bg-white p-3 text-secondary mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "form-horizontal",
    action: "",
    method: "GET",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("span", {
    className: "text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Disable Contact Form"), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "disableForm",
    id: "disableFormYes",
    className: "form-check-input",
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "disableFormYes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Yes")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "disableForm",
    id: "disableFormNo",
    className: "form-check-input",
    value: "0",
    checked: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "disableFormNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "No"))), __jsx("div", {
    className: "col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "contactPhone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Phone"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "contactPhone",
    className: "form-control",
    id: "contactPhone",
    placeholder: "Business phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }))), __jsx("div", {
    className: "col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "contactEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    name: "contactEmail",
    className: "form-control",
    id: "contactEmail",
    placeholder: "Business email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }))), __jsx("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "contactAddress",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "textarea",
    name: "contactAddress",
    id: "contactAddress",
    className: "form-control",
    placeholder: "My business address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  })))), __jsx("div", {
    className: "form-row mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 text-right mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    name: "submit",
    className: "btn btn-md btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }), " Save"))))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx("div", {
    className: "p-3 align-items-center text-white-50 bg-gradient-primary box-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "Post"), __jsx("div", {
    className: "bg-white p-3 text-secondary mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "form-horizontal",
    action: "",
    method: "GET",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, __jsx("span", {
    className: "text-black font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "Maintenance Mode"), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "maintenanceMode",
    id: "maintenanceModeYes",
    className: "form-check-input",
    value: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "maintenanceModeYes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "Yes")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "maintenanceMode",
    id: "maintenanceModeNo",
    className: "form-check-input",
    value: "0",
    checked: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "maintenanceModeNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "No"))), __jsx("div", {
    className: "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx("span", {
    className: "text-black font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, "Disable Comments"), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "comments",
    id: "disableCommentYes",
    className: "form-check-input",
    value: "1",
    checked: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "disableCommentYes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, "Yes")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "comments",
    id: "disableCommentNo",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "disableCommentNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "No"))), __jsx("div", {
    className: "col-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, "Comments"), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "commentModerate",
    id: "commentModerationOne",
    className: "form-check-input",
    value: "1",
    checked: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "commentModerationOne",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, "Always Moderate")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "commentModerate",
    id: "commentModerationTwo",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "commentModerationTwo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "Wait Moderation")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "commentModerate",
    id: "commentModerationThree",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "commentModerationThree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, "Delete Instantly"))), __jsx("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, "Post Format"), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "postFormat",
    id: "postFormatOne",
    className: "form-check-input",
    value: "1",
    checked: "checked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "postFormatOne",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, "/your-blog-post-title/")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "postFormat",
    id: "postFormatTwo",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "postFormatTwo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, "/dd-mm-yyyy/your-blog-post-title/")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "postFormat",
    id: "postFormatThree",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "postFormatThree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, "/category/your-blog-post-title/")), __jsx("div", {
    className: "form-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "radio",
    name: "postFormat",
    id: "postFormatFour",
    className: "form-check-input",
    value: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "form-check-label",
    "for": "postFormatFour",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, "/dd-mm-yyyy/category/your-blog-post-title/")))), __jsx("div", {
    className: "form-row mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "maintenanceModeText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, "Maintenance Message"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "textarea",
    id: "maintenanceModeText",
    name: "maintenanceModeText",
    className: "form-control",
    placeholder: "Your status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, "We are in maintenance mode, sorry for the convinience!")), __jsx("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    "for": "statusText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, "Status"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "textarea",
    id: "statusText",
    name: "statusText",
    className: "form-control",
    placeholder: "Your status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, "Hi, John Doe was here!"))), __jsx("div", {
    className: "form-row mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 text-right mt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    name: "submit",
    className: "btn btn-md btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }), " Save"))))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "pt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, "Special Title Treatment"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, "With supporting text below as a natural lead-in to additional content."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, "Go somewhere"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }, "Special Title Treatment"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, "With supporting text below as a natural lead-in to additional content."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }, "Go somewhere")))))), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, "Profile"), __jsx("div", {
    className: "d-flex p-3 align-items-center text-white-50 bg-gradient-primary box-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  }, __jsx("blockquote", {
    className: "blockquote text-left p-0 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    title: "Update Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, __jsx("img", {
    className: "mr-3 img-thumbnail",
    src: "/images/profile2.jpg",
    alt: "Profile Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  })), __jsx("p", {
    className: "m-0 font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  }, "John Doe"), __jsx("div", {
    className: "blockquote-footer text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529
    },
    __self: this
  }, "Web Administrator")), __jsx("div", {
    className: "pt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, __jsx("a", {
    className: "btn btn-info btn-sm",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }), " LinkedIn"), __jsx("a", {
    className: "btn btn-secondary btn-sm",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }, __jsx("i", {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }), " GitHub"))), __jsx("div", {
    className: "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, __jsx("div", {
    className: "form-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, __jsx("label", {
    "for": "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
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
      lineNumber: 548
    },
    __self: this
  }), __jsx("label", {
    "for": "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
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
      lineNumber: 557
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }, __jsx("label", {
    "for": "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
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
      lineNumber: 568
    },
    __self: this
  }), __jsx("label", {
    "for": "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
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
      lineNumber: 577
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, __jsx("label", {
    "for": "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }, "About"), __jsx("textarea", {
    name: "about",
    className: "form-control",
    placeholder: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, "Web Administrator")), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: this
  }, __jsx("button", {
    name: "submit",
    className: "btn btn-primary btn-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  }), " Update Profile")))))));
});
/* harmony default export */ __webpack_exports__["default"] = (SettingPage);

/***/ })

})
//# sourceMappingURL=setting.js.e8e7510028e06d810626.hot-update.js.map