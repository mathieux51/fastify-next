webpackHotUpdate("static/development/pages/index.js",{

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n  order: -1;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





console.log(_helpers__WEBPACK_IMPORTED_MODULE_2__["media"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "flex"
}).withConfig({
  displayName: "Header__Container",
  componentId: "ku26kg-0"
})(["flex-direction:row;", ""], _helpers__WEBPACK_IMPORTED_MODULE_2__["media"].desktop(_templateObject()));
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.attrs({
  className: ""
}).withConfig({
  displayName: "Header__Nav",
  componentId: "ku26kg-1"
})(["border-bottom:1px solid ", ";margin:15px 20px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.g86;
});
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"]).attrs({
  className: "ff-futura-pt f16 ttu tdn ta-c w100 d"
}).withConfig({
  displayName: "Header__StyledLink",
  componentId: "ku26kg-2"
})(["letter-spacing:1px;line-height:2.5em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.g60;
});
var Ul = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.attrs({
  className: "fxd-c m0 p0"
}).withConfig({
  displayName: "Header__Ul",
  componentId: "ku26kg-3"
})(["border-bottom:1px solid ", ";padding-bottom:15px;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.g86;
});
var Button = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(StyledLink).attrs({
  as: "button"
}).withConfig({
  displayName: "Header__Button",
  componentId: "ku26kg-4"
})(["height:70px;"]);

var ListItem = function ListItem(_ref4) {
  var href = _ref4.href,
      txt = _ref4.txt;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, txt));
};

var List = function List() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ul, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "/",
    txt: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "/feature-tv",
    txt: "features / tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "/documentaries",
    txt: "documentary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "/music-videos",
    txt: "music videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "/experimental",
    txt: "experimental",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "/photography",
    txt: "photography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "/contact",
    txt: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItem, {
    href: "/resume",
    txt: "resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
};

var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: ""
}).withConfig({
  displayName: "Header__Title",
  componentId: "ku26kg-5"
})(["border-bottom:1px solid ", ";margin:0 20px;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.g86;
});
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.attrs({
  className: "ff-futura-pt m0 f31 fw300 ttu ta-c"
}).withConfig({
  displayName: "Header__H1",
  componentId: "ku26kg-6"
})(["color:", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.g13;
});
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.attrs({
  className: "ttu f12 ta-c fw400"
}).withConfig({
  displayName: "Header__H2",
  componentId: "ku26kg-7"
})(["letter-spacing:5px;margin:8px 0 15px;"]);

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
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
        id: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, isOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "L\xE9o Lef\xE8vre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Cinematographer")));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.806284a4c08d39817bba.hot-update.js.map