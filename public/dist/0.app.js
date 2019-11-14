(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_test.js":
/*!***************************!*\
  !*** ../pkg/wasm_test.js ***!
  \***************************/
/*! exports provided: greet, __wbg_alert_9d6b878832276689, __wbg_log_7bde4e1bb51408eb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_9d6b878832276689\", function() { return __wbg_alert_9d6b878832276689; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_7bde4e1bb51408eb\", function() { return __wbg_log_7bde4e1bb51408eb; });\n/* harmony import */ var _wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_test_bg.wasm */ \"../pkg/wasm_test_bg.wasm\");\n\n\n/**\n*/\nfunction greet() {\n    _wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nconst __wbg_alert_9d6b878832276689 = function(arg0, arg1) {\n    alert(getStringFromWasm(arg0, arg1));\n};\n\nconst __wbg_log_7bde4e1bb51408eb = function(arg0, arg1) {\n    console.log(getStringFromWasm(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_test.js?");

/***/ }),

/***/ "../pkg/wasm_test_bg.wasm":
/*!********************************!*\
  !*** ../pkg/wasm_test_bg.wasm ***!
  \********************************/
/*! exports provided: memory, greet */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_test.js */ \"../pkg/wasm_test.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_test_bg.wasm?");

/***/ }),

/***/ "./App.ts":
/*!****************!*\
  !*** ./App.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar wasm = __importStar(__webpack_require__(/*! ../pkg/wasm_test */ \"../pkg/wasm_test.js\"));\r\nwasm.greet();\r\n\n\n//# sourceURL=webpack:///./App.ts?");

/***/ })

}]);