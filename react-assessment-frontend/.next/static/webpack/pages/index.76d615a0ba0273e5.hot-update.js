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

/***/ "./components/GetData.js":
/*!*******************************!*\
  !*** ./components/GetData.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar GetData = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), data = ref[0], setData = ref[1];\n    function getData() {\n        return _getData.apply(this, arguments);\n    }\n    function _getData() {\n        _getData = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:8000/v1/student\");\n                    case 3:\n                        response = _ctx.sent;\n                        setData(response.data);\n                        console.log(response.data);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return _getData.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"row mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"col-md-11 col-10 my-5 mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"row mx-auto\",\n                children: data.map(function(data) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"col-md-4 col-12 my-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"getdata_card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Name: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 22\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Class: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: data.classs\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 23\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Section: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: data.section\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 25\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Peyment Status: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: data.paidStatus ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                                children: \"Paid\"\n                                            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                                children: \"Unpaid\"\n                                            }, void 0, false)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 32\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Attendance Percent: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: data.attendancePercent\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 36\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Roll No.: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: data.roll\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 26\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, _this1)\n                    }, data._id, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                        lineNumber: 23,\n                        columnNumber: 20\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\GetData.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(GetData, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = GetData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetData);\nvar _c;\n$RefreshReg$(_c, \"GetData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dldERhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQTBCO0FBQ3dCOztBQUVsRCxJQUFNSSxPQUFPLEdBQUcsV0FBTTs7O0lBQ2xCLElBQXdCRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTdCRSxJQUFJLEdBQWFGLEdBQVksR0FBekIsRUFBRUcsT0FBTyxHQUFJSCxHQUFZLEdBQWhCO2FBQ0xJLE9BQU87ZUFBUEEsUUFBTzs7YUFBUEEsUUFBTztRQUFQQSxRQUFPLEdBQXRCLDJSQUF5QjtnQkFFWEMsUUFBUTs7Ozs7OytCQUFTUixnREFBUyxDQUFDLGtDQUFrQyxDQUFDOzt3QkFBOURRLFFBQVEsWUFBc0Q7d0JBQ3BFRixPQUFPLENBQUNFLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7d0JBQ3ZCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDSCxJQUFJLENBQUMsQ0FBQzs7Ozs7O3dCQUUvQkssT0FBTyxDQUFDQyxHQUFHLFNBQU87Ozs7Ozs7Ozs7O1NBRXJCO2VBUmNKLFFBQU87O0lBU3RCTCxnREFBUyxDQUFDLFdBQU07UUFDWkssT0FBTyxFQUFFO0tBQ1osRUFBQyxFQUFFLENBQUM7SUFDUCxxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUMsYUFBYTtrQkFDeEIsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLCtCQUErQjtzQkFDOUMsNEVBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxhQUFhOzBCQUMzQlIsSUFBSSxDQUFDUyxHQUFHLENBQUMsU0FBQ1QsSUFBSSxFQUFLO29CQUNoQixxQkFBTyw4REFBQ08sS0FBRzt3QkFBZ0JDLFNBQVMsRUFBQyxzQkFBc0I7a0NBQzNELDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsY0FBYzs7OENBQzdCLDhEQUFDRSxHQUFDOzt3Q0FBQyxRQUFNO3NEQUFBLDhEQUFDQyxNQUFJO3NEQUFFWCxJQUFJLENBQUNZLElBQUk7Ozs7O2tEQUFROzs7Ozs7MENBQUk7OENBQ3JDLDhEQUFDRixHQUFDOzt3Q0FBQyxTQUFPO3NEQUFBLDhEQUFDQyxNQUFJO3NEQUFFWCxJQUFJLENBQUNhLE1BQU07Ozs7O2tEQUFROzs7Ozs7MENBQUk7OENBQ3hDLDhEQUFDSCxHQUFDOzt3Q0FBQyxXQUFTO3NEQUFBLDhEQUFDQyxNQUFJO3NEQUFFWCxJQUFJLENBQUNjLE9BQU87Ozs7O2tEQUFROzs7Ozs7MENBQUk7OENBQzNDLDhEQUFDSixHQUFDOzt3Q0FBQyxrQkFBZ0I7c0RBQUEsOERBQUNDLE1BQUk7c0RBQUVYLElBQUksQ0FBQ2UsVUFBVSxpQkFBRzswREFBRSxNQUFJOzZEQUFHLGlCQUFHOzBEQUFFLFFBQU07NkRBQUc7Ozs7O2tEQUFROzs7Ozs7MENBQUk7OENBQy9FLDhEQUFDTCxHQUFDOzt3Q0FBQyxzQkFBb0I7c0RBQUEsOERBQUNDLE1BQUk7c0RBQUVYLElBQUksQ0FBQ2dCLGlCQUFpQjs7Ozs7a0RBQVE7Ozs7OzswQ0FBSTs4Q0FDaEUsOERBQUNOLEdBQUM7O3dDQUFDLFlBQVU7c0RBQUEsOERBQUNDLE1BQUk7c0RBQUVYLElBQUksQ0FBQ2lCLElBQUk7Ozs7O2tEQUFROzs7Ozs7MENBQUk7Ozs7OztrQ0FDbkM7dUJBUldqQixJQUFJLENBQUNrQixHQUFHOzs7OzhCQVNuQjtpQkFDVCxDQUFDOzs7OztxQkFDSTs7Ozs7aUJBQ0E7Ozs7O2FBQ0osQ0FDUDtDQUNGO0dBbENLbkIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBb0NiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2V0RGF0YS5qcz82Y2M4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBHZXREYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvdjEvc3R1ZGVudCcpO1xyXG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldERhdGEoKVxyXG4gICAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdyBteC1hdXRvJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTExIGNvbC0xMCBteS01IG14LWF1dG8nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LWF1dG9cIj5cclxuICAgICAgICB7ZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtkYXRhLl9pZH0gY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLTEyIG15LTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dldGRhdGFfY2FyZCc+XHJcbiAgICAgICAgICAgIDxwPk5hbWU6IDxzcGFuPntkYXRhLm5hbWV9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+Q2xhc3M6IDxzcGFuPntkYXRhLmNsYXNzc308L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cD5TZWN0aW9uOiA8c3Bhbj57ZGF0YS5zZWN0aW9ufTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDxwPlBleW1lbnQgU3RhdHVzOiA8c3Bhbj57ZGF0YS5wYWlkU3RhdHVzID8gPD5QYWlkPC8+IDogPD5VbnBhaWQ8Lz59PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+QXR0ZW5kYW5jZSBQZXJjZW50OiA8c3Bhbj57ZGF0YS5hdHRlbmRhbmNlUGVyY2VudH08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cD5Sb2xsIE5vLjogPHNwYW4+e2RhdGEucm9sbH08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdldERhdGEiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2V0RGF0YSIsImRhdGEiLCJzZXREYXRhIiwiZ2V0RGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInAiLCJzcGFuIiwibmFtZSIsImNsYXNzcyIsInNlY3Rpb24iLCJwYWlkU3RhdHVzIiwiYXR0ZW5kYW5jZVBlcmNlbnQiLCJyb2xsIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GetData.js\n"));

/***/ })

});