webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectContext.js":
/*!**************************************!*\
  !*** ./components/ProjectContext.js ***!
  \**************************************/
/*! exports provided: ProjectProvider, ProjectConsumer, ProjectContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectProvider", function() { return ProjectProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectConsumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectContext", function() { return ProjectContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../db */ "./db/index.js");







var _jsxFileName = "/Users/mathieu/Projects/learning/react/fastify-next/components/ProjectContext.js";


var ProjectContext;

var _ProjectContext = ProjectContext = react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext(),
    Provider = _ProjectContext.Provider,
    Consumer = _ProjectContext.Consumer;

var ProjectProvider =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjectProvider, _React$PureComponent);

  function ProjectProvider() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "state", {
      projects: _db__WEBPACK_IMPORTED_MODULE_8__["projects"]
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectProvider, [{
    key: "render",
    value: function render() {
      var projects = this.state.projects;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Provider, {
        value: projects,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return ProjectProvider;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);



/***/ }),

/***/ "./components/ProjectMosaique.js":
/*!***************************************!*\
  !*** ./components/ProjectMosaique.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./helpers.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProjectContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectContext */ "./components/ProjectContext.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Link */ "./components/Link.js");

var _jsxFileName = "/Users/mathieu/Projects/learning/react/fastify-next/components/ProjectMosaique.js";





var AspectRatio = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.attrs({
  className: "w100 relative"
}).withConfig({
  displayName: "ProjectMosaique__AspectRatio",
  componentId: "xvhue5-0"
})(["padding-top:17.5%;height:0;overflow:hidden;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.attrs({
  className: "absolute t0 l0 w100 h100 flex"
}).withConfig({
  displayName: "ProjectMosaique__Row",
  componentId: "xvhue5-1"
})([""]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h3.attrs({
  className: "fw300 ff-futura-pt f14 ttu ta-c z1"
}).withConfig({
  displayName: "ProjectMosaique__Title",
  componentId: "xvhue5-2"
})(["display:none;color:", ";line-height:1.6em;letter-spacing:0.6em;"], function (_ref) {
  var theme = _ref.theme;
  return theme.fgs;
});
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_Link__WEBPACK_IMPORTED_MODULE_5__["default"]).attrs({
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "m0 p0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["groupBy2"])(projects).map(function (p, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AspectRatio, {
      key: "AspectRatio-".concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, p.map(function (project, j) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
        href: "/projects?name=".concat(project.href),
        key: "Col-".concat(j),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, project.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectContext__WEBPACK_IMPORTED_MODULE_4__["ProjectConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, function (projects) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectMosaique, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      projects: projects,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  });
});

/***/ }),

/***/ "./db/index.js":
/*!*********************!*\
  !*** ./db/index.js ***!
  \*********************/
/*! exports provided: projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony import */ var _projects_christina_vantzou__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/christina-vantzou */ "./db/projects/christina-vantzou.js");
/* harmony import */ var _projects_de_mon_coeur_froid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/de-mon-coeur-froid */ "./db/projects/de-mon-coeur-froid.js");
/* harmony import */ var _projects_foulek__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/foulek */ "./db/projects/foulek.js");
/* harmony import */ var _projects_garcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/garcon */ "./db/projects/garcon.js");
/* harmony import */ var _projects_globetrotteur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/globetrotteur */ "./db/projects/globetrotteur.js");
/* harmony import */ var _projects_helvetica__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/helvetica */ "./db/projects/helvetica.js");
/* harmony import */ var _projects_je_les_aime_tous__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/je-les-aime-tous */ "./db/projects/je-les-aime-tous.js");
/* harmony import */ var _projects_le_mal_du_citron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/le-mal-du-citron */ "./db/projects/le-mal-du-citron.js");
/* harmony import */ var _projects_le_skeleton_band__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/le-skeleton-band */ "./db/projects/le-skeleton-band.js");
/* harmony import */ var _projects_les_amoureuses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/les-amoureuses */ "./db/projects/les-amoureuses.js");
/* harmony import */ var _projects_light_my_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/light-my-fire */ "./db/projects/light-my-fire.js");
/* harmony import */ var _projects_lost_exile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/lost-exile */ "./db/projects/lost-exile.js");
/* harmony import */ var _projects_manu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/manu */ "./db/projects/manu.js");
/* harmony import */ var _projects_melanie_de_biasio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/melanie-de-biasio */ "./db/projects/melanie-de-biasio.js");
/* harmony import */ var _projects_morella__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/morella */ "./db/projects/morella.js");
/* harmony import */ var _projects_papicha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/papicha */ "./db/projects/papicha.js");
/* harmony import */ var _projects_scarlett_o_hanna__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects/scarlett-o-hanna */ "./db/projects/scarlett-o-hanna.js");
/* harmony import */ var _projects_the_hidden_part__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projects/the-hidden-part */ "./db/projects/the-hidden-part.js");
/* harmony import */ var _projects_valet_noir__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projects/valet-noir */ "./db/projects/valet-noir.js");
/* harmony import */ var _projects_woodie_smalls__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projects/woodie-smalls */ "./db/projects/woodie-smalls.js");




















var projects = [_projects_helvetica__WEBPACK_IMPORTED_MODULE_5__["default"], _projects_papicha__WEBPACK_IMPORTED_MODULE_15__["default"], _projects_garcon__WEBPACK_IMPORTED_MODULE_3__["default"], _projects_manu__WEBPACK_IMPORTED_MODULE_12__["default"], _projects_melanie_de_biasio__WEBPACK_IMPORTED_MODULE_13__["default"], _projects_les_amoureuses__WEBPACK_IMPORTED_MODULE_9__["default"], _projects_christina_vantzou__WEBPACK_IMPORTED_MODULE_0__["default"], _projects_the_hidden_part__WEBPACK_IMPORTED_MODULE_17__["default"], _projects_le_skeleton_band__WEBPACK_IMPORTED_MODULE_8__["default"], _projects_lost_exile__WEBPACK_IMPORTED_MODULE_11__["default"], _projects_valet_noir__WEBPACK_IMPORTED_MODULE_18__["default"], _projects_je_les_aime_tous__WEBPACK_IMPORTED_MODULE_6__["default"], _projects_de_mon_coeur_froid__WEBPACK_IMPORTED_MODULE_1__["default"], _projects_le_mal_du_citron__WEBPACK_IMPORTED_MODULE_7__["default"], _projects_globetrotteur__WEBPACK_IMPORTED_MODULE_4__["default"], _projects_foulek__WEBPACK_IMPORTED_MODULE_2__["default"], _projects_morella__WEBPACK_IMPORTED_MODULE_14__["default"], _projects_light_my_fire__WEBPACK_IMPORTED_MODULE_10__["default"], _projects_woodie_smalls__WEBPACK_IMPORTED_MODULE_19__["default"], _projects_scarlett_o_hanna__WEBPACK_IMPORTED_MODULE_16__["default"]];

