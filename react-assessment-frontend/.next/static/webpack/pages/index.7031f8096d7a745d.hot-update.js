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

/***/ "./components/DeleteData.js":
/*!**********************************!*\
  !*** ./components/DeleteData.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar DeleteData = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), findData = ref[0], setFindData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), inputData = ref1[0], setInputData = ref1[1];\n    function handleFindOne() {\n        return _handleFindOne.apply(this, arguments);\n    }\n    function _handleFindOne() {\n        _handleFindOne = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_msahi_OneDrive_Desktop_react_assesment_react_assessment_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios.get(\"http://localhost:8000/v1/student\");\n                    case 3:\n                        response = _ctx.sent;\n                        setFindData(response.data);\n                        console.log(response.data);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return _handleFindOne.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            display: \"grid\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleFindOne,\n                className: \"form_upload\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextField, {\n                        id: \"filled-basic\",\n                        style: {\n                            width: \"100%\",\n                            marginBottom: \"15px\"\n                        },\n                        label: \"Enter Roll No., you want to delete\",\n                        variant: \"filled\",\n                        onChange: function(e) {\n                            return setInputData(e.target.value);\n                        },\n                        type: \"text\",\n                        name: \"name\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                        lineNumber: 21,\n                        columnNumber: 8\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                        onClick: handleFindOne,\n                        className: \"mx-2 text-dark\",\n                        style: {\n                            borderColor: \"rgba(0,0,0,0.5)\",\n                            borderRadius: \"20px\",\n                            marginTop: \"10px\",\n                            width: \"30%\",\n                            padding: \"6px\"\n                        },\n                        variant: \"outlined\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                lineNumber: 20,\n                columnNumber: 6\n            }, _this),\n            data.map(function(data1) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    style: {\n                        padding: \"20px\",\n                        margin: \"10px\",\n                        background: \"#eee\",\n                        width: \"300px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Name: \",\n                                data1.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Class: \",\n                                data1.classs\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Section: \",\n                                data1.section\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Peyment Status: \",\n                                data1.paidStatus ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                    children: \"Fee is Paid\"\n                                }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                                    children: \"Fee is not paid\"\n                                }, void 0, false)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Attendance Percent: \",\n                                data1.attendancePercent\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Roll No.: \",\n                                data1.roll\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n                    lineNumber: 26,\n                    columnNumber: 20\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\DeleteData.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(DeleteData, \"Yf9O8sK3sA2egPcwuqrOEDOAPOs=\");\n_c = DeleteData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteData);\nvar _c;\n$RefreshReg$(_c, \"DeleteData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUksQ0FBQ2tDLFVBQVUsaUJBQUc7OENBQUUsYUFBVztpREFBRyxpQkFBRzs4Q0FBRSxpQkFBZTtpREFBRzs7Ozs7O2tDQUFPO3NDQUN0Riw4REFBQzlCLEtBQUc7O2dDQUFDLHNCQUFvQjtnQ0FBQ0osS0FBSSxDQUFDbUMsaUJBQWlCOzs7Ozs7a0NBQU87c0NBQ3ZELDhEQUFDL0IsS0FBRzs7Z0NBQUMsWUFBVTtnQ0FBQ0osS0FBSSxDQUFDb0MsSUFBSTs7Ozs7O2tDQUFPOzs7Ozs7MEJBQzFCO2FBQ1QsQ0FBQzs7Ozs7O2FBRUEsQ0FDUDtDQUNGO0dBbkNLN0MsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBcUNoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RlbGV0ZURhdGEuanM/NThjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEZWxldGVEYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2ZpbmREYXRhLCBzZXRGaW5kRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaW5wdXREYXRhLCBzZXRJbnB1dERhdGFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmluZE9uZSgpIHtcclxuICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvdjEvc3R1ZGVudCcpO1xyXG4gICAgICAgICAgICBzZXRGaW5kRGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXREYXRhKClcclxuICAgIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImdyaWRcIn19PlxyXG4gICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGaW5kT25lfSBjbGFzc05hbWU9XCJmb3JtX3VwbG9hZFwiPlxyXG4gICAgICAgPFRleHRGaWVsZCBpZD1cImZpbGxlZC1iYXNpY1wiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Cb3R0b206IFwiMTVweFwifX0gbGFiZWw9XCJFbnRlciBSb2xsIE5vLiwgeW91IHdhbnQgdG8gZGVsZXRlXCIgdmFyaWFudD1cImZpbGxlZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXREYXRhKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkLz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZpbmRPbmV9IGNsYXNzTmFtZT0nbXgtMiB0ZXh0LWRhcmsnIHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknLCBib3JkZXJSYWRpdXM6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCB3aWR0aDogXCIzMCVcIiwgcGFkZGluZzogXCI2cHhcIn19IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICBcclxuICAgICAgICB7ZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3twYWRkaW5nOiBcIjIwcHhcIixtYXJnaW46IFwiMTBweFwiLGJhY2tncm91bmQ6IFwiI2VlZVwiLCB3aWR0aDogXCIzMDBweFwifX0+XHJcbiAgICAgICAgICAgIDxkaXY+TmFtZToge2RhdGEubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5DbGFzczoge2RhdGEuY2xhc3NzfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlNlY3Rpb246IHtkYXRhLnNlY3Rpb259PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+UGV5bWVudCBTdGF0dXM6IHtkYXRhLnBhaWRTdGF0dXMgPyA8PkZlZSBpcyBQYWlkPC8+IDogPD5GZWUgaXMgbm90IHBhaWQ8Lz59PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+QXR0ZW5kYW5jZSBQZXJjZW50OiB7ZGF0YS5hdHRlbmRhbmNlUGVyY2VudH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5Sb2xsIE5vLjoge2RhdGEucm9sbH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfSl9XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlRGF0YSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRlbGV0ZURhdGEiLCJmaW5kRGF0YSIsInNldEZpbmREYXRhIiwiaW5wdXREYXRhIiwic2V0SW5wdXREYXRhIiwiaGFuZGxlRmluZE9uZSIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldERhdGEiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJUZXh0RmllbGQiLCJpZCIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwibGFiZWwiLCJ2YXJpYW50Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwibmFtZSIsInJlcXVpcmVkIiwiQnV0dG9uIiwib25DbGljayIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwicGFkZGluZyIsIm1hcCIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJjbGFzc3MiLCJzZWN0aW9uIiwicGFpZFN0YXR1cyIsImF0dGVuZGFuY2VQZXJjZW50Iiwicm9sbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DeleteData.js\n"));

/***/ })

});