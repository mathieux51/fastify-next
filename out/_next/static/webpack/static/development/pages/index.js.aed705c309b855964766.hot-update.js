webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Body.js":
/*!****************************!*\
  !*** ./components/Body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProjectContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectContext */ "./components/ProjectContext.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
var _jsxFileName = "/Users/mathieu/Projects/learning/react/fastify-next/components/Body.js";




var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "Body__Main",
  componentId: "sc-174sa1s-0"
})(["margin:33px 20px;"]);
var Ul = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.attrs({
  className: "m0 p0"
}).withConfig({
  displayName: "Body__Ul",
  componentId: "sc-174sa1s-1"
})([""]);
var AspectRatio = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "w100 relative"
}).withConfig({
  displayName: "Body__AspectRatio",
  componentId: "sc-174sa1s-2"
})(["padding-top:17.5%;height:0;overflow:hidden;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.attrs({
  className: "absolute t0 l0 w100 h100 flex"
}).withConfig({
  displayName: "Body__Row",
  componentId: "sc-174sa1s-3"
})([""]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.attrs({
  className: "fw300 ff-futura-pt f14 ttu ta-c"
}).withConfig({
  displayName: "Body__Title",
  componentId: "sc-174sa1s-4"
})(["display:none;color:", ";line-height:1.6em;letter-spacing:0.6em;"], function (_ref) {
  var theme = _ref.theme;
  return theme.fgs;
});
var Col = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"]).attrs({
  className: "flex-1 h100 relative flex jc-c ai-c"
}).withConfig({
  displayName: "Body__Col",
  componentId: "sc-174sa1s-5"
})(["margin:1px;&:hover,&:focus{background:", ";opacity:0.7;transition:opacity 0.14s ease-out;& > ", "{display:inherit;}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.g60;
}, Title);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.attrs({
  className: "absolute t0 r0 b0 l0 w100 h100 cover z-1"
}).withConfig({
  displayName: "Body__Img",
  componentId: "sc-174sa1s-6"
})([""]);

var groupBy2 = function groupBy2(arr) {
  var formatted = [];

  while (arr.length > 0) {
    formatted.push(arr.splice(0, 2));
  }

  return formatted;
};

var List = function List() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectContext__WEBPACK_IMPORTED_MODULE_2__["ProjectConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, function (projects) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ul, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, groupBy2(projects).map(function (p, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AspectRatio, {
        key: "".concat(p[i].title, "-").concat(i),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, p.map(function (project, j) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Col, {
          href: project.href,
          key: "".concat(project.title, "-").concat(j),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
          src: project.thumbnail,
          alt: project.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }));
      })));
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.aed705c309b855964766.hot-update.js.map