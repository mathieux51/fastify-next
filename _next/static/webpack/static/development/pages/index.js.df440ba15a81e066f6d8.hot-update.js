webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectMosaique.js":
/*!***************************************!*\
  !*** ./components/ProjectMosaique.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./helpers.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProjectContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectContext */ "./components/ProjectContext.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/Users/mathieu/Projects/learning/react/fastify-next/components/ProjectMosaique.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var AspectRatio = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "w100 relative"
}).withConfig({
  displayName: "ProjectMosaique__AspectRatio",
  componentId: "xvhue5-0"
})(["padding-top:17.5%;height:0;overflow:hidden;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs({
  className: "absolute t0 l0 w100 h100 flex"
}).withConfig({
  displayName: "ProjectMosaique__Row",
  componentId: "xvhue5-1"
})([""]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.attrs({
  className: "fw300 ff-futura-pt f14 ttu ta-c z1"
}).withConfig({
  displayName: "ProjectMosaique__Title",
  componentId: "xvhue5-2"
})(["display:none;color:", ";line-height:1.6em;letter-spacing:0.6em;"], function (_ref) {
  var theme = _ref.theme;
  return theme.fgs;
});
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Link__WEBPACK_IMPORTED_MODULE_4__["default"]).attrs({
  className: "flex-1 h100 relative flex jc-c ai-c"
}).withConfig({
  displayName: "ProjectMosaique__StyledLink",
  componentId: "xvhue5-3"
})(["margin:1px;&:hover,&:focus{background:", ";opacity:0.7;transition:opacity 0.14s ease-out;& > ", "{display:inherit;}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.g60;
}, Title);

var ProjectMosaique = function ProjectMosaique(_ref3) {
  var projects = _ref3.projects;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "m0 p0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["groupBy2"])(projects).map(function (p, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AspectRatio, {
      key: "AspectRatio-".concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, p.map(function (project, j) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "/projects?name=".concat(project.href),
        key: "Col-".concat(j),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: project.thumbnail,
        alt: project.title,
        className: "absolute t0 r0 b0 l0 w100 h100 cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }));
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectContext__WEBPACK_IMPORTED_MODULE_3__["ProjectConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, function (projects) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectMosaique, _extends({}, props, {
      projects: projects,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  });
});

/***/ })

})
//# sourceMappingURL=index.js.df440ba15a81e066f6d8.hot-update.js.map