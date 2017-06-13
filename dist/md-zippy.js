(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-material"));
	else if(typeof define === 'function' && define.amd)
		define("mdMaterialZippy", ["angular", "angular-material"], factory);
	else if(typeof exports === 'object')
		exports["mdMaterialZippy"] = factory(require("angular"), require("angular-material"));
	else
		root["mdMaterialZippy"] = factory(root["angular"], root["angular-material"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zippy_controller_1 = __webpack_require__(3);
/** @internal */
exports.MdZippyComponent = {
    bindings: {
        title: '@'
    },
    transclude: true,
    controller: zippy_controller_1.MdZippyController,
    template: "\n    <div>\n      <md-subheader class=\"md-no-sticky md-primary\" ng-click=\"$ctrl.toggle()\" style=\"outline: none;\">\n        <div layout=\"row\" layout-align=\"space-between center\">\n          <div>{{$ctrl.title}}</div>\n          <div>{{$ctrl.active ? '\u2014' : '\uFF0B'}}</div>\n        </div>\n      </md-subheader>\n      <div ng-show=\"$ctrl.active\">\n        <div ng-transclude></div>\n      </dmvd-list-item>\n    </div>\n  "
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MdZippyController = (function () {
    function MdZippyController() {
        this.active = false;
    }
    MdZippyController.prototype.toggle = function () {
        this.active = !this.active;
    };
    return MdZippyController;
}());
exports.MdZippyController = MdZippyController;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var ngMaterial = __webpack_require__(2);
var zippy_component_1 = __webpack_require__(0);
var mdZippyModule = angular.module('md-zippy', [ngMaterial]).component('mdZippy', zippy_component_1.MdZippyComponent).name;
exports.mdZippyModule = mdZippyModule;


/***/ })
/******/ ]);
});
//# sourceMappingURL=md-zippy.js.map