/***/ }),

/***/ "./db/projects/christina-vantzou.js":
/*!******************************************!*\
  !*** ./db/projects/christina-vantzou.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_christina_vantzou_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/christina-vantzou/thumbnail.jpg */ "./assets/images/christina-vantzou/thumbnail.jpg");
/* harmony import */ var _assets_images_christina_vantzou_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_christina_vantzou_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Christina Vantzou",
  href: "christina-vantzou",
  category: [],
  thumbnail: _assets_images_christina_vantzou_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: null,
  videos: [{
    type: "vimeo",
    videoId: "105343687"
  }, {
    type: "vimeo",
    videoId: "87452688"
  }, {
    type: "vimeo",
    videoId: "113145554"
  }, {
    type: "vimeo",
    videoId: "113145553"
  }, {
    type: "vimeo",
    videoId: "113149852"
  }],
  description: "Music videos for the album \"n\xB02\" \n\n  Directed by Christina Vantzou\n  \n  Produced by Kranky\n  \n  Shot on Phantom Miro M320s + Leitz samcine & Angenieux 25-250mm\n  \n  2014\n  \n  ---------------\n  \n  Camera Assistant: Elvis Fontaine Garant\n  \n  Gaffer:Denis Antheunissens\n  \n  Key Grip: Artur Castro Freire\n  \n  Grading: Florian Berutti\n  \n  www.christinavantzou.com"
});

/***/ }),

/***/ "./db/projects/de-mon-coeur-froid.js":
/*!*******************************************!*\
  !*** ./db/projects/de-mon-coeur-froid.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_de_mon_coeur_froid_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/de-mon-coeur-froid/thumbnail.jpg */ "./assets/images/de-mon-coeur-froid/thumbnail.jpg");
/* harmony import */ var _assets_images_de_mon_coeur_froid_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_de_mon_coeur_froid_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_de_mon_coeur_froid_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/de-mon-coeur-froid/1.jpg */ "./assets/images/de-mon-coeur-froid/1.jpg");
/* harmony import */ var _assets_images_de_mon_coeur_froid_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_de_mon_coeur_froid_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_de_mon_coeur_froid_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/de-mon-coeur-froid/2.jpg */ "./assets/images/de-mon-coeur-froid/2.jpg");
/* harmony import */ var _assets_images_de_mon_coeur_froid_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_de_mon_coeur_froid_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_de_mon_coeur_froid_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/de-mon-coeur-froid/3.jpg */ "./assets/images/de-mon-coeur-froid/3.jpg");
/* harmony import */ var _assets_images_de_mon_coeur_froid_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_de_mon_coeur_froid_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_de_mon_coeur_froid_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/de-mon-coeur-froid/4.jpg */ "./assets/images/de-mon-coeur-froid/4.jpg");
/* harmony import */ var _assets_images_de_mon_coeur_froid_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_de_mon_coeur_froid_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_de_mon_coeur_froid_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/de-mon-coeur-froid/5.jpg */ "./assets/images/de-mon-coeur-froid/5.jpg");
/* harmony import */ var _assets_images_de_mon_coeur_froid_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_de_mon_coeur_froid_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_de_mon_coeur_froid_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/de-mon-coeur-froid/6.jpg */ "./assets/images/de-mon-coeur-froid/6.jpg");
/* harmony import */ var _assets_images_de_mon_coeur_froid_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_de_mon_coeur_froid_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_de_mon_coeur_froid_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/de-mon-coeur-froid/7.jpg */ "./assets/images/de-mon-coeur-froid/7.jpg");
/* harmony import */ var _assets_images_de_mon_coeur_froid_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_de_mon_coeur_froid_7_jpg__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ __webpack_exports__["default"] = ({
  title: "De mon coeur froid",
  href: "de-mon-coeur-froid",
  category: [],
  thumbnail: _assets_images_de_mon_coeur_froid_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_de_mon_coeur_froid_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_de_mon_coeur_froid_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_de_mon_coeur_froid_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_de_mon_coeur_froid_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_de_mon_coeur_froid_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_de_mon_coeur_froid_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_de_mon_coeur_froid_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a],
  videos: [{
    type: "vimeo",
    videoId: "198489013"
  }],
  description: "A short film by Julie Sokolowski\n\n  Shot in Brussels\n  \n  Aaton Xtera + Zeiss HS\n  \n  16mm expired film stocks\n  \n  13'\n  \n  2015\n  \n  ----\n  \n  Camera assistant: Charlotte Marchal / Camille De Chenay\n  \n  Gaffer : Son Doan\n  \n  Colorist: Loup Brenta"
});

/***/ }),

/***/ "./db/projects/foulek.js":
/*!*******************************!*\
  !*** ./db/projects/foulek.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_foulek_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/foulek/thumbnail.jpg */ "./assets/images/foulek/thumbnail.jpg");
/* harmony import */ var _assets_images_foulek_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_foulek_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_foulek_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/foulek/1.jpg */ "./assets/images/foulek/1.jpg");
/* harmony import */ var _assets_images_foulek_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_foulek_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_foulek_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/foulek/2.jpg */ "./assets/images/foulek/2.jpg");
/* harmony import */ var _assets_images_foulek_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_foulek_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_foulek_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/foulek/3.jpg */ "./assets/images/foulek/3.jpg");
/* harmony import */ var _assets_images_foulek_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_foulek_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_foulek_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/foulek/4.jpg */ "./assets/images/foulek/4.jpg");
/* harmony import */ var _assets_images_foulek_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_foulek_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_foulek_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/foulek/5.jpg */ "./assets/images/foulek/5.jpg");
/* harmony import */ var _assets_images_foulek_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_foulek_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_foulek_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/foulek/6.jpg */ "./assets/images/foulek/6.jpg");
/* harmony import */ var _assets_images_foulek_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_foulek_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_foulek_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/foulek/7.jpg */ "./assets/images/foulek/7.jpg");
/* harmony import */ var _assets_images_foulek_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_foulek_7_jpg__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Foulek",
  href: "foulek",
  category: [],
  thumbnail: _assets_images_foulek_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_foulek_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_foulek_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_foulek_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_foulek_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_foulek_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_foulek_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_foulek_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a],
  videos: [{
    type: "vimeo",
    videoId: "244049028"
  }],
  description: "A short film by Patrick Muroni\n\n  Prod: ECAL\n  \n  Shot in Switzerland\n  \n  Arri Alexa Mini + Leica set\n  \n  18'\n  \n  2017\n  \n  ----\n  \n  Camera assistant: Camille Langlois\n  \n  Gaffer: Antonin Suppes\n  \n  Colorist: Olivier Ogneux"
});

