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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/mathieuschmidt/projects/fastify-next/components/Header.js";


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




var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.attrs({
  className: ''
}).withConfig({
  displayName: "Header__Nav",
  componentId: "ku26kg-0"
})(["border-bottom:1px solid ", ";margin:15px 20px;"], function (_ref) {
  var theme = _ref.theme;
  return theme.g86;
});
var A = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.attrs({
  className: 'ff-futura-pt f16 ttu tdn ta-c w100 d'
}).withConfig({
  displayName: "Header__A",
  componentId: "ku26kg-1"
})(["letter-spacing:1px;line-height:2.5em;color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.g60;
});
var Ul = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.attrs({
  className: 'fxd-c m0 p0'
}).withConfig({
  displayName: "Header__Ul",
  componentId: "ku26kg-2"
})(["border-bottom:1px solid ", ";padding-bottom:15px;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.g86;
});
var Button = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(A).attrs({
  as: 'button'
}).withConfig({
  displayName: "Header__Button",
  componentId: "ku26kg-3"
})(["height:70px;"]);

var StyledLink = function StyledLink(_ref4) {
  var href = _ref4.href,
      txt = _ref4.txt;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    prefetch: true,
    href: href,
    as: "" + href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, txt)));
};

var List = function List() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ul, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "/",
    txt: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "/feature-tv",
    txt: "features / tv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "/documentaries",
    txt: "documentary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "/music-videos",
    txt: "music videos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "/experimental",
    txt: "experimental",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "/photography",
    txt: "photography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "/contact",
    txt: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "/resume",
    txt: "resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
};

var H1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.attrs({
  className: 'ff-futura-pt m0 f31 fw300 ttu ta-c'
}).withConfig({
  displayName: "Header__H1",
  componentId: "ku26kg-4"
})(["color:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.g13;
});
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.attrs({
  className: 'm0'
}).withConfig({
  displayName: "Header__H2",
  componentId: "ku26kg-5"
})([""]);

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, isOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Menu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "L\xE9o Lef\xE8vre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Cinematographer"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.828180059010a1a3151a.hot-update.js.map