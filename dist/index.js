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

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"style.min.css\");\n\n//# sourceURL=webpack://cookieclicker/./style.scss?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n\r\n\r\ndocument.querySelector(\".cookie\").onclick =\r\n    function clickCookie() {\r\n        this.classList.add(\"large-cookie\");\r\n        setTimeout(() => this.classList.remove(\"large-cookie\"), 50);\r\n        add();\r\n    }\r\n\r\nlet cookies = document.querySelector(\".count-number\")\r\nlet cookiesN = 0;\r\nlet cookiesPerClick = 1;\r\nlet shop1Bought = 1;\r\nlet shop1Price = document.querySelector(\".price1\");\r\nlet shop1PriceTotal = 10;\r\nlet shop1PriceInc = 10;\r\ndocument.querySelector(\"#incPower\").onclick =\r\n    function () {\r\n        if (cookiesN >= shop1PriceTotal) {\r\n            cookiesPerClick = cookiesPerClick + shop1Bought;\r\n            cookiesN = cookiesN - shop1PriceTotal;\r\n            cookies.textContent = cookiesN;\r\n            shop1Bought++;\r\n            shop1PriceTotal = shop1PriceTotal + shop1PriceInc;\r\n            shop1Price.textContent = \" \" + shop1PriceTotal;\r\n        } else {\r\n            shopItemUn(this)\r\n        }\r\n    }\r\n\r\nfunction shopItemUn(e) {\r\n    e.classList.add(\"shop-item-unavailable\");\r\n    setTimeout(() => e.classList.remove(\"shop-item-unavailable\"), 500);\r\n}\r\n\r\nfunction add() {\r\n    cookiesN = parseInt(cookiesN) + parseInt(cookiesPerClick);\r\n    setCookiesNum(cookiesN);\r\n}\r\n\r\nfunction setCookiesNum(num) {\r\n    cookies.textContent = num;\r\n}\r\n\r\ndocument.getElementById('save').onclick = function () {\r\n    localStorage.setItem('cookiesCount', cookiesN);\r\n    alert('It\\'s saved');\r\n}\r\n\r\ndocument.getElementById('load').onclick = function () {\r\n    setCookiesNum(localStorage.getItem('cookiesCount'))\r\n    alert('It\\'s loaded');\r\n}\r\n\r\nsetInterval(function () {\r\n    //Todo remove item falling cookie random time change span to button add all the save load values try to add babushka\r\n    document.getElementsByTagName('article')[0]\r\n        .insertAdjacentHTML('beforebegin', \"<span class='fallingCookie'>Cookie</span>\");\r\n}, 5000);\r\n\n\n//# sourceURL=webpack://cookieclicker/./script.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;