/***/ }),

/***/ "./db/projects/garcon.js":
/*!*******************************!*\
  !*** ./db/projects/garcon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_garcon_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/garcon/thumbnail.jpg */ "./assets/images/garcon/thumbnail.jpg");
/* harmony import */ var _assets_images_garcon_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_garcon_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_garcon_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/garcon/1.jpg */ "./assets/images/garcon/1.jpg");
/* harmony import */ var _assets_images_garcon_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_garcon_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_garcon_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/garcon/2.jpg */ "./assets/images/garcon/2.jpg");
/* harmony import */ var _assets_images_garcon_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_garcon_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_garcon_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/garcon/3.jpg */ "./assets/images/garcon/3.jpg");
/* harmony import */ var _assets_images_garcon_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_garcon_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_garcon_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/garcon/4.jpg */ "./assets/images/garcon/4.jpg");
/* harmony import */ var _assets_images_garcon_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_garcon_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_garcon_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/garcon/5.jpg */ "./assets/images/garcon/5.jpg");
/* harmony import */ var _assets_images_garcon_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_garcon_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_garcon_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/garcon/6.jpg */ "./assets/images/garcon/6.jpg");
/* harmony import */ var _assets_images_garcon_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_garcon_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_garcon_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/garcon/7.jpg */ "./assets/images/garcon/7.jpg");
/* harmony import */ var _assets_images_garcon_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_garcon_7_jpg__WEBPACK_IMPORTED_MODULE_7__);








/* harmony default export */ __webpack_exports__["default"] = ({
  title: "garçon",
  href: "garçon",
  category: [],
  photos: [_assets_images_garcon_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_garcon_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_garcon_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_garcon_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_garcon_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_garcon_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_garcon_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a],
  videos: null,
  thumbnail: _assets_images_garcon_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  description: "A short film by Isabelle Schapira\n\n  Prod: H\xE9licotronc\n  \n  Shot in Belgium\n  \n  Red Dragon + Cooke S4\n  \n  2018\n  \n  ----\n  \n  Camera assistant: Elvis Fontaine-Garant\n  \n  Gaffer: Thomas Bojan\n  \n  Key Grip: Julien Chassaignon \n  \n  ----\n  \n  *** Best cinematography Award @ FIFF 2018 ***\n  \n  * Shortlist Magritte du Cin\xE9ma 2019"
});

/***/ }),

/***/ "./db/projects/globetrotteur.js":
/*!**************************************!*\
  !*** ./db/projects/globetrotteur.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_globetrotteur_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/globetrotteur/thumbnail.jpg */ "./assets/images/globetrotteur/thumbnail.jpg");
/* harmony import */ var _assets_images_globetrotteur_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_globetrotteur_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_globetrotteur_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/globetrotteur/1.jpg */ "./assets/images/globetrotteur/1.jpg");
/* harmony import */ var _assets_images_globetrotteur_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_globetrotteur_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_globetrotteur_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/globetrotteur/2.jpg */ "./assets/images/globetrotteur/2.jpg");
/* harmony import */ var _assets_images_globetrotteur_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_globetrotteur_2_jpg__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Globetrotteur",
  href: "globetrotteur",
  category: [],
  thumbnail: _assets_images_globetrotteur_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_globetrotteur_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_globetrotteur_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a],
  videos: null,
  description: "A short film by Kaspar Schiltnecht & J\xE9r\xE9my Rosenstein\n\n  Prod: Box Production\n  \n  Shot in France\n  \n  Aaton 35 + Zeiss STD\n  \n  Kodak Vision 3  250D/500T\n  \n  13'\n  \n  2016\n  \n  ----\n  \n  Camera assistant: Elvis Fontaine-Garant / Adrien Lengrand\n  \n  Colorist: Loup Brenta"
});

/***/ }),

/***/ "./db/projects/helvetica.js":
/*!**********************************!*\
  !*** ./db/projects/helvetica.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_helvetica_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/helvetica/thumbnail.jpg */ "./assets/images/helvetica/thumbnail.jpg");
/* harmony import */ var _assets_images_helvetica_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_helvetica_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_helvetica_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/helvetica/1.jpg */ "./assets/images/helvetica/1.jpg");
/* harmony import */ var _assets_images_helvetica_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_helvetica_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_helvetica_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/helvetica/2.jpg */ "./assets/images/helvetica/2.jpg");
/* harmony import */ var _assets_images_helvetica_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_helvetica_2_jpg__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Helvetica",
  href: "helvetica",
  category: [],
  thumbnail: _assets_images_helvetica_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_helvetica_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_helvetica_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a],
  videos: null,
  description: "Tv serie - 6 x 52'\n\n  Directed by Romain Graf\n  \n  Prod: Rita Productions (CH) / Versus Productions (BE)\n  \n  Arri Alexa Mini/PLUS + Zeiss Master Primes\n  \n  Shot in Switzerland\n  \n  2019\n  \n  -\n  \n  Camera assistant: Elvis Fontaine Garant (A cam)\n  \n  Camera assistant: Guillaume Brandt (B cam)\n  \n  Gaffer: Dries de Paepe\n  \n  Key Grip: Julien Chassaignon\n  \n  B cam operator: Camille Langlois\n  \n  Rental compagnies: Visual Switzerland / WATTS"
});

/***/ }),

/***/ "./db/projects/index.js":
false,

/***/ "./db/projects/je-les-aime-tous.js":
/*!*****************************************!*\
  !*** ./db/projects/je-les-aime-tous.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_je_les_aime_tous_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/thumbnail.jpg */ "./assets/images/je-les-aime-tous/thumbnail.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_je_les_aime_tous_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/1.jpg */ "./assets/images/je-les-aime-tous/1.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_je_les_aime_tous_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/2.jpg */ "./assets/images/je-les-aime-tous/2.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_je_les_aime_tous_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/3.jpg */ "./assets/images/je-les-aime-tous/3.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_je_les_aime_tous_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/4.jpg */ "./assets/images/je-les-aime-tous/4.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_je_les_aime_tous_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/5.jpg */ "./assets/images/je-les-aime-tous/5.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_je_les_aime_tous_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/6.jpg */ "./assets/images/je-les-aime-tous/6.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_je_les_aime_tous_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/7.jpg */ "./assets/images/je-les-aime-tous/7.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_7_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_je_les_aime_tous_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/8.jpg */ "./assets/images/je-les-aime-tous/8.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_8_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_8_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_je_les_aime_tous_9_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/9.jpg */ "./assets/images/je-les-aime-tous/9.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_9_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_9_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_je_les_aime_tous_10_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/je-les-aime-tous/10.jpg */ "./assets/images/je-les-aime-tous/10.jpg");
