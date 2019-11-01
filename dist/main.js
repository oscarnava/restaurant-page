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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return populateAboutPage; });\n/* harmony import */ var _updateContents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateContents */ \"./src/updateContents.js\");\n\n\nlet contents = null;\n\nfunction createContents() {\n  const aboutCtnr = document.createElement('div');\n  aboutCtnr.id = 'about-container';\n\n  // const title = document.createElement('h1');\n  // title.innerText = \"Malola's Restaurant\";\n\n  const subtitle = document.createElement('h2');\n  subtitle.innerText = 'The best food in town! Sopa tarasca, Corundas, Enchiladas morelianas o placeras, Morisqueta, Carnitas, Aporreadillo, Uchepos, Chongos zamoranos, Ate, Nieve de pasta and much more...';\n\n  // aboutCtnr.appendChild(title);\n  aboutCtnr.appendChild(subtitle);\n\n  console.log('About page contents created');\n\n  return [aboutCtnr];\n}\n\nfunction populateAboutPage() {\n  contents = contents || createContents();\n  Object(_updateContents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contents);\n}\n\n\n//# sourceURL=webpack:///./src/about-page.js?");

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

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return populateContactPage; });\n/* harmony import */ var _updateContents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateContents */ \"./src/updateContents.js\");\n\n\nconst imagePath = 'img';\nlet contents = null;\n\nfunction createContents() {\n  const contactCtnr = document.createElement('address');\n  contactCtnr.id = 'contact-container';\n\n  const imgElem = document.createElement('img');\n  imgElem.src = `${imagePath}/contact.jpg`;\n\n  const header = document.createElement('h1');\n  header.innerText = 'Contact';\n\n  const email = document.createElement('div');\n  email.className = 'email';\n  email.innerHTML = '<a href=\"mailto:contact@malolarestaurant.com\">contact@malolarestaurant.com</a>';\n\n  const cellular = document.createElement('div');\n  cellular.className = 'cell';\n  cellular.innerHTML = 'Cell phone: <a href=\"tel:4433005440\">555 555 5555</a>';\n\n  const whats = document.createElement('div');\n  whats.className = 'whats';\n  whats.innerHTML = 'whatsapp: <a href=\"https://api.whatsapp.com/send?phone=+525555555555\">+52 555 555 5555</a>';\n\n  contactCtnr.appendChild(imgElem);\n  contactCtnr.appendChild(header);\n  contactCtnr.appendChild(email);\n  contactCtnr.appendChild(cellular);\n  contactCtnr.appendChild(whats);\n\n  console.log('Contact page contents created');\n\n  return [contactCtnr];\n}\n\nfunction populateContactPage() {\n  contents = contents || createContents();\n  Object(_updateContents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contents);\n}\n\n\n//# sourceURL=webpack:///./src/contact-page.js?");

/***/ }),

