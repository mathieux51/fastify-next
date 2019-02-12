webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Video */ "./components/Video.js");
/* harmony import */ var _components_ProjectContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProjectContext */ "./components/ProjectContext.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers */ "./helpers.js");



var _jsxFileName = "/Users/mathieu/Projects/learning/react/fastify-next/pages/projects.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    margin: 0 17px 0 32px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    flex-direction: row;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.attrs({
  className: 'flex'
}).withConfig({
  displayName: "projects__Container",
  componentId: "sc-17plrrx-0"
})(["margin-top:50px;flex-direction:column;", ""], _helpers__WEBPACK_IMPORTED_MODULE_8__["media"].desktop(_templateObject()));
var RessourceContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "projects__RessourceContainer",
  componentId: "sc-17plrrx-1"
})([""]);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "projects__TextContainer",
  componentId: "sc-17plrrx-2"
})(["margin:17px;", ""], _helpers__WEBPACK_IMPORTED_MODULE_8__["media"].desktop(_templateObject2()));
var Img = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.attrs({
  className: 'cover w100'
}).withConfig({
  displayName: "projects__Img",
  componentId: "sc-17plrrx-3"
})(["margin-top:30px;"]);

var Projects = function Projects(props) {
  var _props$projects$filte = props.projects.filter(function (p) {
    return p.href === props.router.query.name;
  }),
      _props$projects$filte2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_props$projects$filte, 1),
      cur = _props$projects$filte2[0];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, cur && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(RessourceContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, cur.videos && cur.videos.map(function (v) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Video__WEBPACK_IMPORTED_MODULE_6__["default"], {
      type: v.type,
      videoId: v.videoId,
      key: v.videoId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Img, {
    src: cur.thumbnail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), cur.photos && cur.photos.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Img, {
      src: p,
      key: p,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, cur.description)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ProjectContext__WEBPACK_IMPORTED_MODULE_7__["ProjectConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, function (_ref) {
    var projects = _ref.projects;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Projects, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      projects: projects,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }));
  });
}));

/***/ })

})
//# sourceMappingURL=projects.js.659c92ac8b87491e83ef.hot-update.js.map