/* harmony import */ var _assets_images_je_les_aime_tous_10_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_je_les_aime_tous_10_jpg__WEBPACK_IMPORTED_MODULE_10__);











/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Je les aime tous",
  href: "je-les-aime-tous",
  category: [],
  thumbnail: _assets_images_je_les_aime_tous_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_je_les_aime_tous_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_je_les_aime_tous_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_je_les_aime_tous_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_je_les_aime_tous_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_je_les_aime_tous_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_je_les_aime_tous_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_je_les_aime_tous_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_images_je_les_aime_tous_8_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_images_je_les_aime_tous_9_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, _assets_images_je_les_aime_tous_10_jpg__WEBPACK_IMPORTED_MODULE_10___default.a],
  videos: [{
    type: "vimeo",
    videoId: "199982565"
  }],
  description: "A short film by Guillaume Kozakiewiez\n\n  Prod: Les 48\xB0 rugissants\n  \n  Shot in France\n  \n  Arri Amira + Leitz Samcine\n  \n  25'\n  \n  2016\n  \n  ----\n  \n  Camera assistant: Camille Langlois\n  \n  Gaffer: Enguerrand Gicquel\n  \n  Production design: Natalia Grabundzja\n  \n  Colorist: Olivier Ogneux"
});

/***/ }),

/***/ "./db/projects/le-mal-du-citron.js":
/*!*****************************************!*\
  !*** ./db/projects/le-mal-du-citron.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_le_mal_du_citron_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/le-mal-du-citron/thumbnail.jpg */ "./assets/images/le-mal-du-citron/thumbnail.jpg");
/* harmony import */ var _assets_images_le_mal_du_citron_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_mal_du_citron_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_le_mal_du_citron_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/le-mal-du-citron/1.jpg */ "./assets/images/le-mal-du-citron/1.jpg");
/* harmony import */ var _assets_images_le_mal_du_citron_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_mal_du_citron_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_le_mal_du_citron_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/le-mal-du-citron/2.jpg */ "./assets/images/le-mal-du-citron/2.jpg");
/* harmony import */ var _assets_images_le_mal_du_citron_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_mal_du_citron_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_le_mal_du_citron_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/le-mal-du-citron/3.jpg */ "./assets/images/le-mal-du-citron/3.jpg");
/* harmony import */ var _assets_images_le_mal_du_citron_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_mal_du_citron_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_le_mal_du_citron_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/le-mal-du-citron/4.jpg */ "./assets/images/le-mal-du-citron/4.jpg");
/* harmony import */ var _assets_images_le_mal_du_citron_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_mal_du_citron_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_le_mal_du_citron_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/le-mal-du-citron/5.jpg */ "./assets/images/le-mal-du-citron/5.jpg");
/* harmony import */ var _assets_images_le_mal_du_citron_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_mal_du_citron_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_le_mal_du_citron_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/le-mal-du-citron/6.jpg */ "./assets/images/le-mal-du-citron/6.jpg");
/* harmony import */ var _assets_images_le_mal_du_citron_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_mal_du_citron_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_le_mal_du_citron_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/le-mal-du-citron/7.jpg */ "./assets/images/le-mal-du-citron/7.jpg");
/* harmony import */ var _assets_images_le_mal_du_citron_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_mal_du_citron_7_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_le_mal_du_citron_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/le-mal-du-citron/8.jpg */ "./assets/images/le-mal-du-citron/8.jpg");
/* harmony import */ var _assets_images_le_mal_du_citron_8_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_mal_du_citron_8_jpg__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Le mal du citron",
  href: "le-mal-du-citron",
  category: [],
  thumbnail: _assets_images_le_mal_du_citron_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_le_mal_du_citron_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_le_mal_du_citron_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_le_mal_du_citron_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_le_mal_du_citron_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_le_mal_du_citron_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_le_mal_du_citron_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_le_mal_du_citron_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a],
  videos: [{
    type: "vimeo",
    videoId: "120179434"
  }],
  description: "A short film by J\xE9r\xE9my Rosenstein & Kaspar Schiltnecht\n\n  Produced by Box Production\n  \n  Shot in Collias (France)\n  \n  S16mm\n  \n  Aaton Xtera + Zeiss HS\n  \n  Kodak 250D & 500T\n  \n  21'\n  \n  2013\n  \n  ----\n  \n  Camera assistant: Adrien Lengrand\n  \n  Colorist: Loup Brenta\n  \n  ----\n  \n  * Festival Internacional de Valencia Special Mention of the Jury 2015 *\n  \n  * Z\xFCrich, Schweizer Jugendfilmtage, 3. Preis Filmschulen 2015 *\n  \n  * International Izmir Short Film Festival, Jury Special Award 2014 *"
});

/***/ }),

/***/ "./db/projects/le-skeleton-band.js":
/*!*****************************************!*\
  !*** ./db/projects/le-skeleton-band.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_le_skeleton_band_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/thumbnail.jpg */ "./assets/images/le-skeleton-band/thumbnail.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_le_skeleton_band_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/1.jpg */ "./assets/images/le-skeleton-band/1.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_le_skeleton_band_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/2.jpg */ "./assets/images/le-skeleton-band/2.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_le_skeleton_band_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/3.jpg */ "./assets/images/le-skeleton-band/3.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_le_skeleton_band_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/4.jpg */ "./assets/images/le-skeleton-band/4.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_le_skeleton_band_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/5.jpg */ "./assets/images/le-skeleton-band/5.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_le_skeleton_band_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/6.jpg */ "./assets/images/le-skeleton-band/6.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_le_skeleton_band_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/7.jpg */ "./assets/images/le-skeleton-band/7.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_7_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_le_skeleton_band_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/8.jpg */ "./assets/images/le-skeleton-band/8.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_8_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_8_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_le_skeleton_band_9_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/9.jpg */ "./assets/images/le-skeleton-band/9.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_9_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_9_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_le_skeleton_band_10_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/le-skeleton-band/10.jpg */ "./assets/images/le-skeleton-band/10.jpg");
/* harmony import */ var _assets_images_le_skeleton_band_10_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_le_skeleton_band_10_jpg__WEBPACK_IMPORTED_MODULE_10__);











