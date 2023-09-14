"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./src/components/PORTFOLIOc.js":
/*!**************************************!*\
  !*** ./src/components/PORTFOLIOc.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/header */ \"./src/data/header.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header_NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header/NavItem */ \"./src/components/Header/NavItem.js\");\n/* harmony import */ var _MainFooter_FooterSeven__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainFooter/FooterSeven */ \"./src/components/MainFooter/FooterSeven.js\");\n/* harmony import */ var _BannerSection_PageBanner6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BannerSection/PageBanner6 */ \"./src/components/BannerSection/PageBanner6.js\");\n/* harmony import */ var _GallerySection_GallerySectionOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GallerySection/GallerySectionOne */ \"./src/components/GallerySection/GallerySectionOne.js\");\n/* harmony import */ var _MyComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyComponent */ \"./src/components/MyComponent.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar navItems = _data_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navItems;\nfunction PORTFOLIOc() {\n    var _this1 = this;\n    _s();\n    var logo7 = _data_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logo7;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var paperMenu = {\n            $window: document.querySelector(\"#paper-window\"),\n            $paperFront: document.querySelector(\"#paper-front\"),\n            $hamburger: document.querySelector(\".hamburger\"),\n            offset: 1800,\n            pageHeight: document.querySelector(\"#paper-front\").offsetHeight,\n            open: function open() {\n                this.$window.classList.add(\"tilt\");\n                this.$hamburger.removeEventListener(\"click\", this.open.bind(this));\n                document.querySelector(\"#container\").addEventListener(\"click\", this.close.bind(this));\n                this.hamburgerFix(true);\n                console.log(\"opening...\");\n            },\n            close: function close() {\n                this.$window.classList.remove(\"tilt\");\n                document.querySelector(\"#container\").removeEventListener(\"click\", this.close.bind(this));\n                this.$hamburger.addEventListener(\"click\", this.open.bind(this));\n                this.hamburgerFix(false);\n                console.log(\"closing...\");\n            },\n            updateTransformOrigin: function updateTransformOrigin() {\n                var scrollTop = this.$window.scrollTop || document.documentElement.scrollTop;\n                var equation = (scrollTop + this.offset) / this.pageHeight * 100;\n                this.$paperFront.style.transformOrigin = \"left \".concat(equation, \"%\");\n            },\n            //hamburger icon fix to keep its position\n            hamburgerFix: function hamburgerFix(opening) {\n                if (opening) {\n                    this.$hamburger.style.position = \"absolute\";\n                    this.$hamburger.style.top = this.$window.scrollTop + 30 + \"px\";\n                } else {\n                    var _this = this;\n                    setTimeout(function() {\n                        _this.$hamburger.style.position = \"fixed\";\n                        _this.$hamburger.style.top = \"30px\";\n                    }, 300);\n                }\n            },\n            bindEvents: function bindEvents() {\n                this.$hamburger.addEventListener(\"click\", this.open.bind(this));\n                document.querySelector(\".close\").addEventListener(\"click\", this.close.bind(this));\n                this.$window.addEventListener(\"scroll\", this.updateTransformOrigin.bind(this));\n            },\n            init: function init() {\n                this.bindEvents();\n                this.updateTransformOrigin();\n            }\n        };\n        paperMenu.init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"paper-back\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"main-menu navbar-expand-md navbar-light\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"close\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"collapse navbar-collapse show clearfix\",\n                            id: \"navbarSupportedContent\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"navigation clearfix\",\n                                children: navItems.map(function(navItem) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_NavItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        navItem: navItem\n                                    }, navItem.id, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                    lineNumber: 78,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"paper-window\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"paper-front\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            className: \"nav-logoa\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Image, {\n                                className: \"nav-logo1\",\n                                src: logo7.src,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                lineNumber: 97,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hamburger\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                lineNumber: 101,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BannerSection_PageBanner6__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            title: \"Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainFooter_FooterSeven__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PORTFOLIOc, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = PORTFOLIOc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PORTFOLIOc);\nvar _c;\n$RefreshReg$(_c, \"PORTFOLIOc\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDb0QsU0FBTzs7Ozt3Q0FBRzs4Q0FDWCw4REFBQ0EsU0FBTzs7Ozt3Q0FBRzs7Ozs7O2dDQUNUOzs7Ozs7d0JBQ0o7Ozs7O29CQUNKOztvQkFDUCxDQUNMO0NBQ0w7R0FuSFEvQyxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFxSG5CLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUE9SVEZPTElPYy5qcz81MWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaGVhZGVyRGF0YSBmcm9tIFwiQC9kYXRhL2hlYWRlclwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE5hdkl0ZW0gZnJvbSAnLi9IZWFkZXIvTmF2SXRlbSc7XG5cbmltcG9ydCBGb290ZXJTZXZlbiBmcm9tICcuL01haW5Gb290ZXIvRm9vdGVyU2V2ZW4nO1xuaW1wb3J0IFBhZ2VCYW5uZXI2IGZyb20gJy4vQmFubmVyU2VjdGlvbi9QYWdlQmFubmVyNic7XG5pbXBvcnQgR2FsbGVyeVNlY3Rpb25PbmUgZnJvbSAnLi9HYWxsZXJ5U2VjdGlvbi9HYWxsZXJ5U2VjdGlvbk9uZSc7XG5pbXBvcnQgTXlDb21wb25lbnQgZnJvbSAnLi9NeUNvbXBvbmVudCc7XG5cblxuY29uc3QgeyBuYXZJdGVtcywgfSA9IGhlYWRlckRhdGE7XG5cbmZ1bmN0aW9uIFBPUlRGT0xJT2MoKSB7XG4gICAgY29uc3QgeyBsb2dvNyB9ID0gaGVhZGVyRGF0YTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXBlck1lbnUgPSB7XG4gICAgICAgICAgICAkd2luZG93OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFwZXItd2luZG93JyksXG4gICAgICAgICAgICAkcGFwZXJGcm9udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcGVyLWZyb250JyksXG4gICAgICAgICAgICAkaGFtYnVyZ2VyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyksXG4gICAgICAgICAgICBvZmZzZXQ6IDE4MDAsXG4gICAgICAgICAgICBwYWdlSGVpZ2h0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFwZXItZnJvbnQnKS5vZmZzZXRIZWlnaHQsXG5cbiAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR3aW5kb3cuY2xhc3NMaXN0LmFkZCgndGlsdCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGhhbWJ1cmdlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFtYnVyZ2VyRml4KHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvcGVuaW5nLi4uJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR3aW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgndGlsdCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFtYnVyZ2VyRml4KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xvc2luZy4uLicpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZVRyYW5zZm9ybU9yaWdpbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuJHdpbmRvdy5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICBjb25zdCBlcXVhdGlvbiA9IChzY3JvbGxUb3AgKyB0aGlzLm9mZnNldCkgLyB0aGlzLnBhZ2VIZWlnaHQgKiAxMDA7XG4gICAgICAgICAgICAgICAgdGhpcy4kcGFwZXJGcm9udC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBgbGVmdCAke2VxdWF0aW9ufSVgO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vaGFtYnVyZ2VyIGljb24gZml4IHRvIGtlZXAgaXRzIHBvc2l0aW9uXG4gICAgICAgICAgICBoYW1idXJnZXJGaXg6IGZ1bmN0aW9uIChvcGVuaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGFtYnVyZ2VyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGFtYnVyZ2VyLnN0eWxlLnRvcCA9IHRoaXMuJHdpbmRvdy5zY3JvbGxUb3AgKyAzMCArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRoYW1idXJnZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGFtYnVyZ2VyLnN0eWxlLnRvcCA9ICczMHB4JztcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMudXBkYXRlVHJhbnNmb3JtT3JpZ2luLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBwYXBlck1lbnUuaW5pdCgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYXBlci1iYWNrXCI+XG5cblxuICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1haW4tbWVudSBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlXCIgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIHNob3cgY2xlYXJmaXhcIlxuICAgICAgICAgICAgICBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKG5hdkl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIG5hdkl0ZW09e25hdkl0ZW19IGtleT17bmF2SXRlbS5pZH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFwZXItd2luZG93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhcGVyLWZyb250XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSduYXYtbG9nb2EnIHBhc3NIcmVmPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwibmF2LWxvZ28xXCIgc3JjPXtsb2dvNy5zcmN9IGFsdD1cIlwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlQmFubmVyNiB0aXRsZT1cIlBvcnRmb2xpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE15Q29tcG9uZW50Lz5cblxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXJTZXZlbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUE9SVEZPTElPYztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImhlYWRlckRhdGEiLCJJbWFnZSIsIkxpbmsiLCJOYXZJdGVtIiwiRm9vdGVyU2V2ZW4iLCJQYWdlQmFubmVyNiIsIkdhbGxlcnlTZWN0aW9uT25lIiwiTXlDb21wb25lbnQiLCJuYXZJdGVtcyIsIlBPUlRGT0xJT2MiLCJsb2dvNyIsInBhcGVyTWVudSIsIiR3aW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkcGFwZXJGcm9udCIsIiRoYW1idXJnZXIiLCJvZmZzZXQiLCJwYWdlSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3BlbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlIiwiaGFtYnVyZ2VyRml4IiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsInVwZGF0ZVRyYW5zZm9ybU9yaWdpbiIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImVxdWF0aW9uIiwic3R5bGUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJvcGVuaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJzZXRUaW1lb3V0IiwiYmluZEV2ZW50cyIsImluaXQiLCJkaXYiLCJpZCIsIm5hdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwibmF2SXRlbSIsImhyZWYiLCJwYXNzSHJlZiIsInNyYyIsImFsdCIsInNwYW4iLCJ0aXRsZSIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PORTFOLIOc.js\n");

/***/ })

});