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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/App.vue":
/*!*********************!*\
  !*** ./app/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2e015f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2e015f16& */ \"./app/App.vue?vue&type=template&id=2e015f16&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./app/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2e015f16___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2e015f16___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/App.vue?");

/***/ }),

/***/ "./app/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./app/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./app/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/App.vue?");

/***/ }),

/***/ "./app/App.vue?vue&type=template&id=2e015f16&":
/*!****************************************************!*\
  !*** ./app/App.vue?vue&type=template&id=2e015f16& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2e015f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2e015f16& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/App.vue?vue&type=template&id=2e015f16&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2e015f16___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2e015f16___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/App.vue?");

/***/ }),

/***/ "./app/LinkSelect.vue":
/*!****************************!*\
  !*** ./app/LinkSelect.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkSelect_vue_vue_type_template_id_1199651c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkSelect.vue?vue&type=template&id=1199651c&scoped=true& */ \"./app/LinkSelect.vue?vue&type=template&id=1199651c&scoped=true&\");\n/* harmony import */ var _LinkSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkSelect.vue?vue&type=script&lang=js& */ \"./app/LinkSelect.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _LinkSelect_vue_vue_type_style_index_0_id_1199651c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkSelect.vue?vue&type=style&index=0&id=1199651c&lang=scss&scoped=true& */ \"./app/LinkSelect.vue?vue&type=style&index=0&id=1199651c&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _LinkSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _LinkSelect_vue_vue_type_template_id_1199651c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _LinkSelect_vue_vue_type_template_id_1199651c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1199651c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/LinkSelect.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/LinkSelect.vue?");

/***/ }),

/***/ "./app/LinkSelect.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./app/LinkSelect.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./LinkSelect.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./app/LinkSelect.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/LinkSelect.vue?");

/***/ }),

/***/ "./app/LinkSelect.vue?vue&type=style&index=0&id=1199651c&lang=scss&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./app/LinkSelect.vue?vue&type=style&index=0&id=1199651c&lang=scss&scoped=true& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_style_index_0_id_1199651c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib??vue-loader-options!./LinkSelect.vue?vue&type=style&index=0&id=1199651c&lang=scss&scoped=true& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./app/LinkSelect.vue?vue&type=style&index=0&id=1199651c&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_style_index_0_id_1199651c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_style_index_0_id_1199651c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_style_index_0_id_1199651c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_style_index_0_id_1199651c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_style_index_0_id_1199651c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./app/LinkSelect.vue?");

/***/ }),

/***/ "./app/LinkSelect.vue?vue&type=template&id=1199651c&scoped=true&":
/*!***********************************************************************!*\
  !*** ./app/LinkSelect.vue?vue&type=template&id=1199651c&scoped=true& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_template_id_1199651c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./LinkSelect.vue?vue&type=template&id=1199651c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/LinkSelect.vue?vue&type=template&id=1199651c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_template_id_1199651c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSelect_vue_vue_type_template_id_1199651c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/LinkSelect.vue?");

/***/ }),

/***/ "./app/LinkSettings.vue":
/*!******************************!*\
  !*** ./app/LinkSettings.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkSettings_vue_vue_type_template_id_46812cce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkSettings.vue?vue&type=template&id=46812cce& */ \"./app/LinkSettings.vue?vue&type=template&id=46812cce&\");\n/* harmony import */ var _LinkSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkSettings.vue?vue&type=script&lang=js& */ \"./app/LinkSettings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _LinkSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _LinkSettings_vue_vue_type_template_id_46812cce___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _LinkSettings_vue_vue_type_template_id_46812cce___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/LinkSettings.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/LinkSettings.vue?");

/***/ }),

/***/ "./app/LinkSettings.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./app/LinkSettings.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./LinkSettings.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./app/LinkSettings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/LinkSettings.vue?");

/***/ }),