/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Le Skeleton Band",
  href: "le-skeleton-band",
  category: [],
  thumbnail: _assets_images_le_skeleton_band_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_le_skeleton_band_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_le_skeleton_band_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_le_skeleton_band_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_le_skeleton_band_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_le_skeleton_band_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_le_skeleton_band_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_le_skeleton_band_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_images_le_skeleton_band_8_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_images_le_skeleton_band_9_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, _assets_images_le_skeleton_band_10_jpg__WEBPACK_IMPORTED_MODULE_10___default.a],
  videos: [{
    type: "vimeo",
    videoId: "90074919"
  }, {
    type: "vimeo",
    videoId: "35364665"
  }, {
    type: "vimeo",
    videoId: "35368139"
  }],
  description: "- L\u2019ANONAGE -\n\n  An experimental music video by L\xE9o Lef\xE8vre\n  \n  S35mm\n  \n  Arri 435 + handmade pinhole lens\n  \n  Kodak 500T\n  \n  2014\n  \n  \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014-\n  \n  - EMECHEE LA MECHE -\n  \n  A music video by L\xE9o Lef\xE8vre\n  \n  S16mm\n  \n  Arri SR3 + Zeiss HS / Leica macro\n  \n  Kodak & Fuji stock  -  Cross process\n  \n  2012\n  \n  \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n  \n  - SOBRE ET MARIN -\n  \n  A music video by L\xE9o Lef\xE8vre\n  \n  S16mm\n  \n  Arri SR3 + Zeiss HS\n  \n  Fuji 64D\n  \n  2012"
});

/***/ }),

/***/ "./db/projects/les-amoureuses.js":
/*!***************************************!*\
  !*** ./db/projects/les-amoureuses.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_les_amoureuses_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/thumbnail.jpg */ "./assets/images/les-amoureuses/thumbnail.jpg");
/* harmony import */ var _assets_images_les_amoureuses_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_les_amoureuses_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/1.jpg */ "./assets/images/les-amoureuses/1.jpg");
/* harmony import */ var _assets_images_les_amoureuses_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_les_amoureuses_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/2.jpg */ "./assets/images/les-amoureuses/2.jpg");
/* harmony import */ var _assets_images_les_amoureuses_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_les_amoureuses_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/3.jpg */ "./assets/images/les-amoureuses/3.jpg");
/* harmony import */ var _assets_images_les_amoureuses_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_les_amoureuses_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/4.jpg */ "./assets/images/les-amoureuses/4.jpg");
/* harmony import */ var _assets_images_les_amoureuses_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_les_amoureuses_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/5.jpg */ "./assets/images/les-amoureuses/5.jpg");
/* harmony import */ var _assets_images_les_amoureuses_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_les_amoureuses_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/6.jpg */ "./assets/images/les-amoureuses/6.jpg");
/* harmony import */ var _assets_images_les_amoureuses_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_les_amoureuses_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/7.jpg */ "./assets/images/les-amoureuses/7.jpg");
/* harmony import */ var _assets_images_les_amoureuses_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_7_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_les_amoureuses_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/8.jpg */ "./assets/images/les-amoureuses/8.jpg");
/* harmony import */ var _assets_images_les_amoureuses_8_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_8_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_les_amoureuses_9_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/9.jpg */ "./assets/images/les-amoureuses/9.jpg");
/* harmony import */ var _assets_images_les_amoureuses_9_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_9_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_les_amoureuses_10_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/10.jpg */ "./assets/images/les-amoureuses/10.jpg");
/* harmony import */ var _assets_images_les_amoureuses_10_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_10_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_les_amoureuses_11_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/les-amoureuses/11.jpg */ "./assets/images/les-amoureuses/11.jpg");
/* harmony import */ var _assets_images_les_amoureuses_11_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_les_amoureuses_11_jpg__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Les amoureuses",
  href: "les-amoureuses",
  category: [],
  thumbnail: _assets_images_les_amoureuses_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_les_amoureuses_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_les_amoureuses_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_les_amoureuses_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_les_amoureuses_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_les_amoureuses_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_les_amoureuses_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_les_amoureuses_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_images_les_amoureuses_8_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_images_les_amoureuses_9_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, _assets_images_les_amoureuses_10_jpg__WEBPACK_IMPORTED_MODULE_10___default.a, _assets_images_les_amoureuses_11_jpg__WEBPACK_IMPORTED_MODULE_11___default.a],
  videos: [{
    type: "vimeo",
    videoId: "198032798"
  }],
  description: "A short film by Catherine Cosme\n\n  Prod: H\xE9licotronc / La mer \xE0 boire\n  \n  Shot in Bretagne (France)\n  \n  Red Scarlet + Leica Van Diemen\n  \n  30'\n  \n  2014\n  \n  ----\n  \n  Camera assistant: Alexandre Cabanne\n  \n  Gaffer: R\xE9my Barbot\n  \n  KeyGrip: Artur Castro Freire\n  \n  Art direction: Eve Martin\n  \n  Production design: Ga\xEBlle Ruwet\n  \n  Colorist: Olivier Ogneux \n  \n  \u2014\u2014\n  \n  *** Best cinematography award Namur Film Festival 2015 ***\n  \n  * Best actress award at FIFB 2015 *\n  \n  * Nomin\xE9 best short Magritte du Cin\xE9ma 2016 *"
});

/***/ }),

/***/ "./db/projects/light-my-fire.js":
/*!**************************************!*\
  !*** ./db/projects/light-my-fire.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_light_my_fire_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/light-my-fire/thumbnail.jpg */ "./assets/images/light-my-fire/thumbnail.jpg");
/* harmony import */ var _assets_images_light_my_fire_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_light_my_fire_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/light-my-fire/1.jpg */ "./assets/images/light-my-fire/1.jpg");
/* harmony import */ var _assets_images_light_my_fire_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_light_my_fire_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/light-my-fire/2.jpg */ "./assets/images/light-my-fire/2.jpg");
/* harmony import */ var _assets_images_light_my_fire_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_light_my_fire_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/light-my-fire/3.jpg */ "./assets/images/light-my-fire/3.jpg");
/* harmony import */ var _assets_images_light_my_fire_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_light_my_fire_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/light-my-fire/4.jpg */ "./assets/images/light-my-fire/4.jpg");
/* harmony import */ var _assets_images_light_my_fire_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_light_my_fire_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/light-my-fire/5.jpg */ "./assets/images/light-my-fire/5.jpg");
/* harmony import */ var _assets_images_light_my_fire_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_light_my_fire_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/light-my-fire/6.jpg */ "./assets/images/light-my-fire/6.jpg");
/* harmony import */ var _assets_images_light_my_fire_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_light_my_fire_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/light-my-fire/7.jpg */ "./assets/images/light-my-fire/7.jpg");
/* harmony import */ var _assets_images_light_my_fire_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_7_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_light_my_fire_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/light-my-fire/8.jpg */ "./assets/images/light-my-fire/8.jpg");
/* harmony import */ var _assets_images_light_my_fire_8_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_8_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_light_my_fire_9_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/light-my-fire/9.jpg */ "./assets/images/light-my-fire/9.jpg");
/* harmony import */ var _assets_images_light_my_fire_9_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_9_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_light_my_fire_10_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/light-my-fire/10.jpg */ "./assets/images/light-my-fire/10.jpg");
/* harmony import */ var _assets_images_light_my_fire_10_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_10_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_light_my_fire_11_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/light-my-fire/11.jpg */ "./assets/images/light-my-fire/11.jpg");
/* harmony import */ var _assets_images_light_my_fire_11_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_light_my_fire_11_jpg__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Light my fire",
  href: "light-my-fire",
  category: [],
  thumbnail: _assets_images_light_my_fire_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_light_my_fire_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_light_my_fire_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_light_my_fire_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_light_my_fire_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_light_my_fire_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_light_my_fire_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_light_my_fire_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_images_light_my_fire_8_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_images_light_my_fire_9_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, _assets_images_light_my_fire_10_jpg__WEBPACK_IMPORTED_MODULE_10___default.a, _assets_images_light_my_fire_11_jpg__WEBPACK_IMPORTED_MODULE_11___default.a],
  videos: [{
    type: "vimeo",
    videoId: "113279104"
  }],
  description: "A short film directed by Emilie Praneuf\n\n  Shot in Brussels\n  \n  Canon 7D + Kowa lenses\n  \n  15'55''\n  \n  2012\n  \n  ----\n  \n  Camera assistant: Son Doan\n  \n  Colorist: Florian Berutti"
});

