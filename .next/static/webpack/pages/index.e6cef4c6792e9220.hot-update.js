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

/***/ "./components/Rating/Rating.tsx":
/*!**************************************!*\
  !*** ./components/Rating/Rating.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Rating\": function() { return /* binding */ Rating; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_without_properties.mjs */ \"./node_modules/@swc/helpers/src/_object_without_properties.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star.svg */ \"./components/Rating/star.svg\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Rating_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Rating.module.css */ \"./components/Rating/Rating.module.css\");\n/* harmony import */ var _Rating_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Rating_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Rating = function(_param) {\n    var _this1 = _this;\n    var _isEditable = _param.isEditable, isEditable = _isEditable === void 0 ? false : _isEditable, rating = _param.rating, setRating = _param.setRating, props = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_param, [\n        \"isEditable\",\n        \"rating\",\n        \"setRating\"\n    ]);\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(5).fill(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false))), ratingArray = ref[0], setRatingArray = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        constructRating(rating);\n    }, [\n        rating\n    ]);\n    var constructRating = function(currentRating) {\n        var _this = _this1;\n        var updatedArray = ratingArray.map(function(el, i) {\n            var _obj;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_star_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_Rating_module_css__WEBPACK_IMPORTED_MODULE_5___default().star), (_obj = {}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_obj, (_Rating_module_css__WEBPACK_IMPORTED_MODULE_5___default().fill), i < currentRating), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_obj, (_Rating_module_css__WEBPACK_IMPORTED_MODULE_5___default().editable), isEditable), _obj)),\n                onMouseEnter: function() {\n                    return changeDisplay(i + 1);\n                },\n                onMouseLeave: function() {\n                    return changeDisplay(rating);\n                },\n                onClick: function() {\n                    return onClick(i + 1);\n                },\n                tabIndex: isEditable ? 0 : -1,\n                onKeyDown: function(e) {\n                    return isEditable && handleSpace(i + 1, e);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\code\\\\reactNext\\\\components\\\\Rating\\\\Rating.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, _this);\n        });\n        setRatingArray(updatedArray);\n    };\n    var handleSpace = function(i, e) {\n        if (e.key != \"Space\" && setRating) return;\n        setRating(i);\n    };\n    var onClick = function(i) {\n        if (!isEditable || !setRating) return;\n        setRating(i);\n    };\n    var changeDisplay = function(i) {\n        if (!isEditable) return;\n        constructRating(i);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, props), {\n        children: ratingArray.map(function(r, i) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: r\n            }, i, false, {\n                fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\code\\\\reactNext\\\\components\\\\Rating\\\\Rating.tsx\",\n                lineNumber: 47,\n                columnNumber: 28\n            }, _this1);\n        })\n    }), void 0, false, {\n        fileName: \"C:\\\\Users\\\\poli8\\\\Desktop\\\\code\\\\reactNext\\\\components\\\\Rating\\\\Rating.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, _this);\n};\n\n_s(Rating, \"8AF+u7S04+KrXivMoZ+QEmP//lQ=\");\n_c = Rating;\nvar _c;\n$RefreshReg$(_c, \"Rating\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHMvUmF0aW5nL1JhdGluZy50c3g/ZjNjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3Rhckljb24gZnJvbSAnLi9zdGFyLnN2ZydcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7aW5zcGVjdH0gZnJvbSBcInV0aWxcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhdGluZy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge1JhdGluZ1Byb3BzfSBmcm9tIFwiLi9SYXRpbmcucHJvcHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSYXRpbmc9KHtpc0VkaXRhYmxlPWZhbHNlLHJhdGluZyxzZXRSYXRpbmcsLi4ucHJvcHN9OlJhdGluZ1Byb3BzKT0+e1xyXG5cdGNvbnN0IFtyYXRpbmdBcnJheSxzZXRSYXRpbmdBcnJheV09dXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4obmV3IEFycmF5KDUpXHJcblx0XHQuZmlsbCg8PjwvPikpXHJcblx0dXNlRWZmZWN0KCgpPT57XHJcblx0XHRjb25zdHJ1Y3RSYXRpbmcocmF0aW5nKVxyXG5cdH0sW3JhdGluZ10pXHJcblxyXG5cdGNvbnN0IGNvbnN0cnVjdFJhdGluZz0oY3VycmVudFJhdGluZzpudW1iZXIpPT57XHJcblx0XHRjb25zdCB1cGRhdGVkQXJyYXk9IHJhdGluZ0FycmF5Lm1hcCgoZWwsaSk9PntcclxuXHRcdFx0cmV0dXJuKFxyXG5cdFx0XHRcdDxTdGFySWNvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnN0YXIse1xyXG5cdFx0XHRcdFx0W3N0eWxlcy5maWxsXTppPGN1cnJlbnRSYXRpbmcsXHJcblx0XHRcdFx0XHRbc3R5bGVzLmVkaXRhYmxlXTppc0VkaXRhYmxlXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdFx0b25Nb3VzZUVudGVyPXsoKT0+Y2hhbmdlRGlzcGxheShpKzEpfVxyXG5cdFx0XHRcdG9uTW91c2VMZWF2ZT17KCk9PmNoYW5nZURpc3BsYXkocmF0aW5nKX1cclxuXHRcdFx0XHRvbkNsaWNrPXsoKT0+b25DbGljayhpKzEpfVxyXG5cdFx0XHRcdHRhYkluZGV4PXtpc0VkaXRhYmxlPzA6LTF9XHJcblx0XHRcdFx0b25LZXlEb3duPXsoZTpLZXlib2FyZEV2ZW50KT0+aXNFZGl0YWJsZSAmJiBoYW5kbGVTcGFjZShpKzEsZSl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KVxyXG5cdFx0fSlcclxuXHRcdHNldFJhdGluZ0FycmF5KHVwZGF0ZWRBcnJheSlcclxuXHR9XHJcblx0Y29uc3QgaGFuZGxlU3BhY2U9KGk6bnVtYmVyLGU6S2V5Ym9hcmRFdmVudCk9PntcclxuXHRcdGlmKGUua2V5IT1cIlNwYWNlXCIgJiYgc2V0UmF0aW5nKSByZXR1cm5cclxuXHRcdHNldFJhdGluZyhpKVxyXG5cdH1cclxuXHRjb25zdCBvbkNsaWNrPShpOm51bWJlcik9PntcclxuXHRcdGlmKCFpc0VkaXRhYmxlfHwhc2V0UmF0aW5nKXJldHVyblxyXG5cdFx0c2V0UmF0aW5nKGkpXHJcblx0fVxyXG5cdGNvbnN0IGNoYW5nZURpc3BsYXk9KGk6bnVtYmVyKT0+e1xyXG5pZighaXNFZGl0YWJsZSlyZXR1cm5cclxuXHRcdGNvbnN0cnVjdFJhdGluZyhpKVxyXG5cdH1cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IHsuLi5wcm9wc30+XHJcblx0XHRcdHtyYXRpbmdBcnJheS5tYXAoKHIsaSk9PjxzcGFuIGtleT17aX0+e3J9PC9zcGFuPil9XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdGFySWNvbiIsImNuIiwic3R5bGVzIiwiUmF0aW5nIiwiaXNFZGl0YWJsZSIsInJhdGluZyIsInNldFJhdGluZyIsInByb3BzIiwiQXJyYXkiLCJmaWxsIiwicmF0aW5nQXJyYXkiLCJzZXRSYXRpbmdBcnJheSIsImNvbnN0cnVjdFJhdGluZyIsImN1cnJlbnRSYXRpbmciLCJ1cGRhdGVkQXJyYXkiLCJtYXAiLCJlbCIsImkiLCJjbGFzc05hbWUiLCJzdGFyIiwiZWRpdGFibGUiLCJvbk1vdXNlRW50ZXIiLCJjaGFuZ2VEaXNwbGF5Iiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsInRhYkluZGV4Iiwib25LZXlEb3duIiwiZSIsImhhbmRsZVNwYWNlIiwia2V5IiwiZGl2IiwiciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Rating/Rating.tsx\n"));

/***/ })

});