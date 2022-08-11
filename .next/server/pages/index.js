(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 692:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "ButtonTag_button__1S71_",
	"primary": "ButtonTag_primary__LOPn_",
	"ghost": "ButtonTag_ghost__pCXUO",
	"arrow": "ButtonTag_arrow__SCWaI",
	"down": "ButtonTag_down__kBZqX"
};


/***/ }),

/***/ 267:
/***/ ((module) => {

// Exports
module.exports = {
	"h1": "Htag_h1__LidGa",
	"h2": "Htag_h2__ebpNZ",
	"h3": "Htag_h3__vsc_2"
};


/***/ }),

/***/ 640:
/***/ ((module) => {

// Exports
module.exports = {
	"s": "Ptag_s__xWvJB",
	"m": "Ptag_m__zvUB2",
	"l": "Ptag_l___I45G"
};


/***/ }),

/***/ 375:
/***/ ((module) => {

// Exports
module.exports = {
	"star": "Rating_star__yRLz9",
	"fill": "Rating_fill__8j097",
	"editable": "Rating_editable__IHFCp"
};


/***/ }),

/***/ 394:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": "Tag_tag__X83Wf",
	"s": "Tag_s__fiLlf",
	"m": "Tag_m__X07Rv",
	"ghost": "Tag_ghost__cjXA7",
	"red": "Tag_red__WOgn_",
	"grey": "Tag_grey__qvkLL",
	"green": "Tag_green__vZgAe",
	"primary": "Tag_primary__yjkcB"
};


/***/ }),

/***/ 158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Htag/Htag.module.css
var Htag_module = __webpack_require__(267);
var Htag_module_default = /*#__PURE__*/__webpack_require__.n(Htag_module);
;// CONCATENATED MODULE: ./components/Htag/Htag.tsx


const Htag = ({ tag , children  })=>{
    switch(tag){
        case "h1":
            return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Htag_module_default()).h1,
                children: children
            });
        case "h2":
            return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (Htag_module_default()).h2,
                children: children
            });
        case "h3":
            return /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (Htag_module_default()).h3,
                children: children
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }
};

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(3);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./components/ButtonTag/ButtonTag.module.css
var ButtonTag_module = __webpack_require__(692);
var ButtonTag_module_default = /*#__PURE__*/__webpack_require__.n(ButtonTag_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/ButtonTag/arrow.svg
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgArrow = function SvgArrow(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    height: 20,
    width: 20
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m8 15-1.062-1.062L10.875 10 6.938 6.062 8 5l5 5Z"
  })));
};

/* harmony default export */ const ButtonTag_arrow = (SvgArrow);
;// CONCATENATED MODULE: ./components/ButtonTag/ButtonTag.tsx




const ButtonTag = ({ children , arrow ="none" , appearance , className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: external_classnames_default()((ButtonTag_module_default()).button, className, {
            [(ButtonTag_module_default()).arrow]: arrow != "none"
        }, {
            [(ButtonTag_module_default()).down]: arrow === "down"
        }, {
            [(ButtonTag_module_default()).primary]: appearance === "primary"
        }, {
            [(ButtonTag_module_default()).ghost]: appearance === "ghost"
        }),
        children: [
            children,
            arrow !== "none" && /*#__PURE__*/ jsx_runtime_.jsx(ButtonTag_arrow, {})
        ]
    });
};

// EXTERNAL MODULE: ./components/Ptag/Ptag.module.css
var Ptag_module = __webpack_require__(640);
var Ptag_module_default = /*#__PURE__*/__webpack_require__.n(Ptag_module);
;// CONCATENATED MODULE: ./components/Ptag/Ptag.tsx



const Ptag = ({ children , size ="s" , className , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: external_classnames_default()(className, {
            [(Ptag_module_default()).s]: size == "s",
            [(Ptag_module_default()).m]: size == "m",
            [(Ptag_module_default()).l]: size == "l"
        }),
        ...props,
        children: children
    });
};

// EXTERNAL MODULE: ./components/Tag/Tag.module.css
var Tag_module = __webpack_require__(394);
var Tag_module_default = /*#__PURE__*/__webpack_require__.n(Tag_module);
;// CONCATENATED MODULE: ./components/Tag/Tag.tsx