/***/ }),

/***/ "./db/projects/lost-exile.js":
/*!***********************************!*\
  !*** ./db/projects/lost-exile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_lost_exile_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/lost-exile/thumbnail.jpg */ "./assets/images/lost-exile/thumbnail.jpg");
/* harmony import */ var _assets_images_lost_exile_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_lost_exile_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/lost-exile/1.jpg */ "./assets/images/lost-exile/1.jpg");
/* harmony import */ var _assets_images_lost_exile_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_lost_exile_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/lost-exile/2.jpg */ "./assets/images/lost-exile/2.jpg");
/* harmony import */ var _assets_images_lost_exile_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_lost_exile_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/lost-exile/3.jpg */ "./assets/images/lost-exile/3.jpg");
/* harmony import */ var _assets_images_lost_exile_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_lost_exile_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/lost-exile/4.jpg */ "./assets/images/lost-exile/4.jpg");
/* harmony import */ var _assets_images_lost_exile_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_lost_exile_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/lost-exile/5.jpg */ "./assets/images/lost-exile/5.jpg");
/* harmony import */ var _assets_images_lost_exile_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_lost_exile_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/lost-exile/6.jpg */ "./assets/images/lost-exile/6.jpg");
/* harmony import */ var _assets_images_lost_exile_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_lost_exile_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/lost-exile/7.jpg */ "./assets/images/lost-exile/7.jpg");
/* harmony import */ var _assets_images_lost_exile_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_7_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_lost_exile_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/lost-exile/8.jpg */ "./assets/images/lost-exile/8.jpg");
/* harmony import */ var _assets_images_lost_exile_8_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_8_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_lost_exile_9_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/lost-exile/9.jpg */ "./assets/images/lost-exile/9.jpg");
/* harmony import */ var _assets_images_lost_exile_9_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_lost_exile_9_jpg__WEBPACK_IMPORTED_MODULE_9__);










/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Lost Exile",
  href: "lost-exile",
  category: [],
  thumbnail: _assets_images_lost_exile_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_lost_exile_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_lost_exile_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_lost_exile_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_lost_exile_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_lost_exile_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_lost_exile_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_lost_exile_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_images_lost_exile_8_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_images_lost_exile_9_jpg__WEBPACK_IMPORTED_MODULE_9___default.a],
  videos: [{
    type: "vimeo",
    videoId: "198256811"
  }],
  description: " A short film by Fisnik Maxhuni\n\n  Prod: Alva Films / Ikone Studio\n  \n  Shot in Kosovo\n  \n  Arri Alexa Plus + Zeiss T2.1\n  \n  29'\n  \n  2016\n  \n  ----\n  \n  Camera assistant: Alexandre Cabanne\n  \n  Gaffer: Astrit Bica\n  \n  Colorist: Loup Brenta\n  \n  ----\n  \n  Best Film - Ouchy Film AWARDS, Lausanne, 2016\n  \n  \n  Prix de la r\xE9gion Auvergne Rh\xF4ne-Alpes - Villeurbanne 2016\n  \n  \n  Best Albanian short film - Tirana International Film Festival, Albania 2016\n  \n  \n  Best Short Film - New Delhi Shorts International Film Festival 2016\n  \n  \n  Mention sp\xE9ciale Concorso nazionale Locarno film festival 2016"
});

/***/ }),

/***/ "./db/projects/manu.js":
/*!*****************************!*\
  !*** ./db/projects/manu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_manu_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/manu/thumbnail.jpg */ "./assets/images/manu/thumbnail.jpg");
/* harmony import */ var _assets_images_manu_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_manu_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_manu_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/manu/1.jpg */ "./assets/images/manu/1.jpg");
/* harmony import */ var _assets_images_manu_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_manu_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_manu_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/manu/2.jpg */ "./assets/images/manu/2.jpg");
/* harmony import */ var _assets_images_manu_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_manu_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_manu_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/manu/3.png */ "./assets/images/manu/3.png");
/* harmony import */ var _assets_images_manu_3_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_manu_3_png__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ({
  title: "manu",
  href: "manu",
  category: [],
  photos: [_assets_images_manu_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_manu_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_manu_3_png__WEBPACK_IMPORTED_MODULE_3___default.a],
  videos: [{
    type: "vimeo",
    videoId: "264683681"
  }],
  thumbnail: _assets_images_manu_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  description: "A documentary by Emmanuelle Bonmariage\n\nCinematography shared with Joachim Philippe & Chris Renson\n\nProd: Clin d'oeil Films\n\nShot in Belgium / France \n\nSony FS7\n\n90'\n\n2017 \n\n\u2014\u2014\n\n* Shortlist Magritte du Cin\xE9ma 2019 * "
});

/***/ }),

/***/ "./db/projects/melanie-de-biasio.js":
/*!******************************************!*\
  !*** ./db/projects/melanie-de-biasio.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_melanie_de_biasio_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/melanie-de-biasio/thumbnail.jpg */ "./assets/images/melanie-de-biasio/thumbnail.jpg");
