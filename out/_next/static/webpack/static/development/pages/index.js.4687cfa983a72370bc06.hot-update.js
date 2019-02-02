webpackHotUpdate("static/development/pages/index.js",{

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: media, groupBy2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy2", function() { return groupBy2; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _style_sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/sizes */ "./style/sizes.js");


var media = Object.keys(_style_sizes__WEBPACK_IMPORTED_MODULE_1__["default"]).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (min-width:", "em){", "}"], _style_sizes__WEBPACK_IMPORTED_MODULE_1__["default"][label] / 16, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});
var groupBy2 = function groupBy2(arr) {
  var formatted = [];

  while (arr.length > 0) {
    formatted.push(arr.splice(0, 2));
  }

  return formatted;
};

/***/ })

})
//# sourceMappingURL=index.js.4687cfa983a72370bc06.hot-update.js.map