//import React from "react";
const Tag = ({ children , size ="m" , color ="ghost" , href , className ="" , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((Tag_module_default()).tag, className, {
            [(Tag_module_default()).s]: size == "s",
            [(Tag_module_default()).m]: size == "m",
            [(Tag_module_default()).ghost]: color == "ghost",
            [(Tag_module_default()).red]: color == "red",
            [(Tag_module_default()).gray]: color == "gray",
            [(Tag_module_default()).primary]: color == "primary",
            [(Tag_module_default()).green]: color == "green"
        }),
        ...props,
        children: href ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: href,
            children: children
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./components/Rating/star.svg
var star_path;

function star_extends() { star_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return star_extends.apply(this, arguments); }



var SvgStar = function SvgStar(props) {
  return /*#__PURE__*/external_react_.createElement("svg", star_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#e0e0e0",
    height: 20,
    width: 20
  }, props), star_path || (star_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "m5.062 18 1.876-6.062L2 8.292h6.062L10 2l1.938 6.292H18l-4.938 3.646L14.938 18 10 14.25Z"
  })));
};

/* harmony default export */ const star = (SvgStar);
// EXTERNAL MODULE: ./components/Rating/Rating.module.css
var Rating_module = __webpack_require__(375);
var Rating_module_default = /*#__PURE__*/__webpack_require__.n(Rating_module);
;// CONCATENATED MODULE: ./components/Rating/Rating.tsx





const Rating = ({ isEditable =false , rating , setRating , ...props })=>{
    const { 0: ratingArray , 1: setRatingArray  } = (0,external_react_.useState)(new Array(5).fill(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})));
    (0,external_react_.useEffect)(()=>{
        constructRating(rating);
    }, [
        rating
    ]);
    const constructRating = (currentRating)=>{
        const updatedArray = ratingArray.map((el, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()((Rating_module_default()).star, {
                    [(Rating_module_default()).fill]: i < currentRating,
                    [(Rating_module_default()).editable]: isEditable
                }),
                onMouseEnter: ()=>changeDisplay(i + 1),
                onMouseLeave: ()=>changeDisplay(rating),
                onClick: ()=>onClick(i + 1),
                children: /*#__PURE__*/ jsx_runtime_.jsx(star, {
                    tabIndex: isEditable ? 0 : -1,
                    onKeyDown: (e)=>isEditable && handleSpace(i + 1, e)
                })
            });
        });
        setRatingArray(updatedArray);
    };
    const handleSpace = (i, e)=>{
        if (e.code != "Space" || !setRating) return;
        setRating(i);
    };
    const onClick = (i)=>{
        if (!isEditable || !setRating) return;
        setRating(i);
    };
    const changeDisplay = (i)=>{
        if (!isEditable) return;
        constructRating(i);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ...props,
        children: ratingArray.map((r, i)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: r
            }, i))
    });
};

;// CONCATENATED MODULE: ./components/index.ts






// EXTERNAL MODULE: ./Layout/Layout.tsx + 3 modules
var Layout = __webpack_require__(513);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/index.tsx








const Home = ({ menu , firstCategory  })=>{
    const { 0: rating , 1: setRating  } = (0,external_react_.useState)(4);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Htag, {
                tag: "h2",
                children: "TITLTe2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Htag, {
                tag: "h1",
                children: "TITLTe1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Htag, {
                tag: "h3",
                children: "TITLTe3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonTag, {
                appearance: "primary",
                className: "button",
                arrow: "right",
                children: "PrimButton"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ButtonTag, {
                appearance: "ghost",
                className: "button",
                arrow: "down",
                children: "GhostButon"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Ptag, {
                size: "l",
                className: "",
                children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus eaque illum inventore iste iure laborum minima, quisquam sequi temporibus."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Ptag, {
                size: "s",
                className: "",
                children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus eaque illum inventore iste iure laborum minima, quisquam sequi temporibus."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Tag, {
                size: "m",
                className: "tag",
                color: "red",
                children: "TAGelement"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Rating, {
                rating: rating,
                isEditable: true,
                setRating: setRating
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Rating, {
                rating: 1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Rating, {
                rating: 3
            }),
            menu.map((e)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: e._id.secondCategory
                }, e._id.secondCategory);
            })
        ]
    });
};
/* harmony default export */ const pages = ((0,Layout/* withLayout */.X)(Home));
const getStaticProps = async ()=>{
    const firstCategory = 0;
    const { data: menu  } = await external_axios_default().post("https://courses-top.ru" + "/api/top-page/find", {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};


/***/ }),

/***/ 167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [513], () => (__webpack_exec__(158)));
module.exports = __webpack_exports__;

})();