/* harmony import */ var _assets_images_melanie_de_biasio_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_melanie_de_biasio_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_melanie_de_biasio_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/melanie-de-biasio/1.jpg */ "./assets/images/melanie-de-biasio/1.jpg");
/* harmony import */ var _assets_images_melanie_de_biasio_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_melanie_de_biasio_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_melanie_de_biasio_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/melanie-de-biasio/2.jpg */ "./assets/images/melanie-de-biasio/2.jpg");
/* harmony import */ var _assets_images_melanie_de_biasio_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_melanie_de_biasio_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_melanie_de_biasio_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/melanie-de-biasio/3.jpg */ "./assets/images/melanie-de-biasio/3.jpg");
/* harmony import */ var _assets_images_melanie_de_biasio_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_melanie_de_biasio_3_jpg__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Melanie de Biasio",
  href: "melanie",
  category: [],
  thumbnail: _assets_images_melanie_de_biasio_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_melanie_de_biasio_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_melanie_de_biasio_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_melanie_de_biasio_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a],
  videos: [{
    type: "youtube",
    videoId: "W0We6e7bZfA"
  }],
  description: "\n  - Your Freedom is the End of Me -\n\n  Directed by Yves Kuper & M\xE9lanie de Biasio\n  \n  Produced by Nada Booking\n  \n  Alexa Mini / Arri Alexa XT + Lomo Anamophic lenses / Leica Van Diemen\n  \n  2017\n  \n  ---------------\n  \n  Cam B operator: Camille Langlois\n  \n  Camera Assistant: Elvis Fontaine Garant\n  \n  Gaffer: Cyril Dupont\n  \n  Key Grip: Corentin Geisen\n  \n  Grading: Loup Brenta\n  \n  Thx to BFC Rental / Eye-Lite / KGS / Cobalt"
});

/***/ }),

/***/ "./db/projects/morella.js":
/*!********************************!*\
  !*** ./db/projects/morella.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_morella_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/morella/thumbnail.jpg */ "./assets/images/morella/thumbnail.jpg");
/* harmony import */ var _assets_images_morella_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_morella_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/morella/1.jpg */ "./assets/images/morella/1.jpg");
/* harmony import */ var _assets_images_morella_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_morella_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/morella/2.jpg */ "./assets/images/morella/2.jpg");
/* harmony import */ var _assets_images_morella_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_morella_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/morella/3.jpg */ "./assets/images/morella/3.jpg");
/* harmony import */ var _assets_images_morella_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_morella_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/morella/4.jpg */ "./assets/images/morella/4.jpg");
/* harmony import */ var _assets_images_morella_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_morella_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/morella/5.jpg */ "./assets/images/morella/5.jpg");
/* harmony import */ var _assets_images_morella_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_morella_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/morella/6.jpg */ "./assets/images/morella/6.jpg");
/* harmony import */ var _assets_images_morella_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_morella_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/morella/7.jpg */ "./assets/images/morella/7.jpg");
/* harmony import */ var _assets_images_morella_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_7_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_morella_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/morella/8.jpg */ "./assets/images/morella/8.jpg");
/* harmony import */ var _assets_images_morella_8_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_8_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_morella_9_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/morella/9.jpg */ "./assets/images/morella/9.jpg");
/* harmony import */ var _assets_images_morella_9_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_9_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_morella_10_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/morella/10.jpg */ "./assets/images/morella/10.jpg");
/* harmony import */ var _assets_images_morella_10_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_10_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_morella_11_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/morella/11.jpg */ "./assets/images/morella/11.jpg");
/* harmony import */ var _assets_images_morella_11_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_morella_11_jpg__WEBPACK_IMPORTED_MODULE_11__);












/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Morella",
  href: "morella",
  category: [],
  thumbnail: _assets_images_morella_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_morella_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_morella_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_morella_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_morella_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_morella_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_morella_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_morella_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_images_morella_8_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_images_morella_9_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, _assets_images_morella_10_jpg__WEBPACK_IMPORTED_MODULE_10___default.a, _assets_images_morella_11_jpg__WEBPACK_IMPORTED_MODULE_11___default.a],
  videos: [{
    type: "vimeo",
    videoId: "115814798"
  }],
  description: "A short film by Mathilde Borcard\n\n  Produced by HEAD\n \n  Arri Alexa + Leica Van Diemen.\n \n 16'50\"\n \n 2014\n \n ----\n \n Camera assistant: Camille Langlois\n \n Gaffer: Guillaume Kozakiewiez\n \n Colorist: Florian Berutti"
});

/***/ }),

/***/ "./db/projects/papicha.js":
/*!********************************!*\
  !*** ./db/projects/papicha.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_papicha_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/papicha/thumbnail.jpg */ "./assets/images/papicha/thumbnail.jpg");
/* harmony import */ var _assets_images_papicha_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_papicha_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_papicha_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/papicha/1.jpg */ "./assets/images/papicha/1.jpg");
/* harmony import */ var _assets_images_papicha_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_papicha_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_papicha_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/papicha/2.jpg */ "./assets/images/papicha/2.jpg");
/* harmony import */ var _assets_images_papicha_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_papicha_2_jpg__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Papicha",
  href: "papicha",
  category: [],
  thumbnail: _assets_images_papicha_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_papicha_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_papicha_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a],
  videos: null,
  description: "Directed by Mounia Meddour\n\n  Prod: Scope (BE) / High Sea (FR) / Tayda (ALG) / Ink Connection (FR)\n  \n  Arri Alexa Mini + Leica set\n  \n  Shot in Algeria\n  \n  2018\n  \n  - - -\n  \n  Camera asistant: Elvis Fontaine Garant\n  \n  Gaffer: Thomas Bojan / Samir Rabia\n  \n  Key Grip: Ghanou Dellali\n  \n  Colorist: J\xE9rome Brechet"
});

/***/ }),

/***/ "./db/projects/scarlett-o-hanna.js":
/*!*****************************************!*\
  !*** ./db/projects/scarlett-o-hanna.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_scarlett_o_hanna_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/scarlett-o-hanna/thumbnail.jpg */ "./assets/images/scarlett-o-hanna/thumbnail.jpg");
/* harmony import */ var _assets_images_scarlett_o_hanna_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_scarlett_o_hanna_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Scarlett O'Hanna",
  href: "scarlett-o-hanna",
  category: [],
  thumbnail: _assets_images_scarlett_o_hanna_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: null,
  videos: [{
    type: "vimeo",
    videoId: "78256558"
  }, {
    type: "vimeo",
    videoId: "51248767"
  }],
  description: "- THIEVES -\n\n  A music video by Scarlett O'Hanna & L\xE9o Lef\xE8vre\n  \n  Arri Alexa XT 4:3 / Phantom Miro M320s + Kowa anamorphic\n  \n  2013\n  \n  _______________________________________________\n  \n  \n  - ONE SUNDAY MORNING -\n  \n  a music video by L\xE9o Lef\xE8vre\n  \n  16mm\n  \n  Arri SR3 + Canon zoom lens\n  \n  2012"
});

/***/ }),

/***/ "./db/projects/the-hidden-part.js":
/*!****************************************!*\
  !*** ./db/projects/the-hidden-part.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_the_hidden_part_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/the-hidden-part/thumbnail.jpg */ "./assets/images/the-hidden-part/thumbnail.jpg");
