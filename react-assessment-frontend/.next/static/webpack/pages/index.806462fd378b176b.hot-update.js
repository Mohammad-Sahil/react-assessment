"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_UploadData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UploadData */ \"./components/UploadData.js\");\n/* harmony import */ var _components_GetData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GetData */ \"./components/GetData.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"get\"), nevigation = ref[0], setNevigation = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"nav_button mt-5 d-flex justify-content-center align-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClick: function() {\n                            return setNevigation(\"get\");\n                        },\n                        className: \"mx-2 text-dark\",\n                        style: {\n                            borderColor: \"rgba(0,0,0,0.5)\",\n                            borderRadius: \"20px\"\n                        },\n                        variant: \"outlined\",\n                        children: \"Students\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClick: function() {\n                            return setNevigation(\"post\");\n                        },\n                        className: \"mx-2 text-dark\",\n                        style: {\n                            borderColor: \"rgba(0,0,0,0.5)\",\n                            borderRadius: \"20px\"\n                        },\n                        variant: \"outlined\",\n                        children: \"Upload\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClick: function() {\n                            return setNevigation(\"delete\");\n                        },\n                        className: \"mx-2 text-dark\",\n                        style: {\n                            borderColor: \"rgba(0,0,0,0.5)\",\n                            borderRadius: \"20px\"\n                        },\n                        variant: \"outlined\",\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClick: function() {\n                            return setNevigation(\"patch\");\n                        },\n                        className: \"mx-2 text-dark\",\n                        style: {\n                            borderColor: \"rgba(0,0,0,0.5)\",\n                            borderRadius: \"20px\"\n                        },\n                        variant: \"outlined\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GetData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\pages\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 7\n    }, this);\n};\n_s(Home, \"EtAVtPjP5ikSVJGvY2ceQs6zjN8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNFO0FBQ0o7QUFDTztBQUNpQjtBQUNOO0FBQ0Y7QUFDQTs7QUFFM0IsU0FBU1EsSUFBSSxHQUFHOztJQUM3QixJQUFvQ0wsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1Q00sVUFBVSxHQUFtQk4sR0FBZSxHQUFsQyxFQUFFTyxhQUFhLEdBQUlQLEdBQWUsR0FBbkI7SUFDaEMscUJBQ0ksOERBQUNHLDBEQUFNOzswQkFFTCw4REFBQ0ssS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGtFQUFrRTs7a0NBQy9FLDhEQUFDTCw0REFBTTt3QkFBQ00sT0FBTyxFQUFFO21DQUFNSCxhQUFhLENBQUMsS0FBSyxDQUFDO3lCQUFBO3dCQUFFRSxTQUFTLEVBQUMsZ0JBQWdCO3dCQUFDRSxLQUFLLEVBQUU7NEJBQUNDLFdBQVcsRUFBRSxpQkFBaUI7NEJBQUVDLFlBQVksRUFBRSxNQUFNO3lCQUFDO3dCQUFFQyxPQUFPLEVBQUMsVUFBVTtrQ0FBQyxVQUFROzs7Ozs0QkFBUztrQ0FDM0ssOERBQUNWLDREQUFNO3dCQUFDTSxPQUFPLEVBQUU7bUNBQU1ILGFBQWEsQ0FBQyxNQUFNLENBQUM7eUJBQUE7d0JBQUVFLFNBQVMsRUFBQyxnQkFBZ0I7d0JBQUNFLEtBQUssRUFBRTs0QkFBQ0MsV0FBVyxFQUFFLGlCQUFpQjs0QkFBRUMsWUFBWSxFQUFFLE1BQU07eUJBQUM7d0JBQUVDLE9BQU8sRUFBQyxVQUFVO2tDQUFDLFFBQU07Ozs7OzRCQUFTO2tDQUMxSyw4REFBQ1YsNERBQU07d0JBQUNNLE9BQU8sRUFBRTttQ0FBTUgsYUFBYSxDQUFDLFFBQVEsQ0FBQzt5QkFBQTt3QkFBRUUsU0FBUyxFQUFDLGdCQUFnQjt3QkFBQ0UsS0FBSyxFQUFFOzRCQUFDQyxXQUFXLEVBQUUsaUJBQWlCOzRCQUFFQyxZQUFZLEVBQUUsTUFBTTt5QkFBQzt3QkFBRUMsT0FBTyxFQUFDLFVBQVU7a0NBQUMsUUFBTTs7Ozs7NEJBQVM7a0NBQzVLLDhEQUFDViw0REFBTTt3QkFBQ00sT0FBTyxFQUFFO21DQUFNSCxhQUFhLENBQUMsT0FBTyxDQUFDO3lCQUFBO3dCQUFFRSxTQUFTLEVBQUMsZ0JBQWdCO3dCQUFDRSxLQUFLLEVBQUU7NEJBQUNDLFdBQVcsRUFBRSxpQkFBaUI7NEJBQUVDLFlBQVksRUFBRSxNQUFNO3lCQUFDO3dCQUFFQyxPQUFPLEVBQUMsVUFBVTtrQ0FBQyxNQUFJOzs7Ozs0QkFBUzs7Ozs7O29CQUNySzswQkFDTiw4REFBQ1osMkRBQU87Ozs7b0JBQUU7Ozs7OztZQUNILENBQ1o7Q0FDRjtHQWR1QkcsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXBsb2FkRGF0YSBmcm9tICcuLi9jb21wb25lbnRzL1VwbG9hZERhdGEnO1xuaW1wb3J0IEdldERhdGEgZnJvbSAnLi4vY29tcG9uZW50cy9HZXREYXRhJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuZXZpZ2F0aW9uLCBzZXROZXZpZ2F0aW9uXSA9IHVzZVN0YXRlKCdnZXQnKTtcbiAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHsvKiA8VXBsb2FkRGF0YS8+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9idXR0b24gbXQtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ldmlnYXRpb24oJ2dldCcpfSBjbGFzc05hbWU9J214LTIgdGV4dC1kYXJrJyBzdHlsZT17e2JvcmRlckNvbG9yOiAncmdiYSgwLDAsMCwwLjUpJywgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIn19IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlN0dWRlbnRzPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXROZXZpZ2F0aW9uKCdwb3N0Jyl9IGNsYXNzTmFtZT0nbXgtMiB0ZXh0LWRhcmsnIHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknLCBib3JkZXJSYWRpdXM6IFwiMjBweFwifX0gdmFyaWFudD1cIm91dGxpbmVkXCI+VXBsb2FkPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXROZXZpZ2F0aW9uKCdkZWxldGUnKX0gY2xhc3NOYW1lPSdteC0yIHRleHQtZGFyaycgc3R5bGU9e3tib3JkZXJDb2xvcjogJ3JnYmEoMCwwLDAsMC41KScsIGJvcmRlclJhZGl1czogXCIyMHB4XCJ9fSB2YXJpYW50PVwib3V0bGluZWRcIj5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ldmlnYXRpb24oJ3BhdGNoJyl9IGNsYXNzTmFtZT0nbXgtMiB0ZXh0LWRhcmsnIHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknLCBib3JkZXJSYWRpdXM6IFwiMjBweFwifX0gdmFyaWFudD1cIm91dGxpbmVkXCI+RWRpdDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEdldERhdGEvPlxuICAgICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJheGlvcyIsInVzZVN0YXRlIiwiVXBsb2FkRGF0YSIsIkdldERhdGEiLCJMYXlvdXQiLCJCdXR0b24iLCJIb21lIiwibmV2aWdhdGlvbiIsInNldE5ldmlnYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3R5bGUiLCJib3JkZXJDb2xvciIsImJvcmRlclJhZGl1cyIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});