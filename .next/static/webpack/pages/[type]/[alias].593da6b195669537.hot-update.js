"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[type]/[alias]",{

/***/ "./page-components/TopPageComponent/TopPageComponent.tsx":
/*!***************************************************************!*\
  !*** ./page-components/TopPageComponent/TopPageComponent.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TopPageComponent\": function() { return /* binding */ TopPageComponent; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ \"./components/index.ts\");\n/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopPageComponent.module.css */ \"./page-components/TopPageComponent/TopPageComponent.module.css\");\n/* harmony import */ var _TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _interfaces_course_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/course.interface */ \"./interfaces/course.interface.ts\");\n/* harmony import */ var _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Sort/Sort.props */ \"./components/Sort/Sort.props.ts\");\n/* harmony import */ var _sort_Reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort.Reducer */ \"./page-components/TopPageComponent/sort.Reducer.ts\");\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TopPageComponent = function(param) {\n    var page = param.page, products = param.products, firstCategory = param.firstCategory;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_sort_Reducer__WEBPACK_IMPORTED_MODULE_5__.sortReducer, {\n        products: products\n    }), ref1 = ref[0], sortedProducts = ref1.products, dispatch = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Htag, {\n                        tag: \"h1\",\n                        children: page.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 5\n                    }, _this),\n                    products && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Tag, {\n                        color: \"gray\",\n                        size: \"m\",\n                        children: products.length\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 18\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Sort, {\n                        sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_4__.SortEnum.Price,\n                        setSort: function() {}\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: products && products.map(function(p) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: p.title\n                    }, p._id, false, {\n                        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 37\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default().hhTitle),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Htag, {\n                        tag: \"h2\",\n                        children: [\n                            \"\\u0412\\u0430\\u043A\\u0430\\u043D\\u0441\\u0438\\u0438 - \",\n                            page.category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Tag, {\n                        color: \"red\",\n                        size: \"m\",\n                        children: \"hh.ru\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, _this),\n            firstCategory == _interfaces_course_interface__WEBPACK_IMPORTED_MODULE_3__.TopLevelCategory.Courses && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.HhData, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, page.hh), void 0, false, {\n                fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                lineNumber: 27,\n                columnNumber: 50\n            }, _this),\n            page.advantages && page.advantages.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Htag, {\n                        tag: \"h2\",\n                        children: \"\\u041F\\u0440\\u0435\\u0438\\u043C\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u0430\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Advantages, {\n                        advantages: page.advantages\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true),\n            page.seoText && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_TopPageComponent_module_css__WEBPACK_IMPORTED_MODULE_6___default().seo),\n                dangerouslySetInnerHTML: {\n                    __html: page.seoText\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Htag, {\n                tag: \"h2\",\n                children: \"\\u041F\\u043E\\u043B\\u0443\\u0447\\u0430\\u0435\\u043C\\u044B\\u0435 \\u043D\\u0430\\u0432\\u044B\\u043A\\u0438\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, _this),\n            page.tags.map(function(t) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Tag, {\n                    color: \"primary\",\n                    children: t\n                }, t, false, {\n                    fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 24\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\FE\\\\code\\\\React\\\\reactNext\\\\page-components\\\\TopPageComponent\\\\TopPageComponent.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, _this);\n};\n_s(TopPageComponent, \"mFz6li+c8UJjmzxgHyiIZSeSSc8=\");\n_c = TopPageComponent;\nvar _c;\n$RefreshReg$(_c, \"TopPageComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlLWNvbXBvbmVudHMvVG9wUGFnZUNvbXBvbmVudC9Ub3BQYWdlQ29tcG9uZW50LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ2dEO0FBQ3FCO0FBQ25CO0FBQ2lCO0FBQ1Q7QUFDZjs7QUFFcEMsSUFBTVcsZ0JBQWdCLEdBQUcsZ0JBQXlFO1FBQXZFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLGFBQWEsU0FBYkEsYUFBYTs7O0lBQzlELElBQTJDYixHQUFrQyxHQUFsQ0EsaURBQVUsQ0FBQ1Msc0RBQVcsRUFBQztRQUFDRyxRQUFRLEVBQVJBLFFBQVE7S0FBQyxDQUFDLFNBQWxDWixHQUFrQyxLQUFyRVksY0FBdUIsUUFBdkJBLFFBQVEsRUFBaUJHLFFBQVEsR0FBRWYsR0FBa0MsR0FBcEM7SUFDekMscUJBQ0MsOERBQUNnQixLQUFHO1FBQUNDLFNBQVMsRUFBRVgsNkVBQWM7OzBCQUM3Qiw4REFBQ1UsS0FBRztnQkFBQ0MsU0FBUyxFQUFFWCwyRUFBWTs7a0NBQzNCLDhEQUFDSCw2Q0FBSTt3QkFBQ2lCLEdBQUcsRUFBQyxJQUFJO2tDQUFFVCxJQUFJLENBQUNRLEtBQUs7Ozs7OzZCQUFRO29CQUNqQ1AsUUFBUSxrQkFBSSw4REFBQ1AsNENBQUc7d0JBQUNnQixLQUFLLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLEdBQUc7a0NBQUVWLFFBQVEsQ0FBQ1csTUFBTTs7Ozs7NkJBQU87a0NBQy9ELDhEQUFDbkIsNkNBQUk7d0JBQUNvQixJQUFJLEVBQUVoQix1RUFBYzt3QkFBRWtCLE9BQU8sRUFBRSxXQUFJLEVBQUU7Ozs7OzZCQUFHOzs7Ozs7cUJBQ3pDOzBCQUNOLDhEQUFDVixLQUFHOzBCQUNGSixRQUFRLElBQUlBLFFBQVEsQ0FBQ2UsR0FBRyxDQUFDQyxTQUFBQSxDQUFDO3lDQUFLLDhEQUFDWixLQUFHO2tDQUNsQ1ksQ0FBQyxDQUFDVCxLQUFLO3VCQURpQ1MsQ0FBQyxDQUFDQyxHQUFHOzs7OzhCQUV6QztpQkFBQyxDQUFDOzs7OztxQkFDSDswQkFDTiw4REFBQ2IsS0FBRztnQkFBQ0MsU0FBUyxFQUFFWCw2RUFBYzs7a0NBQzdCLDhEQUFDSCw2Q0FBSTt3QkFBQ2lCLEdBQUcsRUFBQyxJQUFJOzs0QkFBQyxxREFBVzs0QkFBU1QsSUFBSSxDQUFDb0IsUUFBUTs7Ozs7OzZCQUFRO2tDQUNoRCw4REFBUDFCLDRDQUFHO3dCQUFDZ0IsS0FBSyxFQUFDLEtBQUs7d0JBQUNDLElBQUksRUFBQyxHQUFHO2tDQUFDLE9BQUs7Ozs7OzZCQUFNOzs7Ozs7cUJBQ2hDO1lBQ0xULGFBQWEsSUFBSU4sa0ZBQXdCLGtCQUFJLDhEQUFDTCwrQ0FBTSxxRkFBS1MsSUFBSSxDQUFDc0IsRUFBRTs7OztxQkFBRztZQUNuRXRCLElBQUksQ0FBQ3VCLFVBQVUsSUFBSXZCLElBQUksQ0FBQ3VCLFVBQVUsQ0FBQ1gsTUFBTSxHQUFHLENBQUMsa0JBQUk7O2tDQUNqRCw4REFBQ3BCLDZDQUFJO3dCQUFDaUIsR0FBRyxFQUFDLElBQUk7a0NBQUMsMEVBQVk7Ozs7OzZCQUFtQjtrQ0FDbEMsOERBQVhuQixtREFBVTt3QkFBQ2lDLFVBQVUsRUFBRXZCLElBQUksQ0FBQ3VCLFVBQVU7Ozs7OzZCQUFHOzs0QkFDeEM7WUFDRnZCLElBQUksQ0FBQ3dCLE9BQU8sa0JBQ1YsOERBQUNuQixLQUFHO2dCQUFDQyxTQUFTLEVBQUVYLHlFQUFVO2dCQUN6QitCLHVCQUF1QixFQUFFO29CQUFDQyxNQUFNLEVBQUUzQixJQUFJLENBQUN3QixPQUFPO2lCQUFDOzs7OztxQkFBRzswQkFFdEQsOERBQUNoQyw2Q0FBSTtnQkFBQ2lCLEdBQUcsRUFBQyxJQUFJOzBCQUFDLG1HQUFpQjs7Ozs7cUJBQU87WUFDdENULElBQUksQ0FBQzRCLElBQUksQ0FBQ1osR0FBRyxDQUFDYSxTQUFBQSxDQUFDO3FDQUFJLDhEQUFDbkMsNENBQUc7b0JBQVNnQixLQUFLLEVBQUMsU0FBUzs4QkFBRW1CLENBQUM7bUJBQXJCQSxDQUFDOzs7OzBCQUEyQjthQUFBLENBQUM7Ozs7OzthQUN0RCxDQUNOO0NBQ0Q7R0EvQlk5QixnQkFBZ0I7QUFBaEJBLEtBQUFBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlLWNvbXBvbmVudHMvVG9wUGFnZUNvbXBvbmVudC9Ub3BQYWdlQ29tcG9uZW50LnRzeD8wNjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9wUGFnZUNvbXBvbmVudFByb3BzfSBmcm9tIFwiLi9Ub3BQYWdlQ29tcG9uZW50LnByb3BzXCI7XHJcbmltcG9ydCBSZWFjdCwge3VzZVJlZHVjZXIsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QWR2YW50YWdlcywgSGhEYXRhLCBIdGFnLCBTb3J0LCBUYWd9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub3BQYWdlQ29tcG9uZW50Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7VG9wTGV2ZWxDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvY291cnNlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQge1NvcnRFbnVtfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Tb3J0L1NvcnQucHJvcHNcIjtcclxuaW1wb3J0IHtzb3J0UmVkdWNlcn0gZnJvbSBcIi4vc29ydC5SZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVG9wUGFnZUNvbXBvbmVudCA9ICh7cGFnZSwgcHJvZHVjdHMsIGZpcnN0Q2F0ZWdvcnl9OiBUb3BQYWdlQ29tcG9uZW50UHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW3twcm9kdWN0czpzb3J0ZWRQcm9kdWN0c30sZGlzcGF0Y2hdPXVzZVJlZHVjZXIoc29ydFJlZHVjZXIse3Byb2R1Y3RzfSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcblx0XHRcdFx0PEh0YWcgdGFnPSdoMSc+e3BhZ2UudGl0bGV9PC9IdGFnPlxyXG5cdFx0XHRcdHtwcm9kdWN0cyAmJiA8VGFnIGNvbG9yPSdncmF5JyBzaXplPSdtJz57cHJvZHVjdHMubGVuZ3RofTwvVGFnPn1cclxuXHRcdFx0XHQ8U29ydCBzb3J0PXtTb3J0RW51bS5QcmljZX0gc2V0U29ydD17KCk9Pnt9fS8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdHtwcm9kdWN0cyAmJiBwcm9kdWN0cy5tYXAocCA9PiAoPGRpdiBrZXk9e3AuX2lkfT5cclxuXHRcdFx0XHRcdHtwLnRpdGxlfVxyXG5cdFx0XHRcdDwvZGl2PikpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaFRpdGxlfT5cclxuXHRcdFx0XHQ8SHRhZyB0YWc9J2gyJz7QktCw0LrQsNC90YHQuNC4IC0ge3BhZ2UuY2F0ZWdvcnl9PC9IdGFnPlxyXG5cdFx0XHRcdDxUYWcgY29sb3I9J3JlZCcgc2l6ZT0nbSc+aGgucnU8L1RhZz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtmaXJzdENhdGVnb3J5ID09IFRvcExldmVsQ2F0ZWdvcnkuQ291cnNlcyAmJiA8SGhEYXRhIHsuLi5wYWdlLmhofS8+fVxyXG5cdFx0XHR7cGFnZS5hZHZhbnRhZ2VzICYmIHBhZ2UuYWR2YW50YWdlcy5sZW5ndGggPiAwICYmIDw+XHJcblx0XHRcdFx0PEh0YWcgdGFnPSdoMic+0J/RgNC10LjQvNGD0YnQtdGB0YLQstCwPC9IdGFnPlxyXG5cdFx0XHRcdDxBZHZhbnRhZ2VzIGFkdmFudGFnZXM9e3BhZ2UuYWR2YW50YWdlc30vPlxyXG5cdFx0XHQ8Lz59XHJcblx0XHRcdHtwYWdlLnNlb1RleHRcclxuXHRcdFx0JiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZW99XHJcblx0XHRcdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBhZ2Uuc2VvVGV4dH19Lz5cclxuXHRcdFx0fVxyXG5cdFx0XHQ8SHRhZyB0YWc9J2gyJz7Qn9C+0LvRg9GH0LDQtdC80YvQtSDQvdCw0LLRi9C60Lg8L0h0YWc+XHJcblx0XHRcdHtwYWdlLnRhZ3MubWFwKHQgPT4gPFRhZyBrZXk9e3R9IGNvbG9yPSdwcmltYXJ5Jz57dH08L1RhZz4pfVxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsIkFkdmFudGFnZXMiLCJIaERhdGEiLCJIdGFnIiwiU29ydCIsIlRhZyIsInN0eWxlcyIsIlRvcExldmVsQ2F0ZWdvcnkiLCJTb3J0RW51bSIsInNvcnRSZWR1Y2VyIiwiVG9wUGFnZUNvbXBvbmVudCIsInBhZ2UiLCJwcm9kdWN0cyIsImZpcnN0Q2F0ZWdvcnkiLCJzb3J0ZWRQcm9kdWN0cyIsImRpc3BhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsInRpdGxlIiwidGFnIiwiY29sb3IiLCJzaXplIiwibGVuZ3RoIiwic29ydCIsIlByaWNlIiwic2V0U29ydCIsIm1hcCIsInAiLCJfaWQiLCJoaFRpdGxlIiwiY2F0ZWdvcnkiLCJDb3Vyc2VzIiwiaGgiLCJhZHZhbnRhZ2VzIiwic2VvVGV4dCIsInNlbyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidGFncyIsInQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./page-components/TopPageComponent/TopPageComponent.tsx\n"));