/***/ "./src/dishes-page.js":
/*!****************************!*\
  !*** ./src/dishes-page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return populateDishesPage; });\n/* harmony import */ var _updateContents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateContents */ \"./src/updateContents.js\");\n\n\nconst imagePath = 'img';\nconst dishesInfo = [\n  {\n    img: 'sopa-tarasca.jpg',\n    head: 'Sopa tarasca',\n    body: 'Hecha a base de frijoles molidos, puré de jitomate y chile pasilla seco. Usualmente se sirve con tiritas de tortilla fritas, queso cotija, crema, epazote y chiles serranos picados.',\n  },\n  {\n    img: 'corundas.jpg',\n    head: 'Corundas',\n    body: 'Parecidas a los tamales pero de forma triangular, se sirven envueltas en hojas de maíz acompañadas con queso, crema y rajas. Cuenta la leyenda que eran el platillo favorito del emperador purépecha Caltzontzin, quien las comía en ocasiones especiales, y por esa razón también se les llama “panecillos del palacio”.',\n  },\n  {\n    img: 'enchiladas.jpg',\n    head: 'Enchiladas morelianas o placeras',\n    body: 'Lo que distingue a estas enchiladas es que la tortilla primero se pasa por la salsa (de chile guajillo) y luego se fríe – al contrario que en otras recetas en donde primero se fríe la tortilla y luego se baña en salsa. Las enchiladas morelianas se rellenan de papas y zanahorias y van acompañadas de pollo placero.',\n  },\n  {\n    img: 'morisqueta.jpg',\n    head: 'Morisqueta',\n    body: 'Platillo originario de Apatzingan, consiste en arroz blanco de grano corto cocido con frijoles de la olla y salsa guisada con queso o carne. En una de sus versiones más populares, va acompañada de costillas de cerdo.',\n  },\n  {\n    img: 'carnitas.jpg',\n    head: 'Carnitas estilo Michoacán:',\n    body: 'Es imposible hablar de la cocina michoacana sin mencionar las célebres carnitas de cerdo, especialmente famosas en el municipio de Quiroga. Tradicionalmente se preparan en grandes ollas de cobre (elaboradas en Santa Clara del Cobre) donde distintas partes del cerdo se fríen en manteca del mismo animal. Se sirven en tacos, con tortillas de maíz, cilantro, cebolla, salsas y jugo de limón.',\n  },\n  {\n    img: 'aporreadillo.jpg',\n    head: 'Aporreadillo',\n    body: 'Un platillo a base de cecina de res y huevo revuelto cubierto de salsa verde o roja, o en ocasiones de ambas salsas. Se dice que el aporreadillo fue bautizado con ese nombre porque la carne, después de ser secada al sol y salada, se aporreaba hasta que quedara desmenuzada.',\n  },\n  {\n    img: 'uchepos.jpg',\n    head: 'Uchepos',\n    body: 'Tamales de maíz tierno (elote) molido. El sabor de los uchepos es algo dulce, pero en ocasiones se sirven con salsa verde o roja, con queso cotija y crema. También pueden servirse como postre con leche condensada.',\n  },\n  {\n    img: 'chongos.jpg',\n    head: 'Chongos zamoranos',\n    body: 'Como su nombre lo indica, este postre es originario de la ciudad de Zamora y la receta se le atribuye a las monjas de los conventos de la época virreinal. Se trata de leche cuajada con azúcar y canela.',\n  },\n  {\n    img: 'ate.jpg',\n    head: 'Ate',\n    body: 'El ate moreliano es famoso en todo el país. Este platillo es originario de España y fue importado a Morelia por las monjas dominicas. El ate se elabora extrayendo la pulpa de cualquier fruto (usualmente membrillo o guayaba) y luego cociéndolo con azúcar en una cazuela de cobre. Se suele acompañar con queso.',\n  },\n  {\n    img: 'nieve-de-pasta.jpg',\n    head: 'Nieve de pasta',\n    body: 'Es originaria de Pátzcuaro, a donde viajan los habitantes de Morelia y los alrededores sólo por la nieve. Se distingue por su consistencia cremosa y se elabora con canela, vainilla, almendras y miel de maíz.',\n  },\n];\n\nlet contents = null;\n\nfunction createContents() {\n  const dishCtnr = document.createElement('div');\n  dishCtnr.id = 'dish-container';\n\n  dishesInfo.forEach(({ img, head, body }) => {\n    const dish = document.createElement('div');\n    dish.className = 'dish';\n    dishCtnr.appendChild(dish);\n\n    const imgElem = document.createElement('img');\n    imgElem.src = `${imagePath}/${img}`;\n    dish.appendChild(imgElem);\n\n    const headElem = document.createElement('h3');\n    headElem.innerText = head;\n    dish.appendChild(headElem);\n\n    const bodyElem = document.createElement('p');\n    bodyElem.innerText = body;\n    dish.appendChild(bodyElem);\n  });\n\n  console.log('Dishes page contents created');\n\n  return [dishCtnr];\n}\n\nfunction populateDishesPage() {\n  contents = contents || createContents();\n  Object(_updateContents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contents);\n}\n\n\n//# sourceURL=webpack:///./src/dishes-page.js?");

/***/ }),

/***/ "./src/fader.js":
/*!**********************!*\
  !*** ./src/fader.js ***!
  \**********************/
/*! exports provided: fadeIn, fadeOut, fadeSwap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeIn\", function() { return fadeIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeOut\", function() { return fadeOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeSwap\", function() { return fadeSwap; });\n// TODO: Refactor to have a generic fadeId/fadeOut\n\nfunction fade(element, delay = 100, start = 0, stop = 10, delta = 1) {\n  (function f() {\n    start += delta;\n    element.style.opacity = start / 10.0;\n    if (start !== stop) {\n      setTimeout(f, delay);\n    }\n  }());\n}\n\nfunction fadeIn(element, step = 100) {\n  fade(element, step);\n}\n\nfunction fadeOut(element, step = 100) {\n  fade(element, step, 10, 0, -1);\n}\n\nfunction fadeSwap(element, callback, delay = 100) {\n  let start = 10;\n  let delta = -1;\n  (function f() {\n    start += delta;\n    element.style.opacity = start / 10.0;\n    if (start === 0) {\n      callback();\n      delta = 1;\n    }\n    if (start < 10) {\n      setTimeout(f, delay);\n    }\n  }());\n}\n\n\n//# sourceURL=webpack:///./src/fader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fader */ \"./src/fader.js\");\n/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page */ \"./src/about-page.js\");\n/* harmony import */ var _dishes_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dishes-page */ \"./src/dishes-page.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n\n\n\n\n\nconst qrySelect = document.querySelector.bind(document);\nconst mainContainer = qrySelect('#content');\nlet currentPage;\n\nfunction swapContents(populateFn, page) {\n  return () => {\n    if (page !== currentPage) {\n      Object(_fader__WEBPACK_IMPORTED_MODULE_0__[\"fadeSwap\"])(mainContainer, populateFn, 42);\n      currentPage = page;\n    }\n  };\n}\n\nfunction setMenuItemEventListener(selector, contentsFn, page) {\n  qrySelect(selector).addEventListener('click', swapContents(contentsFn, page));\n}\n\nObject(_about_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\ncurrentPage = 1;\n\nObject(_fader__WEBPACK_IMPORTED_MODULE_0__[\"fadeIn\"])(document.getElementsByTagName('body')[0], 50);\n\nsetMenuItemEventListener('#about', _about_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 1);\nsetMenuItemEventListener('#dishes', _dishes_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 2);\nsetMenuItemEventListener('#contact', _contact_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 3);\n\n\n//# sourceURL=webpack:///./src/index.js?");

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