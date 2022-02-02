/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! noodle-bkg.jpg */ \"./src/noodle-bkg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --primary-dark: #333;\\n    --background-grey: #ededed;\\n    --primary-red: #8b0000;\\n}\\n\\nbody {\\n    font-family: Roboto, sans-serif;\\n    height: auto;\\n    /* width: 100vw; */\\n    margin: 0px;\\n}\\n\\n#content::after {\\n    content: \\\"\\\";\\n    position: absolute;\\n    top: 0; \\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    z-index: -1;\\n    opacity: .5; \\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n#content {\\n    display: flex;\\n    flex-direction: column;\\n    min-height: 100vh;\\n    margin: 0px;\\n    position: relative;\\n}\\n\\n#header {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n\\n    height: 50px;\\n    background-color: var(--primary-dark);\\n}\\n\\n#navbar {\\n    display: flex;\\n    gap: 30px;\\n    color: var(--background-grey);  \\n}\\n\\n.link {\\n    cursor: pointer;\\n    font-weight: bold;\\n    letter-spacing: 5px;\\n\\n    display: flex;\\n    justify-content: center;\\n    align-items: center; \\n\\n    height: 40px;\\n    width: 140px;\\n\\n    border-radius: 20px;\\n    transition: all 250ms ease;  \\n}\\n\\n.link:hover {\\n    background-color: var(--background-grey);\\n    color: var(--primary-dark);\\n}\\n\\n#main {\\n    display: flex;\\n    justify-content: center;\\n    padding-bottom: 20px;\\n    margin-bottom: 60px;\\n}\\n\\n.section-container {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    \\n    width: 100vw;\\n    height: 500px;\\n\\n    position: relative;\\n    top: 100px;\\n}\\n\\n#about-container {\\n    text-align: center;\\n\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n#logo {\\n    width: 250px;\\n    height: 250px;\\n}\\n\\n#rest-title {\\n    font-size: 40px;\\n    letter-spacing: 4px;\\n    margin-bottom: 40px;\\n}\\n\\n#rest-description {\\n    font-size: 18px;\\n    height: 100px;\\n    width: 600px;\\n    line-height: 1.6;\\n\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n\\n    color: var(--primary-dark);\\n    text-shadow: 0 0 1px var(--primary-dark);\\n}\\n\\n.menu {\\n    display: grid;\\n    grid-template-columns: repeat(3, 400px);\\n    grid-template-rows: repeat(2, 400px);\\n    justify-items: center;\\n    align-items: center;\\n    gap: 10px;\\n\\n    margin-top: 50px;\\n}\\n\\n.dish {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 10px;\\n\\n    width: 400px;\\n    height: 400px;\\n    border-radius: 50%;\\n\\n    position: relative;\\n    transition: all 0;\\n}\\n\\n.dish:hover {\\n    background: var(--primary-dark);\\n}\\n\\n.dish-picture {\\n    width: 400px;\\n    height: 400px;\\n    \\n    position: relative;\\n    top: 0px;\\n    border-radius: 50%;\\n\\n    transition: all 0;\\n}\\n\\n.dish-picture:hover {\\n    opacity: 25%;\\n}\\n\\n.dish-name {\\n    position: absolute;\\n    top: 50px;\\n    \\n    font-weight: bold;\\n    font-size: 20px;\\n    color: var(--background-grey);\\n    pointer-events: none;\\n\\n    opacity: 0;\\n}\\n\\n.dish:hover .dish-name {\\n    opacity: 1;\\n}\\n\\n.dish-description {\\n    position: absolute;\\n    top: 160px;\\n\\n    inline-size: 300px;\\n    overflow-wrap: break-word;\\n    text-align: center;\\n    line-height: 1.6;\\n    color: var(--background-grey);\\n    pointer-events: none;\\n\\n    opacity: 0;\\n}\\n\\n.dish:hover .dish-description {\\n    opacity: 1;\\n}\\n\\n.dish-cost {\\n    position: absolute; \\n    bottom: 50px;\\n\\n    font-size: 20px;\\n    text-align: center;\\n    color: var(--background-grey);\\n    pointer-events: none;\\n\\n    opacity: 0;\\n}\\n\\n.dish:hover .dish-cost {\\n    opacity: 1;\\n}\\n\\n/* Contact Page  */\\n#contact-container {\\n    position: fixed;\\n    left: 50%;\\n    top: 50%;\\n    transform: translateX(-50%) translateY(-50%);\\n\\n    width: 500px;\\n    height: 500px;\\n\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n\\n    /* gap: 24px; */\\n}\\n\\n.contact-subgroup {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.contact-header {\\n    font-weight: bold;\\n    letter-spacing: 5px;\\n    font-size: 24px;\\n\\n    background-color: var(--primary-dark);\\n    width: 500px;\\n    height: 36px;\\n    color: var(--background-grey);\\n\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.contact-info {\\n    margin: 0px;\\n    font-size: 20px;\\n}\\n\\n#social-subgroup {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n#logo-group {\\n    display: flex;\\n    justify-content: center;\\n    gap: 24px;\\n}\\n\\n.social {\\n    color: var(--primary-dark);\\n    font-size: 124px;\\n    cursor: pointer;\\n    transition: all 250ms ease;\\n}\\n\\n.fa-instagram:hover {\\n    color: #8134AF;\\n    animation: shake 0.5s;\\n    animation-iteration-count: infinite;\\n}\\n\\n.fa-facebook-square:hover {\\n    color: #3B5998;\\n    animation: shake 0.5s;\\n    animation-iteration-count: infinite;\\n}\\n\\n.fa-twitter-square:hover {\\n    color: #1DA1F2;\\n    animation: shake 0.5s;\\n    animation-iteration-count: infinite;\\n}\\n\\n@keyframes shake {\\n    0% { transform: rotate(0deg); }\\n    10% { transform: rotate(4deg); }\\n    20% { transform: rotate(0deg); }\\n    30% { transform: rotate(-4deg); }\\n    40% { transform: rotate(0deg); }\\n    50% { transform: rotate(4deg); }\\n    60% { transform: rotate(0deg); }\\n    70% { transform: rotate(-4deg); }\\n    80% { transform: rotate(0deg); }\\n    90% { transform: rotate(4deg); }\\n    100% { transform: rotate(0deg); }\\n}\\n\\n/* Footer */\\n#footer {\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 40px;\\n    padding-top: 8px;\\n    padding-bottom: 8px;\\n\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 40px;\\n    gap: 10px;\\n}\\n\\n.fa-github {\\n    color: var(--primary-dark);\\n    transition: 0.5s ease;\\n    font-size: 32px;\\n}\\n\\n.fa-github:hover {\\n    transform: scale(1.2) rotate(360deg);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_header\": () => (/* binding */ create_header),\n/* harmony export */   \"create_main\": () => (/* binding */ create_main),\n/* harmony export */   \"create_about\": () => (/* binding */ create_about),\n/* harmony export */   \"create_menu\": () => (/* binding */ create_menu),\n/* harmony export */   \"create_contact\": () => (/* binding */ create_contact),\n/* harmony export */   \"create_footer\": () => (/* binding */ create_footer)\n/* harmony export */ });\n/* harmony import */ var _ramen_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ramen.png */ \"./src/ramen.png\");\n/* harmony import */ var _taiwan_noodle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taiwan-noodle.png */ \"./src/taiwan-noodle.png\");\n/* harmony import */ var _rice_noodle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rice-noodle.png */ \"./src/rice-noodle.png\");\n/* harmony import */ var _pho_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pho.png */ \"./src/pho.png\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _tempura_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tempura.png */ \"./src/tempura.png\");\n/* harmony import */ var _korean_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./korean.png */ \"./src/korean.png\");\n\n\n\n\n\n\n\n\n// const dish = (name) => {\n//     this.name = name;\n//     const price;\n//     const description;\n\n//     return {name, price, description}\n// }\n\nfunction create_navbar() {\n    const nav = document.createElement('nav');\n    nav.setAttribute('id', 'navbar');\n\n    const about = document.createElement('a');\n    about.classList.add('link');\n    about.setAttribute('id', 'link-about');\n    about.innerHTML = 'ABOUT';\n    nav.appendChild(about);   \n\n    const menu = document.createElement('a');\n    menu.classList.add('link')\n    menu.setAttribute('id', 'link-menu');\n    menu.innerHTML = 'MENU';\n    nav.appendChild(menu);\n\n    const contact = document.createElement('a');\n    contact.classList.add('link')\n    contact.setAttribute('id', 'link-contact');\n    contact.innerHTML = 'CONTACT';\n    nav.appendChild(contact);\n\n    return nav;\n}\n\nfunction create_header() {\n    const content = document.getElementById('content');\n\n    // Create header div\n    const header = document.createElement('div');\n    header.setAttribute('id', 'header');\n\n    // // Add title\n    // const title = document.createElement('h1');\n    // title.innerHTML = 'Oodles of Noodles';\n    // title.classList.add('title');\n    // header.appendChild(title);\n\n    // Add nav bar\n    const navbar = create_navbar();\n    header.appendChild(navbar);\n\n    content.appendChild(header);\n    return;\n}\n\n// About Section\nfunction create_about() {\n\n    // Get main and clear existing content\n    const main = document.getElementById('main');\n    main.innerHTML = '';\n\n    // section-container\n    const body = document.createElement('div');\n    body.classList.add('section-container');\n    \n    // about-container\n    const desc = document.createElement('div');\n    desc.setAttribute('id', 'about-container');\n\n    // Logo\n    const logo = new Image();\n    logo.src = _logo_png__WEBPACK_IMPORTED_MODULE_4__;\n    logo.setAttribute('id', 'logo');\n    desc.appendChild(logo);\n\n    // Restaurant name\n    const title = document.createElement('h1');\n    title.setAttribute('id', 'rest-title');\n    title.innerHTML = \"OODLES of NOODLES\";\n    desc.appendChild(title);\n\n    // Restaurant description \n    const para = document.createElement('p');\n    para.setAttribute('id', 'rest-description');\n    para.innerHTML = \"Opened in 2016, Oodles of Noodles was born as a means to serve the wide variety of noodle dishes the asian community has to offer. From ramen to rice noodles, our dishes aim to create a sense of comfort and content to those who enjoy these simple carbs.\";\n    \n    desc.appendChild(para);\n    body.appendChild(desc);\n    main.appendChild(body);\n}\n\nconst create_dish = (name, price, description) => {\n    const create_element = (picture) => {\n        const dish = document.createElement('div');\n        dish.classList.add('dish');\n\n        // Add image\n        const img = new Image();\n        img.src = picture;\n        img.classList.add('dish-picture');\n        dish.appendChild(img);\n\n        // Add dish name\n        const dish_name = document.createElement('div');\n        dish_name.classList.add('dish-name');\n        dish_name.innerHTML = name;\n        dish.appendChild(dish_name);\n\n        // Add description\n        const desc = document.createElement('div');\n        desc.classList.add('dish-description');\n        desc.innerHTML = description;\n        dish.appendChild(desc);\n\n        // Add price\n        const cost = document.createElement('div');\n        cost.classList.add('dish-cost');\n        cost.innerHTML = price;\n        dish.appendChild(cost);\n\n        return dish;\n    }\n\n    return {name, price, description, create_element};\n}\n\nfunction create_menu() {\n\n    // Get main and clear existing section\n    const main = document.getElementById('main');\n    main.innerHTML = '';\n\n    // Menu container \n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    // Shio Ramen\n    const ramen_desc = 'Pork chasu, soft-boiled egg, and ramen in a light clear broth with a side of green onions, bamboo, and seaweed';\n    const ramen = create_dish('Shio Ramen', 12, ramen_desc);\n    const ramen_element = ramen.create_element(_ramen_png__WEBPACK_IMPORTED_MODULE_0__);\n    menu.appendChild(ramen_element);\n\n    // Taiwanese Beef Noodle\n    const beef_noodle_desc = 'Braised beef served with a rich and slightly spicy broth with vermicilli noodles'\n    const beef_noodle = create_dish('Taiwanese Beef Noodle', 12, beef_noodle_desc);\n    const beef_element = beef_noodle.create_element(_taiwan_noodle_png__WEBPACK_IMPORTED_MODULE_1__);\n    menu.appendChild(beef_element);\n\n    // Spicy Rice Noodle \n    const spicy_noodle_desc = 'Spicy beef broth served with rice noodle, fish cake, beansprout'\n    const spicy_noodle = create_dish('Spicy Rice Noodle', 10, spicy_noodle_desc);\n    const spicy_noodle_element = spicy_noodle.create_element(_rice_noodle_png__WEBPACK_IMPORTED_MODULE_2__);\n    menu.appendChild(spicy_noodle_element);\n\n    // Pho\n    const pho_desc = 'Beef flank in a rich beef broth served with thin rice noodles'\n    const pho = create_dish('Beef Pho', 12, pho_desc);\n    const pho_element = pho.create_element(_pho_png__WEBPACK_IMPORTED_MODULE_3__);\n    menu.appendChild(pho_element);\n\n    // Tempura Udon\n    const udon_desc = 'Shrimp tempura and chewy wheat noodles in a unami-rich dashi soup stock'\n    const udon = create_dish('Tempura Udon', 11, udon_desc);\n    const udon_element = udon.create_element(_tempura_png__WEBPACK_IMPORTED_MODULE_5__);\n    menu.appendChild(udon_element);\n\n    // Korean Spicy Beef\n    const korean_desc = 'Korean spicy beef, green scalions, egg, mushroom and bok-choy vegetables with glass noodles'\n    const korean = create_dish('Korean Spicy Beef', 14, korean_desc);\n    const korean_element = korean.create_element(_korean_png__WEBPACK_IMPORTED_MODULE_6__);\n    menu.appendChild(korean_element);\n\n    main.appendChild(menu);\n}\n\nfunction create_contact() {\n    // Get main and clear existing section\n    const main = document.getElementById('main');\n    main.innerHTML = '';\n\n    const contact = document.createElement('div');\n    contact.setAttribute('id', 'contact-container');\n\n    // Address\n    const address_container = document.createElement('div');\n    address_container.classList.add('contact-subgroup')\n    \n    const address_header = document.createElement('p');\n    address_header.classList.add('contact-header');\n    address_header.innerHTML = 'ADDRESS';\n    address_container.appendChild(address_header);\n\n    const location = document.createElement('p');\n    location.classList.add('contact-info');\n    location.innerHTML = '1234 - Fake Street, Psuedo State, California';\n    address_container.appendChild(location);\n\n    contact.appendChild(address_container);\n\n    // Phone Number\n    const number_container = document.createElement('div');\n    number_container.classList.add('contact-subgroup');\n    \n    const number_header = document.createElement('p');\n    number_header.classList.add('contact-header');\n    number_header.innerHTML = 'PHONE';\n    number_container.appendChild(number_header);\n\n    const number = document.createElement('p');\n    number.classList.add('contact-info');\n    number.innerHTML = '123-456-7890';\n    number_container.appendChild(number);\n\n    contact.appendChild(number_container);\n\n    // Social Media\n    const social_container = document.createElement('div');\n    social_container.setAttribute('id', 'social-subgroup');\n\n    const social_header = document.createElement('p');\n    social_header.classList.add('contact-header');\n    social_header.innerHTML = 'SOCIAL';\n    social_container.appendChild(social_header);\n\n    const social_logos = document.createElement('div');\n    social_logos.setAttribute('id', 'logo-group');\n\n    // IG\n    const instagram = document.createElement('i');\n    instagram.classList.add('fab', 'fa-instagram', 'social');\n    social_logos.appendChild(instagram);\n\n    // Facebook\n    const facebook = document.createElement('i');\n    facebook.classList.add('fab', 'fa-facebook-square', 'social');\n    social_logos.appendChild(facebook);\n\n    // Twitter\n    const twitter = document.createElement('i');\n    twitter.classList.add('fab', 'fa-twitter-square', 'social');\n    social_logos.appendChild(twitter);\n    social_container.appendChild(social_logos);\n\n    contact.appendChild(social_container);    \n    main.appendChild(contact);\n}\n\nfunction create_main() {\n    const content = document.getElementById('content');\n\n    // Create main div\n    const main = document.createElement('div');\n    main.setAttribute('id', 'main');\n\n    content.appendChild(main);\n    return;    \n}\n\nfunction create_footer() {\n    const content = document.getElementById('content');\n\n    const footer = document.createElement('div');\n    footer.setAttribute('id', 'footer');\n\n    // Copyright\n    const copyright = document.createElement('div');\n    copyright.innerHTML = 'Copyright © 2021 Gavin Lim';\n\n    // Github\n    const github = document.createElement('div');\n    github.classList.add('github');\n\n    const href = document.createElement('a');\n    href.href = 'https://github.com/gavinslim';\n    href.target = '_blank';\n\n    const fab = document.createElement('i');\n    fab.classList.add('fab', 'fa-github');\n    href.appendChild(fab);\n    github.appendChild(href);\n\n    footer.appendChild(copyright);\n    footer.appendChild(github);\n    content.appendChild(footer);\n    return;    \n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.create_header)();\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.create_main)();\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.create_footer)();\n\nconst about = document.getElementById('link-about');\nabout.addEventListener('click', _homepage_js__WEBPACK_IMPORTED_MODULE_0__.create_about);\nabout.click();\n\nconst menu = document.getElementById('link-menu');\nmenu.addEventListener('click', _homepage_js__WEBPACK_IMPORTED_MODULE_0__.create_menu);\n\nconst contact = document.getElementById('link-contact');\ncontact.addEventListener('click', _homepage_js__WEBPACK_IMPORTED_MODULE_0__.create_contact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/korean.png":
/*!************************!*\
  !*** ./src/korean.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f422d87f9684789946e7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/korean.png?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5f30a1f480827ebc198.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/logo.png?");

/***/ }),

/***/ "./src/noodle-bkg.jpg":
/*!****************************!*\
  !*** ./src/noodle-bkg.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ea8291794ac66103568.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/noodle-bkg.jpg?");

/***/ }),

/***/ "./src/pho.png":
/*!*********************!*\
  !*** ./src/pho.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"592ba7e2adfe700248e7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pho.png?");

/***/ }),

/***/ "./src/ramen.png":
/*!***********************!*\
  !*** ./src/ramen.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"feb7952158c607bfd465.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/ramen.png?");

/***/ }),

/***/ "./src/rice-noodle.png":
/*!*****************************!*\
  !*** ./src/rice-noodle.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c422cb9132d7b8cb7b9e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/rice-noodle.png?");

/***/ }),

/***/ "./src/taiwan-noodle.png":
/*!*******************************!*\
  !*** ./src/taiwan-noodle.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa3b0a443facc724b27e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/taiwan-noodle.png?");

/***/ }),

/***/ "./src/tempura.png":
/*!*************************!*\
  !*** ./src/tempura.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb644aebcea66f80e8da.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/tempura.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;