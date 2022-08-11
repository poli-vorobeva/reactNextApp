exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 960:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Iysso"
};


/***/ }),

/***/ 17:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Layout_wrapper__hGqD0",
	"header": "Layout_header__cY7N1",
	"sidebar": "Layout_sidebar__kBvn9",
	"body": "Layout_body__DYL38",
	"footer": "Layout_footer__kuIxM"
};


/***/ }),

/***/ 513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ withLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./Layout/Layout.module.css
var Layout_module = __webpack_require__(17);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./Sidebar/Sidebar.tsx

const Sidebar = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ...props,
        children: "Sidebar"
    });
};

;// CONCATENATED MODULE: ./Header/Header.tsx

const Header = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ...props,
        children: "Header"
    });
};

// EXTERNAL MODULE: ./Footer/Footer.module.css
var Footer_module = __webpack_require__(960);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(3);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(146);
;// CONCATENATED MODULE: ./Footer/Footer.tsx




const Footer = ({ className , ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: external_classnames_default()(className, (Footer_module_default()).footer),
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    "OwlTop 2020 - ",
                    (0,external_date_fns_.format)(new Date(), "yyyy"),
                    " \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                target: "_blank",
                children: "\u041F\u043E\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0437\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                target: "_blank",
                children: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./Layout/Layout.tsx





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                className: (Layout_module_default()).header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                className: (Layout_module_default()).sidebar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).body,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                className: (Layout_module_default()).footer
            })
        ]
    });
};
const withLayout = (Component)=>{
    return function withLayoutComponent(props) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...props
            })
        });
    };
};


/***/ })

};
;