/* harmony import */ var _assets_images_the_hidden_part_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_the_hidden_part_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_the_hidden_part_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/the-hidden-part/1.jpg */ "./assets/images/the-hidden-part/1.jpg");
/* harmony import */ var _assets_images_the_hidden_part_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_the_hidden_part_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_the_hidden_part_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/the-hidden-part/2.jpg */ "./assets/images/the-hidden-part/2.jpg");
/* harmony import */ var _assets_images_the_hidden_part_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_the_hidden_part_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_the_hidden_part_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/the-hidden-part/3.jpg */ "./assets/images/the-hidden-part/3.jpg");
/* harmony import */ var _assets_images_the_hidden_part_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_the_hidden_part_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_the_hidden_part_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/the-hidden-part/4.jpg */ "./assets/images/the-hidden-part/4.jpg");
/* harmony import */ var _assets_images_the_hidden_part_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_the_hidden_part_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_the_hidden_part_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/the-hidden-part/5.jpg */ "./assets/images/the-hidden-part/5.jpg");
/* harmony import */ var _assets_images_the_hidden_part_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_the_hidden_part_5_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_the_hidden_part_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/the-hidden-part/6.jpg */ "./assets/images/the-hidden-part/6.jpg");
/* harmony import */ var _assets_images_the_hidden_part_6_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_the_hidden_part_6_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_the_hidden_part_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/the-hidden-part/7.jpg */ "./assets/images/the-hidden-part/7.jpg");
/* harmony import */ var _assets_images_the_hidden_part_7_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_the_hidden_part_7_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_the_hidden_part_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/the-hidden-part/8.jpg */ "./assets/images/the-hidden-part/8.jpg");
/* harmony import */ var _assets_images_the_hidden_part_8_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_the_hidden_part_8_jpg__WEBPACK_IMPORTED_MODULE_8__);









/* harmony default export */ __webpack_exports__["default"] = ({
  title: "The hidden part",
  href: "the-hidden-part",
  category: [],
  thumbnail: _assets_images_the_hidden_part_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_the_hidden_part_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_the_hidden_part_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_the_hidden_part_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_the_hidden_part_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_the_hidden_part_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_images_the_hidden_part_6_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_images_the_hidden_part_7_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_images_the_hidden_part_8_jpg__WEBPACK_IMPORTED_MODULE_8___default.a],
  videos: [{
    type: "vimeo",
    videoId: "198251663"
  }],
  description: "A short film by Monique Marnette & Caroline D'Hondt\n\n  Prod: Man's Films\n  \n  Shot in Iceland\n  \n  Arri Amira + Leitz Samcin\xE9\n  \n  20'\n  \n  2014\n  \n  ----\n  \n  Camera assistant: Joachim Philippe\n  \n  KeyGrip: Corentin Geisen\n  \n  Colorist: Olivier Ogneux\n  \n  \u2014\u2014\n  \n  **** Best short film award at Namur Film Festival 2015 (FIFF) ***\n  \n  *  Shortlist Magritte du cin\xE9ma 2016 *"
});

/***/ }),

/***/ "./db/projects/valet-noir.js":
/*!***********************************!*\
  !*** ./db/projects/valet-noir.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_valet_noir_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/valet-noir/thumbnail.jpg */ "./assets/images/valet-noir/thumbnail.jpg");
/* harmony import */ var _assets_images_valet_noir_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_valet_noir_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_valet_noir_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/valet-noir/1.jpg */ "./assets/images/valet-noir/1.jpg");
/* harmony import */ var _assets_images_valet_noir_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_valet_noir_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_valet_noir_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/valet-noir/2.jpg */ "./assets/images/valet-noir/2.jpg");
/* harmony import */ var _assets_images_valet_noir_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_valet_noir_2_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_valet_noir_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/valet-noir/3.jpg */ "./assets/images/valet-noir/3.jpg");
/* harmony import */ var _assets_images_valet_noir_3_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_valet_noir_3_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_valet_noir_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/valet-noir/4.jpg */ "./assets/images/valet-noir/4.jpg");
/* harmony import */ var _assets_images_valet_noir_4_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_valet_noir_4_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_valet_noir_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/valet-noir/5.jpg */ "./assets/images/valet-noir/5.jpg");
/* harmony import */ var _assets_images_valet_noir_5_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_valet_noir_5_jpg__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Valet Noir",
  href: "valet-noir",
  category: [],
  thumbnail: _assets_images_valet_noir_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_valet_noir_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _assets_images_valet_noir_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_images_valet_noir_3_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_images_valet_noir_4_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_images_valet_noir_5_jpg__WEBPACK_IMPORTED_MODULE_5___default.a],
  videos: null,
  description: "A short film by Lora Mure-Ravaud\n\n  Prod: ALVA FILMS\n  \n  Shot in Switzerland / France\n  \n  Arri Alexa Mini + Ultraprimes\n  \n  22'\n  \n  2017\n  \n  ----\n  \n  Camera assistant: Guillaume Brandt\n  \n  Gaffer: Antonin Suppes\n  \n  Colorist: Loup Brenta \n  \n  \u2014\n  \n  Awards:\n  \n  1st Prize Upcoming talent at Soleure festival 2018\n  \n  Best Swiss Short award at the Kurzfilmtage Winterthur in 2017"
});

/***/ }),

/***/ "./db/projects/woodie-smalls.js":
/*!**************************************!*\
  !*** ./db/projects/woodie-smalls.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_woodie_smalls_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/woodie-smalls/thumbnail.jpg */ "./assets/images/woodie-smalls/thumbnail.jpg");
/* harmony import */ var _assets_images_woodie_smalls_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_woodie_smalls_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_woodie_smalls_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/woodie-smalls/1.jpg */ "./assets/images/woodie-smalls/1.jpg");
/* harmony import */ var _assets_images_woodie_smalls_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_woodie_smalls_1_jpg__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Woodie Smalls",
  href: "woodie-smalls",
  category: [],
  thumbnail: _assets_images_woodie_smalls_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  photos: [_assets_images_woodie_smalls_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a],
  videos: [{
    type: "vimeo",
    videoId: "173619922"
  }],
  description: "- Planet Shrooms -\n\n  Directed by Alice Khol\n  \n  Cinematography: L\xE9o Lef\xE8vre & Son Doan\n  \n  Shot on Arri Alexa Mini / Sony A7sII + Leica Van Diemen & Cooke Zoom\n  \n  2016\n  \n  ----\n  \n  Camera assistant: Alexandre Cabanne\n  \n  Ronin operator: Geoffroy Minne\n  \n  Grip & electric: J\xE9r\xE9my Bourgeois et Julien Ramirez\n  \n  Colorist: Paul Millot"
});

/***/ })

})
//# sourceMappingURL=index.js.dd22211744d8cc650fca.hot-update.js.map