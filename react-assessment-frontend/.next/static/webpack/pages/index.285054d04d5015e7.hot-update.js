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

/***/ "./components/UploadData.js":
/*!**********************************!*\
  !*** ./components/UploadData.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar UploadData = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: null,\n        classs: null,\n        section: null,\n        paidStatus: null,\n        roll: null,\n        attendancePercent: null\n    }), postDetails = ref[0], setPostDetails = ref[1];\n    var handleInputChange = function(e) {\n        setPostDetails((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, postDetails), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, e.target.name, e.target.value)));\n    };\n    console.log(postDetails);\n    var handlePost = function(e) {\n        e.preventDefault();\n        var name = postDetails.name, classs = postDetails.classs, section = postDetails.section, paidStatus = postDetails.paidStatus, roll = postDetails.roll, attendancePercent = postDetails.attendancePercent;\n        var details = {\n            name: name,\n            classs: Number(classs),\n            section: section,\n            paidStatus: Boolean(paidStatus),\n            attendancePercent: Number(attendancePercent),\n            roll: roll\n        };\n        console.log(details);\n        axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:8000/v2/student\", details).then(function() {\n            return alert(\"Student Details Posted\");\n        }).catch(function(err) {\n            console.error(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handlePost,\n            className: \"form_upload mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                        id: \"filled-basic\",\n                        style: {\n                            width: \"100%\",\n                            marginBottom: \"15px\"\n                        },\n                        label: \"Name\",\n                        variant: \"filled\",\n                        onChange: handleInputChange,\n                        type: \"text\",\n                        name: \"name\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                        lineNumber: 44,\n                        columnNumber: 14\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                        id: \"filled-basic\",\n                        style: {\n                            width: \"100%\",\n                            marginBottom: \"15px\"\n                        },\n                        label: \"Class\",\n                        variant: \"filled\",\n                        onChange: handleInputChange,\n                        type: \"number\",\n                        name: \"classs\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                        lineNumber: 45,\n                        columnNumber: 14\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                        id: \"filled-basic\",\n                        style: {\n                            width: \"100%\",\n                            marginBottom: \"15px\"\n                        },\n                        label: \"Section\",\n                        variant: \"filled\",\n                        onChange: handleInputChange,\n                        type: \"text\",\n                        name: \"section\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                        lineNumber: 46,\n                        columnNumber: 14\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                        id: \"filled-basic\",\n                        style: {\n                            width: \"100%\",\n                            marginBottom: \"15px\"\n                        },\n                        label: \"Roll No.\",\n                        variant: \"filled\",\n                        onChange: handleInputChange,\n                        type: \"text\",\n                        name: \"roll\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                        lineNumber: 47,\n                        columnNumber: 14\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                        id: \"filled-basic\",\n                        style: {\n                            width: \"100%\",\n                            marginBottom: \"15px\"\n                        },\n                        label: \"Attendance Percent\",\n                        variant: \"filled\",\n                        onChange: handleInputChange,\n                        type: \"number\",\n                        name: \"attendancePercent\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                        lineNumber: 48,\n                        columnNumber: 14\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Has the Student paid the amount? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Checkbox, {\n                                onChange: handleInputChange,\n                                type: \"checkbox\",\n                                name: \"paidStatus\",\n                                defaultChecked: true,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                                lineNumber: 49,\n                                columnNumber: 52\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                        lineNumber: 49,\n                        columnNumber: 14\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        onClick: handlePost,\n                        className: \"mx-2 text-dark\",\n                        style: {\n                            borderColor: \"rgba(0,0,0,0.5)\",\n                            borderRadius: \"20px\",\n                            marginTop: \"10px\",\n                            width: \"30%\",\n                            padding: \"6px\"\n                        },\n                        variant: \"outlined\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n                    lineNumber: 50,\n                    columnNumber: 8\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\msahi\\\\OneDrive\\\\Desktop\\\\react-assesment\\\\react-assessment-frontend\\\\components\\\\UploadData.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, _this);\n};\n_s(UploadData, \"FJVFj1AiKbosqKM6wC7LD02J8hs=\");\n_c = UploadData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadData);\nvar _c;\n$RefreshReg$(_c, \"UploadData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsRUFBRTNCLGlCQUFpQjt3QkFBRTRCLElBQUksRUFBQyxRQUFRO3dCQUFDcEMsSUFBSSxFQUFDLG1CQUFtQjt3QkFBQ3FDLFFBQVE7Ozs7OzZCQUFFOzs7Ozt5QkFBTTs4QkFDaE4sOERBQUNaLEtBQUc7OEJBQUMsNEVBQUNBLEtBQUc7OzRCQUFDLG1DQUFpQzswQ0FBQSw4REFBQy9CLG1EQUFRO2dDQUFDeUMsUUFBUSxFQUFFM0IsaUJBQWlCO2dDQUFFNEIsSUFBSSxFQUFDLFVBQVU7Z0NBQUNwQyxJQUFJLEVBQUMsWUFBWTtnQ0FBQ3NDLGNBQWM7Z0NBQUNELFFBQVE7Ozs7O3FDQUFFOzs7Ozs7NkJBQU07Ozs7O3lCQUFNOzhCQUMxSiw4REFBQ1osS0FBRzs4QkFBQyw0RUFBQ2hDLGlEQUFNO3dCQUFDOEMsT0FBTyxFQUFFekIsVUFBVTt3QkFBRWMsU0FBUyxFQUFDLGdCQUFnQjt3QkFBQ0UsS0FBSyxFQUFFOzRCQUFDVSxXQUFXLEVBQUUsaUJBQWlCOzRCQUFFQyxZQUFZLEVBQUUsTUFBTTs0QkFBRUMsU0FBUyxFQUFFLE1BQU07NEJBQUVYLEtBQUssRUFBRSxLQUFLOzRCQUFFWSxPQUFPLEVBQUUsS0FBSzt5QkFBQzt3QkFBRVQsT0FBTyxFQUFDLFVBQVU7a0NBQUMsUUFBTTs7Ozs7NkJBQVM7Ozs7O3lCQUFNOzs7Ozs7aUJBQzdNOzs7OzthQUNELENBQ1A7Q0FDTjtHQWhES25DLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQWtEaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWREYXRhLmpzPzU0ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgVGV4dEZpZWxkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBVcGxvYWREYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Bvc3REZXRhaWxzLCBzZXRQb3N0RGV0YWlsc10gPSAgdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgY2xhc3NzOiBudWxsLFxyXG4gICAgICAgIHNlY3Rpb246IG51bGwsXHJcbiAgICAgICAgcGFpZFN0YXR1czogbnVsbCxcclxuICAgICAgICByb2xsOiBudWxsLFxyXG4gICAgICAgIGF0dGVuZGFuY2VQZXJjZW50OiBudWxsLFxyXG4gICAgfSlcclxuICAgICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBzZXRQb3N0RGV0YWlscyh7IC4uLnBvc3REZXRhaWxzLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc3REZXRhaWxzKVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZVBvc3QgID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCB7IG5hbWUsIGNsYXNzcywgc2VjdGlvbiwgcGFpZFN0YXR1cyxyb2xsLCBhdHRlbmRhbmNlUGVyY2VudCB9ID0gcG9zdERldGFpbHM7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIGNsYXNzczogTnVtYmVyKGNsYXNzcyksXHJcbiAgICAgICAgICBzZWN0aW9uLFxyXG4gICAgICAgICAgcGFpZFN0YXR1czogQm9vbGVhbihwYWlkU3RhdHVzKSxcclxuICAgICAgICAgIGF0dGVuZGFuY2VQZXJjZW50OiBOdW1iZXIoYXR0ZW5kYW5jZVBlcmNlbnQpLFxyXG4gICAgICAgICAgcm9sbCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRldGFpbHMpXHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvdjIvc3R1ZGVudCcsIGRldGFpbHMpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiBhbGVydCgnU3R1ZGVudCBEZXRhaWxzIFBvc3RlZCcpKVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj4gICAgXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVBvc3R9IGNsYXNzTmFtZT1cImZvcm1fdXBsb2FkIG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2PjxUZXh0RmllbGQgaWQ9XCJmaWxsZWQtYmFzaWNcIiBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIn19IGxhYmVsPVwiTmFtZVwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZC8+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48VGV4dEZpZWxkIGlkPVwiZmlsbGVkLWJhc2ljXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCJ9fSBsYWJlbD1cIkNsYXNzXCIgdmFyaWFudD1cImZpbGxlZFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJjbGFzc3NcIiByZXF1aXJlZC8+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48VGV4dEZpZWxkIGlkPVwiZmlsbGVkLWJhc2ljXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCJ9fSBsYWJlbD1cIlNlY3Rpb25cIiB2YXJpYW50PVwiZmlsbGVkXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWN0aW9uXCIgcmVxdWlyZWQvPjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PFRleHRGaWVsZCBpZD1cImZpbGxlZC1iYXNpY1wiIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Cb3R0b206IFwiMTVweFwifX0gbGFiZWw9XCJSb2xsIE5vLlwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJvbGxcIiByZXF1aXJlZC8+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48VGV4dEZpZWxkIGlkPVwiZmlsbGVkLWJhc2ljXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCJ9fSBsYWJlbD1cIkF0dGVuZGFuY2UgUGVyY2VudFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYXR0ZW5kYW5jZVBlcmNlbnRcIiByZXF1aXJlZC8+PC9kaXY+XHJcbiAgICAgICAgPGRpdj48ZGl2PkhhcyB0aGUgU3R1ZGVudCBwYWlkIHRoZSBhbW91bnQ/IDxDaGVja2JveCBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwYWlkU3RhdHVzXCIgZGVmYXVsdENoZWNrZWQgcmVxdWlyZWQvPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgPGRpdj48QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBvc3R9IGNsYXNzTmFtZT0nbXgtMiB0ZXh0LWRhcmsnIHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknLCBib3JkZXJSYWRpdXM6IFwiMjBweFwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCB3aWR0aDogXCIzMCVcIiwgcGFkZGluZzogXCI2cHhcIn19IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlN1Ym1pdDwvQnV0dG9uPjwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGxvYWREYXRhIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNoZWNrYm94IiwiVGV4dEZpZWxkIiwiYXhpb3MiLCJIZWFkIiwidXNlU3RhdGUiLCJVcGxvYWREYXRhIiwibmFtZSIsImNsYXNzcyIsInNlY3Rpb24iLCJwYWlkU3RhdHVzIiwicm9sbCIsImF0dGVuZGFuY2VQZXJjZW50IiwicG9zdERldGFpbHMiLCJzZXRQb3N0RGV0YWlscyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVBvc3QiLCJwcmV2ZW50RGVmYXVsdCIsImRldGFpbHMiLCJOdW1iZXIiLCJCb29sZWFuIiwicG9zdCIsInRoZW4iLCJhbGVydCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJpZCIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJsYWJlbCIsInZhcmlhbnQiLCJvbkNoYW5nZSIsInR5cGUiLCJyZXF1aXJlZCIsImRlZmF1bHRDaGVja2VkIiwib25DbGljayIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UploadData.js\n"));

/***/ })

});