"use strict";
(() => {
var exports = {};
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(513);



const firstCategory = 0;
const Course = ({ menu , page , products  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: products && products.length
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* .withLayout */ .X)(Course));
const getStaticPaths = async ()=>{
    const { data: menu  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://courses-top.ru" + "/api/top-page/find", {
        firstCategory
    });
    console.log(menu.flatMap((m)=>m.pages.map((p)=>"/courses/" + p.alias)));
    return {
        paths: menu.flatMap((m)=>m.pages.map((p)=>"/courses/" + p.alias)),
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    if (!params) {
        return {
            notFound: true
        };
    }
    const { data: menu  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://courses-top.ru" + "/api/top-page/find", {
        firstCategory
    });
    console.log(menu.flatMap((m)=>m.pages.map((p)=>"/courses/" + p.alias)));
    const { data: page  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://courses-top.ru" + "/api/top-page/byAlias/" + params.alias);
    const { data: products  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://courses-top.ru" + "/api/product/find", {
        category: page.category,
        limit: 10
    });
    return {
        props: {
            menu,
            firstCategory,
            page,
            products
        }
    };
};


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [513], () => (__webpack_exec__(365)));
module.exports = __webpack_exports__;

})();