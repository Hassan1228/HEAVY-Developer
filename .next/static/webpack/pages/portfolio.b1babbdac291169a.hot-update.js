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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/header */ \"./src/data/header.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header_NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header/NavItem */ \"./src/components/Header/NavItem.js\");\n/* harmony import */ var _MainFooter_FooterSeven__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainFooter/FooterSeven */ \"./src/components/MainFooter/FooterSeven.js\");\n/* harmony import */ var _BannerSection_PageBanner6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BannerSection/PageBanner6 */ \"./src/components/BannerSection/PageBanner6.js\");\n/* harmony import */ var _GallerySection_GallerySectionOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GallerySection/GallerySectionOne */ \"./src/components/GallerySection/GallerySectionOne.js\");\n/* harmony import */ var _MyComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MyComponent */ \"./src/components/MyComponent.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar navItems = _data_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navItems;\nfunction PORTFOLIOc() {\n    var _this1 = this;\n    _s();\n    var logo7 = _data_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logo7;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var paperMenu = {\n            $window: document.querySelector(\"#paper-window\"),\n            $paperFront: document.querySelector(\"#paper-front\"),\n            $hamburger: document.querySelector(\".hamburger\"),\n            offset: 1800,\n            pageHeight: document.querySelector(\"#paper-front\").offsetHeight,\n            open: function open() {\n                this.$window.classList.add(\"tilt\");\n                this.$hamburger.removeEventListener(\"click\", this.open.bind(this));\n                document.querySelector(\"#container\").addEventListener(\"click\", this.close.bind(this));\n                this.hamburgerFix(true);\n                console.log(\"opening...\");\n            },\n            close: function close() {\n                this.$window.classList.remove(\"tilt\");\n                document.querySelector(\"#container\").removeEventListener(\"click\", this.close.bind(this));\n                this.$hamburger.addEventListener(\"click\", this.open.bind(this));\n                this.hamburgerFix(false);\n                console.log(\"closing...\");\n            },\n            updateTransformOrigin: function updateTransformOrigin() {\n                var scrollTop = this.$window.scrollTop || document.documentElement.scrollTop;\n                var equation = (scrollTop + this.offset) / this.pageHeight * 100;\n                this.$paperFront.style.transformOrigin = \"left \".concat(equation, \"%\");\n            },\n            //hamburger icon fix to keep its position\n            hamburgerFix: function hamburgerFix(opening) {\n                if (opening) {\n                    this.$hamburger.style.position = \"absolute\";\n                    this.$hamburger.style.top = this.$window.scrollTop + 30 + \"px\";\n                } else {\n                    var _this = this;\n                    setTimeout(function() {\n                        _this.$hamburger.style.position = \"fixed\";\n                        _this.$hamburger.style.top = \"30px\";\n                    }, 300);\n                }\n            },\n            bindEvents: function bindEvents() {\n                this.$hamburger.addEventListener(\"click\", this.open.bind(this));\n                document.querySelector(\".close\").addEventListener(\"click\", this.close.bind(this));\n                this.$window.addEventListener(\"scroll\", this.updateTransformOrigin.bind(this));\n            },\n            init: function init() {\n                this.bindEvents();\n                this.updateTransformOrigin();\n            }\n        };\n        paperMenu.init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"paper-back\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"main-menu navbar-expand-md navbar-light\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"close\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"collapse navbar-collapse show clearfix\",\n                            id: \"navbarSupportedContent\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"navigation clearfix\",\n                                children: navItems.map(function(navItem) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_NavItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        navItem: navItem\n                                    }, navItem.id, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                    lineNumber: 78,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"paper-window\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"paper-front\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            className: \"nav-logoa\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Image, {\n                                className: \"nav-logo1\",\n                                src: logo7.src,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                lineNumber: 97,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hamburger\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                lineNumber: 101,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BannerSection_PageBanner6__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        title: \"Portfolio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MyComponent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 1\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainFooter_FooterSeven__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Downloads\\\\Majectics-master\\\\Majectics-master\\\\src\\\\components\\\\PORTFOLIOc.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PORTFOLIOc, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = PORTFOLIOc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PORTFOLIOc);\nvar _c;\n$RefreshReg$(_c, \"PORTFOLIOc\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCw4REFBQ21ELFNBQU87Ozs7d0NBQUc7OENBQ1gsOERBQUNBLFNBQU87Ozs7d0NBQUc7Ozs7OztnQ0FDVDs7Ozs7O3dCQUNKOzs7OztvQkFDSjs7b0JBQ1AsQ0FDTDtDQUNMO0dBbEhROUMsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBb0huQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BPUlRGT0xJT2MuanM/NTFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGhlYWRlckRhdGEgZnJvbSBcIkAvZGF0YS9oZWFkZXJcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBOYXZJdGVtIGZyb20gJy4vSGVhZGVyL05hdkl0ZW0nO1xuXG5pbXBvcnQgRm9vdGVyU2V2ZW4gZnJvbSAnLi9NYWluRm9vdGVyL0Zvb3RlclNldmVuJztcbmltcG9ydCBQYWdlQmFubmVyNiBmcm9tICcuL0Jhbm5lclNlY3Rpb24vUGFnZUJhbm5lcjYnO1xuaW1wb3J0IEdhbGxlcnlTZWN0aW9uT25lIGZyb20gJy4vR2FsbGVyeVNlY3Rpb24vR2FsbGVyeVNlY3Rpb25PbmUnO1xuaW1wb3J0IE15Q29tcG9uZW50IGZyb20gJy4vTXlDb21wb25lbnQnO1xuXG5cbmNvbnN0IHsgbmF2SXRlbXMsIH0gPSBoZWFkZXJEYXRhO1xuXG5mdW5jdGlvbiBQT1JURk9MSU9jKCkge1xuICAgIGNvbnN0IHsgbG9nbzcgfSA9IGhlYWRlckRhdGE7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcGFwZXJNZW51ID0ge1xuICAgICAgICAgICAgJHdpbmRvdzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcGVyLXdpbmRvdycpLFxuICAgICAgICAgICAgJHBhcGVyRnJvbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXBlci1mcm9udCcpLFxuICAgICAgICAgICAgJGhhbWJ1cmdlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpLFxuICAgICAgICAgICAgb2Zmc2V0OiAxODAwLFxuICAgICAgICAgICAgcGFnZUhlaWdodDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhcGVyLWZyb250Jykub2Zmc2V0SGVpZ2h0LFxuXG4gICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kd2luZG93LmNsYXNzTGlzdC5hZGQoJ3RpbHQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRoYW1idXJnZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbWJ1cmdlckZpeCh0cnVlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlbmluZy4uLicpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kd2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3RpbHQnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJykucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbWJ1cmdlckZpeChmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NpbmcuLi4nKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGVUcmFuc2Zvcm1PcmlnaW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLiR3aW5kb3cuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgY29uc3QgZXF1YXRpb24gPSAoc2Nyb2xsVG9wICsgdGhpcy5vZmZzZXQpIC8gdGhpcy5wYWdlSGVpZ2h0ICogMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcGVyRnJvbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gYGxlZnQgJHtlcXVhdGlvbn0lYDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvL2hhbWJ1cmdlciBpY29uIGZpeCB0byBrZWVwIGl0cyBwb3NpdGlvblxuICAgICAgICAgICAgaGFtYnVyZ2VyRml4OiBmdW5jdGlvbiAob3BlbmluZykge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGhhbWJ1cmdlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGhhbWJ1cmdlci5zdHlsZS50b3AgPSB0aGlzLiR3aW5kb3cuc2Nyb2xsVG9wICsgMzAgKyAncHgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGFtYnVyZ2VyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGhhbWJ1cmdlci5zdHlsZS50b3AgPSAnMzBweCc7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnVwZGF0ZVRyYW5zZm9ybU9yaWdpbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgcGFwZXJNZW51LmluaXQoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFwZXItYmFja1wiPlxuXG5cbiAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW1lbnUgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZVwiIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93IGNsZWFyZml4XCJcbiAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24gY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICB7bmF2SXRlbXMubWFwKChuYXZJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TmF2SXRlbSBuYXZJdGVtPXtuYXZJdGVtfSBrZXk9e25hdkl0ZW0uaWR9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cInBhcGVyLXdpbmRvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYXBlci1mcm9udFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT0nbmF2LWxvZ29hJyBwYXNzSHJlZj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cIm5hdi1sb2dvMVwiIHNyYz17bG9nbzcuc3JjfSBhbHQ9XCJcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uID5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlQmFubmVyNiB0aXRsZT1cIlBvcnRmb2xpb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuPE15Q29tcG9uZW50Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXJTZXZlbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUE9SVEZPTElPYztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImhlYWRlckRhdGEiLCJJbWFnZSIsIkxpbmsiLCJOYXZJdGVtIiwiRm9vdGVyU2V2ZW4iLCJQYWdlQmFubmVyNiIsIkdhbGxlcnlTZWN0aW9uT25lIiwiTXlDb21wb25lbnQiLCJuYXZJdGVtcyIsIlBPUlRGT0xJT2MiLCJsb2dvNyIsInBhcGVyTWVudSIsIiR3aW5kb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkcGFwZXJGcm9udCIsIiRoYW1idXJnZXIiLCJvZmZzZXQiLCJwYWdlSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3BlbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlIiwiaGFtYnVyZ2VyRml4IiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsInVwZGF0ZVRyYW5zZm9ybU9yaWdpbiIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImVxdWF0aW9uIiwic3R5bGUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJvcGVuaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJzZXRUaW1lb3V0IiwiYmluZEV2ZW50cyIsImluaXQiLCJkaXYiLCJpZCIsIm5hdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwibmF2SXRlbSIsImhyZWYiLCJwYXNzSHJlZiIsInNyYyIsImFsdCIsInNwYW4iLCJzZWN0aW9uIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PORTFOLIOc.js\n");

/***/ })

});