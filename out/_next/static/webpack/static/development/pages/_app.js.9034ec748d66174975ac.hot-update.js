webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./helpers.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/Users/mathieu/Projects/learning/react/fastify-next/components/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    text-align: inherit;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    padding: 0;\n    border: 0;\n    & > li {\n      margin-right: 28px;\n    }\n    & > li:last-child {\n      margin-right: 0;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 0 8px;\n    order: -1;\n    border: 0;\n        \n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 12px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    border: 0;\n    overflow-x: scroll;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n    justify-content: space-between;\n    border-bottom: 1px solid ", ";  \n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex"
}).withConfig({
  displayName: "Header__Container",
  componentId: "ku26kg-0"
})(["flex-direction:column;", ""], _helpers__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.g86;
}));
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Header__Nav",
  componentId: "ku26kg-1"
})(["border-bottom:1px solid ", ";", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.g86;
}, _helpers__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject2()));
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"]).attrs({
  className: "ff-futura-pt ttu tdn ta-c w100"
}).withConfig({
  displayName: "Header__StyledLink",
  componentId: "ku26kg-2"
})(["display:inline-block;white-space:nowrap;overflow:hidden;letter-spacing:1px;line-height:2.5em;color:", ";font-size:16px;", ""], function (_ref3) {
  var theme = _ref3.theme;
  return theme.g60;
}, _helpers__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject3()));
var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Header__Title",
  componentId: "ku26kg-3"
})(["border-bottom:1px solid ", ";padding:25px 0;", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.g86;
}, _helpers__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject4()));
var Ul = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.attrs({
  className: "m0 p0"
}).withConfig({
  displayName: "Header__Ul",
  componentId: "ku26kg-4"
})(["padding-bottom:15px;display:", ";", ""], function (_ref5) {
  var isOpen = _ref5.isOpen;
  return !isOpen ? "none" : "inherit";
}, _helpers__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject5()));
var Button = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(StyledLink).attrs({
  as: "button"
}).withConfig({
  displayName: "Header__Button",
  componentId: "ku26kg-5"
})(["height:70px;", ""], _helpers__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject6()));

var ListItem = function ListItem(_ref6) {
  var href = _ref6.href,
      txt = _ref6.txt;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, txt));
};

var List = function List(_ref7) {
  var isOpen = _ref7.isOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ul, {
    isOpen: isOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "/",
    txt: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "#feature-tv",
    txt: "features / tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "#documentaries",
    txt: "documentary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "#music-videos",
    txt: "music videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "#experimental",
    txt: "experimental",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "#photography",
    txt: "photography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "#contact",
    txt: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "#resume",
    txt: "resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }));
};

var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.attrs({
  className: "ff-futura-pt m0 f31 fw300 ttu"
}).withConfig({
  displayName: "Header__H1",
  componentId: "ku26kg-6"
})(["letter-spacing:0.096rem;color:", ";text-align:center;", ""], function (_ref8) {
  var theme = _ref8.theme;
  return theme.g13;
}, _helpers__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject7()));
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.attrs({
  className: "ttu f12 ta-c fw400"
}).withConfig({
  displayName: "Header__H2",
  componentId: "ku26kg-7"
})(["color:", ";letter-spacing:0.416rem;margin:12px 0 0;"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.g78;
});

var _default =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(_default, _React$PureComponent);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnClick", function () {
      return _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
        id: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
        isOpen: isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "L\xE9o Lef\xE8vre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Cinematographer")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=_app.js.9034ec748d66174975ac.hot-update.js.map