/***/ }),

/***/ "./page-components/TopPageComponent/sort.Reducer.ts":
/*!**********************************************************!*\
  !*** ./page-components/TopPageComponent/sort.Reducer.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortReducer\": function() { return /* binding */ sortReducer; }\n/* harmony export */ });\n/* harmony import */ var _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Sort/Sort.props */ \"./components/Sort/Sort.props.ts\");\n\nvar sortReducer = function(state, action) {\n    switch(action.type){\n        case _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__.SortEnum.Rating:\n            return {\n                sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__.SortEnum.Rating,\n                products: state.products.sort(function(a, b) {\n                    return a.initialRating > b.initialRating ? -1 : 1;\n                })\n            };\n        case _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__.SortEnum.Price:\n            return {\n                sort: _components_Sort_Sort_props__WEBPACK_IMPORTED_MODULE_0__.SortEnum.Price,\n                products: state.products.sort(function(a, b) {\n                    return a.price > b.price ? -1 : 1;\n                })\n            };\n        default:\n            throw new Error(\"\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u044B\\u0439 \\u0442\\u0438\\u043F \\u0441\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u043A\\u0438\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlLWNvbXBvbmVudHMvVG9wUGFnZUNvbXBvbmVudC9zb3J0LlJlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEQ7QUFVbkQsSUFBTUMsV0FBVyxHQUFHLFNBQUNDLEtBQXVCLEVBQUVDLE1BQW1CLEVBQXVCO0lBQzlGLE9BQVFBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNsQixLQUFLSix3RUFBZTtZQUNuQixPQUFPO2dCQUNOTSxJQUFJLEVBQUNOLHdFQUFlO2dCQUNwQk8sUUFBUSxFQUFDTCxLQUFLLENBQUNLLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDLFNBQUNFLENBQUMsRUFBQ0MsQ0FBQzsyQkFBR0QsQ0FBQyxDQUFDRSxhQUFhLEdBQUNELENBQUMsQ0FBQ0MsYUFBYSxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUM7aUJBQUEsQ0FBQzthQUN6RTtRQUNGLEtBQUtWLHVFQUFjO1lBQ2xCLE9BQU07Z0JBQ0xNLElBQUksRUFBQ04sdUVBQWM7Z0JBQ25CTyxRQUFRLEVBQUNMLEtBQUssQ0FBQ0ssUUFBUSxDQUFDRCxJQUFJLENBQUMsU0FBQ0UsQ0FBQyxFQUFDQyxDQUFDOzJCQUFHRCxDQUFDLENBQUNJLEtBQUssR0FBQ0gsQ0FBQyxDQUFDRyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQztpQkFBQSxDQUFDO2FBQ3pEO1FBQ0Y7WUFDQyxNQUFNLElBQUlDLEtBQUssQ0FBRSxrSUFBeUIsQ0FBQztLQUM1QztDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2UtY29tcG9uZW50cy9Ub3BQYWdlQ29tcG9uZW50L3NvcnQuUmVkdWNlci50cz9lODdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U29ydEVudW19IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NvcnQvU29ydC5wcm9wc1wiO1xyXG5pbXBvcnQge1Byb2R1Y3RNb2RlbH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdC5pbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFNvcnRBY3Rpb25zID0geyB0eXBlOiBTb3J0RW51bSB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRSZWR1Y2VyU3RhdGUge1xyXG5cdHNvcnQ6IFNvcnRFbnVtO1xyXG5cdHByb2R1Y3RzOiBQcm9kdWN0TW9kZWxbXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc29ydFJlZHVjZXIgPSAoc3RhdGU6IFNvcnRSZWR1Y2VyU3RhdGUsIGFjdGlvbjogU29ydEFjdGlvbnMpOiBTb3J0UmVkdWNlclN0YXRlID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFNvcnRFbnVtLlJhdGluZzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzb3J0OlNvcnRFbnVtLlJhdGluZyxcclxuXHRcdFx0XHRwcm9kdWN0czpzdGF0ZS5wcm9kdWN0cy5zb3J0KChhLGIpPT5hLmluaXRpYWxSYXRpbmc+Yi5pbml0aWFsUmF0aW5nPy0xOjEpXHJcblx0XHRcdH1cclxuXHRcdGNhc2UgU29ydEVudW0uUHJpY2U6XHJcblx0XHRcdHJldHVybntcclxuXHRcdFx0XHRzb3J0OlNvcnRFbnVtLlByaWNlLFxyXG5cdFx0XHRcdHByb2R1Y3RzOnN0YXRlLnByb2R1Y3RzLnNvcnQoKGEsYik9PmEucHJpY2U+Yi5wcmljZT8tMToxKVxyXG5cdFx0XHR9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IgKCfQndC10LLQtdGA0L3Ri9C5INGC0LjQvyDRgdC+0YDRgtC40YDQvtCy0LrQuCcpXHJcblx0fVxyXG59Il0sIm5hbWVzIjpbIlNvcnRFbnVtIiwic29ydFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJSYXRpbmciLCJzb3J0IiwicHJvZHVjdHMiLCJhIiwiYiIsImluaXRpYWxSYXRpbmciLCJQcmljZSIsInByaWNlIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./page-components/TopPageComponent/sort.Reducer.ts\n"));

/***/ })

});