/***/ "./app/LinkSettings.vue?vue&type=template&id=46812cce&":
/*!*************************************************************!*\
  !*** ./app/LinkSettings.vue?vue&type=template&id=46812cce& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSettings_vue_vue_type_template_id_46812cce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./LinkSettings.vue?vue&type=template&id=46812cce& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/LinkSettings.vue?vue&type=template&id=46812cce&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSettings_vue_vue_type_template_id_46812cce___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LinkSettings_vue_vue_type_template_id_46812cce___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/LinkSettings.vue?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ \"./app/App.vue\");\n\r\n\r\npanel.plugin('medienbaecker/link', {\r\n  fields: {\r\n    link: _App_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./app/LinkSelect.vue?vue&type=style&index=0&id=1199651c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./app/LinkSelect.vue?vue&type=style&index=0&id=1199651c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./app/LinkSelect.vue?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./app/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./app/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LinkSelect_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkSelect.vue */ \"./app/LinkSelect.vue\");\n/* harmony import */ var _LinkSettings_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkSettings.vue */ \"./app/LinkSettings.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    LinkSelect: _LinkSelect_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    LinkSettings: _LinkSettings_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  props: {\n    value: Object,\n    endpoints: Object,\n\n    label: String,\n    help: String,\n    disabled: Boolean,\n\n    options: Array,\n    settings: Object\n  },\n  data: function() {\n    return {\n      data: this.value,\n      screen: 'link'\n    }\n  },\n  computed: {\n    link: {\n      get: function () {\n        return {\n          type: this.data.type,\n          value: this.data.value\n        }\n      },\n      set: function (input) {\n        Object.assign(this.data, input)\n      }\n    },\n    settingsData: {\n      get: function () {\n        return {\n          text: this.data.text,\n          popup: this.data.popup,\n          hash: this.data.hash\n        }\n      },\n      set: function (input) {\n        Object.assign(this.data, input)\n      }\n    },\n    isMainScreen: function () {\n      return this.screen === 'link'\n    },\n    hasSettings: function () {\n      return this.settings !== false\n    }\n  },\n  methods: {\n    emitInput: function () {\n      this.$emit('input', this.data)\n    },\n    switchScreen: function () {\n      this.screen = this.isMainScreen ? 'options' : 'link'\n    }\n  },\n  watch: {\n    value: function (value) {\n      this.data = Object.assign({}, value)\n    },\n    data: {\n      deep: true,\n      immediate: true,\n      handler: function () {\n        if (!this.data.type) {\n          this.data.type = 'url'\n        }\n\n        // If the link type is not valid (e.g. when changing the blueprint), set\n        // it to a valid one.\n        if (this.options.indexOf(this.data.type) < 0) {\n          this.data.type = this.options[0]\n          this.data.value = undefined\n        }\n\n        // Pages and files fields expect an array.\n        if (this.data.type.match(/page|file/) && !Array.isArray(this.data.value)) {\n          this.data.value = undefined\n        }\n\n        // Convert null to undefined, otherwise pages and files fields break.\n        if (!this.data.value) {\n          this.data.value = undefined\n        }\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./app/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./app/LinkSelect.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./app/LinkSelect.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  props: {\r\n    value: Object,\r\n    options: Array,\r\n    endpoints: Object\r\n  },\r\n  data: function () {\r\n    return {\r\n      data: this.value,\r\n      updating: false\r\n    }\r\n  },\r\n  computed: {\r\n    showSelect: function () {\r\n      return this.types.length > 1\r\n    },\r\n    types: function () {\r\n      return this.options.map(function (type) {\r\n        return {\r\n          value: type,\r\n          text: this.$t(type)\r\n        }\r\n      }.bind(this))\r\n    }\r\n  },\r\n  methods: {\r\n    inputType: function () {\r\n      this.data.value = undefined\r\n    }\r\n  },\r\n  watch: {\r\n    data: {\r\n      deep: true,\r\n      handler: function (value) {\r\n        if (!this.updating) {\r\n          this.$emit('input', value)\r\n        }\r\n      }\r\n    },\r\n    value: function (value) {\r\n      this.updating = true\r\n\r\n      Object.assign(this.data, value)\r\n\r\n      this.$nextTick(function () {\r\n        this.updating = false\r\n      }.bind(this))\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./app/LinkSelect.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./app/LinkSettings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./app/LinkSettings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  props: {\r\n    value: Object,\r\n    types: Object\r\n  },\r\n  data: function () {\r\n    return {\r\n      data: this.value\r\n    }\r\n  },\r\n  computed: {\r\n    fields: function () {\r\n      var value = {}\r\n      var fields = {\r\n        text: {\r\n          width: '1/2',\r\n          type: 'text',\r\n          label: this.$t('label.text')\r\n        },\r\n        popup: {\r\n          width: '1/4',\r\n          type: 'toggle',\r\n          label: this.$t('label.popup')\r\n        },\r\n        hash: {\r\n          width: '1/4',\r\n          type: 'text',\r\n          label: this.$t('label.hash'),\r\n          placeholder: this.$t('placeholder.elementid')\r\n        }\r\n      }\r\n\r\n      // Merge defaults with defined fields in their order.\r\n      for (var k in this.types) {\r\n        if (fields[k] && this.types[k]) {\r\n          value[k] = Object.assign(fields[k], this.types[k])\r\n        }\r\n      }\r\n\r\n      // Add any missing default fields that are not explicitly disabled.\r\n      for (var k in fields) {\r\n        if (!value[k] && this.types[k] !== false) {\r\n          value[k] = fields[k]\r\n        }\r\n      }\r\n\r\n      return value\r\n    }\r\n  },\r\n  watch: {\r\n    value: function (value) {\r\n      Object.assign(this.data, value)\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./app/LinkSettings.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/App.vue?vue&type=template&id=2e015f16&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/App.vue?vue&type=template&id=2e015f16& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"k-field\",\n    _vm._b({ staticClass: \"k-link-field\" }, \"k-field\", _vm.$props, false),\n    [\n      _vm.hasSettings\n        ? _c(\n            \"k-button\",\n            {\n              attrs: {\n                slot: \"options\",\n                icon: _vm.isMainScreen ? \"cog\" : \"cancel\"\n              },\n              on: { click: _vm.switchScreen },\n              slot: \"options\"\n            },\n            [\n              _vm._v(\n                \" \" +\n                  _vm._s(\n                    _vm.isMainScreen\n                      ? _vm.$t(\"label.settings\")\n                      : _vm.$t(\"label.close\")\n                  ) +\n                  \" \"\n              )\n            ]\n          )\n        : _vm._e(),\n      _vm.isMainScreen\n        ? _c(\"LinkSelect\", {\n            attrs: { options: _vm.options, endpoints: _vm.endpoints },\n            on: { input: _vm.emitInput },\n            model: {\n              value: _vm.link,\n              callback: function($$v) {\n                _vm.link = $$v\n              },\n              expression: \"link\"\n            }\n          })\n        : _c(\"LinkSettings\", {\n            attrs: { types: _vm.settings },\n            on: { input: _vm.emitInput },\n            model: {\n              value: _vm.settingsData,\n              callback: function($$v) {\n                _vm.settingsData = $$v\n              },\n              expression: \"settingsData\"\n            }\n          })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/LinkSelect.vue?vue&type=template&id=1199651c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/LinkSelect.vue?vue&type=template&id=1199651c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"k-grid\",\n    [\n      _vm.showSelect\n        ? _c(\n            \"k-column\",\n            { attrs: { width: \"1/4\" } },\n            [\n              _c(\"k-select-field\", {\n                attrs: { type: \"select\", options: _vm.types, empty: false },\n                on: { input: _vm.inputType },\n                model: {\n                  value: _vm.data.type,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"type\", $$v)\n                  },\n                  expression: \"data.type\"\n                }\n              })\n            ],\n            1\n          )\n        : _vm._e(),\n      _c(\n        \"k-column\",\n        { attrs: { width: _vm.showSelect ? \"3/4\" : null } },\n        [\n          _vm.data.type === \"url\"\n            ? _c(\"k-url-field\", {\n                model: {\n                  value: _vm.data.value,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"value\", $$v)\n                  },\n                  expression: \"data.value\"\n                }\n              })\n            : _vm.data.type === \"page\"\n            ? _c(\"k-pages-field\", {\n                attrs: {\n                  endpoints: {\n                    field: this.endpoints.field + \"/pages\"\n                  }\n                },\n                model: {\n                  value: _vm.data.value,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"value\", $$v)\n                  },\n                  expression: \"data.value\"\n                }\n              })\n            : _vm.data.type === \"file\"\n            ? _c(\"k-files-field\", {\n                attrs: {\n                  endpoints: {\n                    field: this.endpoints.field + \"/files\"\n                  }\n                },\n                model: {\n                  value: _vm.data.value,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"value\", $$v)\n                  },\n                  expression: \"data.value\"\n                }\n              })\n            : _vm.data.type === \"email\"\n            ? _c(\"k-email-field\", {\n                model: {\n                  value: _vm.data.value,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"value\", $$v)\n                  },\n                  expression: \"data.value\"\n                }\n              })\n            : _vm.data.type === \"tel\"\n            ? _c(\"k-tel-field\", {\n                model: {\n                  value: _vm.data.value,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"value\", $$v)\n                  },\n                  expression: \"data.value\"\n                }\n              })\n            : _c(\"k-box\", {\n                attrs: {\n                  theme: \"negative\",\n                  text: _vm.$t(\"error.type\", { type: _vm.data.type })\n                }\n              })\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/LinkSelect.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/LinkSettings.vue?vue&type=template&id=46812cce&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/LinkSettings.vue?vue&type=template&id=46812cce& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"section\",\n    { staticClass: \"k-structure-form\" },\n    [\n      _c(\"k-form\", {\n        staticClass: \"k-structure-form-fields\",\n        attrs: { fields: _vm.fields },\n        on: {\n          input: function($event) {\n            return _vm.$emit(\"input\", _vm.data)\n          }\n        },\n        model: {\n          value: _vm.data,\n          callback: function($$v) {\n            _vm.data = $$v\n          },\n          expression: \"data\"\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/LinkSettings.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });