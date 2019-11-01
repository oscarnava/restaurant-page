/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return populateAboutPage; });\n/* harmony import */ var _updateContents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateContents */ \"./src/updateContents.js\");\n\n\nfunction populateAboutPage() {\n  const title = document.createElement('h1');\n  title.innerText = 'Restaurant Malola';\n\n  const subtitle = document.createElement('h2');\n  subtitle.innerText = 'The best food in town! Sopa tarasca, Corundas, Enchiladas morelianas o placeras, Morisqueta, Carnitas, Aporreadillo, Uchepos, Chongos zamoranos, Ate, Nieve de pasta and much more...';\n\n  Object(_updateContents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([title, subtitle]);\n}\n\n\n//# sourceURL=webpack:///./src/about-page.js?");

/***/ }),

/***/ "./src/clearContents.js":
/*!******************************!*\
  !*** ./src/clearContents.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clearContents; });\nfunction clearContents(container) {\n  while (container.firstChild) {\n    container.removeChild(container.firstChild);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/clearContents.js?");

/***/ }),

/***/ "./src/fadein.js":
/*!***********************!*\
  !*** ./src/fadein.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fadeIn; });\nfunction fadeIn(element, step = 100) {\n  let opacity = 0.0;\n  (function f() {\n    opacity += 0.10001;\n    element.style.opacity = opacity.toFixed(1);\n    if (opacity < 1.0) {\n      setTimeout(f, step);\n    }\n  }());\n}\n\n\n//# sourceURL=webpack:///./src/fadein.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fadein__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fadein */ \"./src/fadein.js\");\n/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page */ \"./src/about-page.js\");\n\n\n\nObject(_about_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_fadein__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.getElementsByTagName('body')[0], 50);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/updateContents.js":
/*!*******************************!*\
  !*** ./src/updateContents.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clearContents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContents */ \"./src/clearContents.js\");\n\n\nconst updateContents = (() => {\n  const container = document.getElementById('content');\n  return (contents) => {\n    const fragment = document.createDocumentFragment();\n    contents.forEach((element) => fragment.appendChild(element));\n    Object(_clearContents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container);\n    container.appendChild(fragment);\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (updateContents);\n\n\n//# sourceURL=webpack:///./src/updateContents.js?");

/***/ })

/******/ });