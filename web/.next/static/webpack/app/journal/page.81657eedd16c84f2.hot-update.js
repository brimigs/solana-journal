"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/journal/page",{

/***/ "(app-client)/./components/journal/journal-ui.tsx":
/*!*******************************************!*\
  !*** ./components/journal/journal-ui.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JournalCreate\": function() { return /* binding */ JournalCreate; },\n/* harmony export */   \"JournalList\": function() { return /* binding */ JournalList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ \"(app-client)/../node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ui-layout */ \"(app-client)/./components/ui/ui-layout.tsx\");\n/* harmony import */ var _cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cluster/cluster-ui */ \"(app-client)/./components/cluster/cluster-ui.tsx\");\n/* harmony import */ var _journal_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./journal-data-access */ \"(app-client)/./components/journal/journal-data-access.tsx\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! process */ \"(app-client)/../node_modules/next/dist/build/polyfills/process.js\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ JournalCreate,JournalList auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n// import { useMemo } from 'react';\n\n\n\n\nfunction JournalCreate() {\n    _s();\n    const { createEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_4__.useJournalProgram)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"btn btn-xs lg:btn-md btn-primary\",\n        onClick: ()=>createEntry.mutateAsync(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Keypair.generate()),\n        disabled: createEntry.isPending,\n        children: [\n            \"Create Journal Entry \",\n            createEntry.isPending && \"...\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalCreate, \"6HgKRuqZQBWxoY2LfomgJbdcl1k=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_4__.useJournalProgram\n    ];\n});\n_c = JournalCreate;\nfunction JournalList() {\n    var _getProgramAccount_data, _accounts_data, _accounts_data1;\n    _s1();\n    const { accounts , getProgramAccount  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_4__.useJournalProgram)();\n    if (getProgramAccount.isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, this);\n    }\n    if (!((_getProgramAccount_data = getProgramAccount.data) === null || _getProgramAccount_data === void 0 ? void 0 : _getProgramAccount_data.value)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-info flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Program account not found. Make sure you have deployed the program and are on the correct cluster.\"\n            }, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6\",\n        children: accounts.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, this) : ((_accounts_data = accounts.data) === null || _accounts_data === void 0 ? void 0 : _accounts_data.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid md:grid-cols-2 gap-4\",\n            children: (_accounts_data1 = accounts.data) === null || _accounts_data1 === void 0 ? void 0 : _accounts_data1.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JournalCard, {\n                    account: account.publicKey\n                }, account.publicKey.toString(), false, {\n                    fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl\",\n                    children: \"No accounts\"\n                }, void 0, false, {\n                    fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this),\n                \"No accounts found. Create one above to get started.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 57,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s1(JournalList, \"ODkGGbMi85Tkf3ZOOaPAIBMWQ/w=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_4__.useJournalProgram\n    ];\n});\n_c1 = JournalList;\nfunction JournalCard(param) {\n    let { account  } = param;\n    _s2();\n    const { accountQuery , updateEntry , deleteEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_4__.useJournalProgramAccount)({\n        account\n    });\n    return accountQuery.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"loading loading-spinner loading-lg\"\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card card-bordered border-base-300 border-4 text-neutral-content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body items-center text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"card-title justify-center text-3xl cursor-pointer\",\n                        onClick: ()=>accountQuery.refetch(),\n                        children: process__WEBPACK_IMPORTED_MODULE_5__.title\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-actions justify-around\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-xs lg:btn-md btn-outline\",\n                            onClick: ()=>updateEntry.mutateAsync(),\n                            disabled: updateEntry.isPending,\n                            children: \"Update Journal Entry\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_3__.ExplorerLink, {\n                                    path: \"account/\".concat(account),\n                                    label: (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.ellipsify)(account.toString())\n                                }, void 0, false, {\n                                    fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-xs btn-secondary btn-outline\",\n                                onClick: ()=>{\n                                    if (!window.confirm(\"Are you sure you want to close this account?\")) {\n                                        return;\n                                    }\n                                    return deleteEntry.mutateAsync();\n                                },\n                                disabled: deleteEntry.isPending,\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s2(JournalCard, \"8Gv5E+0ZEsKcCwNuvb0FUiJIeu8=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_4__.useJournalProgramAccount\n    ];\n});\n_c2 = JournalCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"JournalCreate\");\n$RefreshReg$(_c1, \"JournalList\");\n$RefreshReg$(_c2, \"JournalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9qb3VybmFsL2pvdXJuYWwtdWkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXFEO0FBQ3JELG1DQUFtQztBQUNTO0FBQ1M7QUFJdEI7QUFDQztBQUV6QixTQUFTTTs7SUFDZCxNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHSix1RUFBaUJBO0lBRXpDLHFCQUNFLDhEQUFDSztRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTUgsWUFBWUksWUFBWVgsNkRBQWdCWTtRQUN2REMsVUFBVU4sWUFBWU87O1lBQ3ZCO1lBQ3VCUCxZQUFZTyxhQUFhOzs7Ozs7O0FBR3JEO0dBWmdCUjs7UUFDVUgsbUVBQWlCQTs7O0tBRDNCRztBQWNULFNBQVNTO1FBTVRDLHlCQWNHQyxnQkFFQ0E7O0lBckJULE1BQU0sRUFBRUEsU0FBUSxFQUFFRCxrQkFBaUIsRUFBRSxHQUFHYix1RUFBaUJBO0lBRXpELElBQUlhLGtCQUFrQkUsV0FBVztRQUMvQixxQkFBTyw4REFBQ0M7WUFBS1YsV0FBVTs7Ozs7O0lBQ3pCO0lBQ0EsSUFBSSxDQUFDTyxDQUFBQSxDQUFBQSwwQkFBQUEsa0JBQWtCSSxrQkFBbEJKLHFDQUFBQSxLQUFBQSxJQUFBQSx3QkFBd0JLLEtBQUksR0FBRztRQUNsQyxxQkFDRSw4REFBQ0M7WUFBSWIsV0FBVTtzQkFDYiw0RUFBQ1U7MEJBQUs7Ozs7Ozs7Ozs7O0lBTVo7SUFDQSxxQkFDRSw4REFBQ0c7UUFBSWIsV0FBVztrQkFDYlEsU0FBU0MsMEJBQ1IsOERBQUNDO1lBQUtWLFdBQVU7Ozs7O21CQUNkUSxDQUFBQSxDQUFBQSxpQkFBQUEsU0FBU0csa0JBQVRILDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFlTSxNQUFLLGtCQUN0Qiw4REFBQ0Q7WUFBSWIsV0FBVTtzQkFDWlEsQ0FBQUEsa0JBQUFBLFNBQVNHLGtCQUFUSCw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWVPLElBQUksQ0FBQ0Msd0JBQ25CLDhEQUFDQztvQkFFQ0QsU0FBU0EsUUFBUUU7bUJBRFpGLFFBQVFFLFVBQVVDOzs7Ozs7Ozs7aUNBTTdCLDhEQUFDTjtZQUFJYixXQUFVOzs4QkFDYiw4REFBQ29CO29CQUFHcEIsV0FBVzs4QkFBWTs7Ozs7O2dCQUFnQjs7Ozs7Ozs7Ozs7O0FBTXJEO0lBckNnQk07O1FBQzBCWixtRUFBaUJBOzs7TUFEM0NZO0FBdUNoQixTQUFTVyxZQUFZLEtBQW1DO1FBQW5DLEVBQUVELFFBQU8sRUFBMEIsR0FBbkM7O0lBQ25CLE1BQU0sRUFDSkssYUFBWSxFQUNaQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWixHQUFHNUIsOEVBQXdCQSxDQUFDO1FBQUVxQjtJQUFRO0lBRXZDLE9BQU9LLGFBQWFaLDBCQUNsQiw4REFBQ0M7UUFBS1YsV0FBVTs7Ozs7NkJBRWhCLDhEQUFDYTtRQUFJYixXQUFVO2tCQUNiLDRFQUFDYTtZQUFJYixXQUFVO3NCQUNiLDRFQUFDYTtnQkFBSWIsV0FBVTs7a0NBQ2IsOERBQUNvQjt3QkFDQ3BCLFdBQVU7d0JBQ1ZDLFNBQVMsSUFBTW9CLGFBQWFHO2tDQUUzQjVCLDBDQUFLQTs7Ozs7O2tDQUVSLDhEQUFDaUI7d0JBQUliLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUNDQyxXQUFVOzRCQUNWQyxTQUFTLElBQU1xQixZQUFZcEI7NEJBQzNCRSxVQUFVa0IsWUFBWWpCO3NDQUN2Qjs7Ozs7Ozs7Ozs7a0NBd0JILDhEQUFDUTt3QkFBSWIsV0FBVTs7MENBQ2IsOERBQUN5QjswQ0FDQyw0RUFBQ2hDLDZEQUFZQTtvQ0FDWGlDLE1BQU0sV0FBbUIsT0FBUlY7b0NBQ2pCVyxPQUFPbkMsd0RBQVNBLENBQUN3QixRQUFRRzs7Ozs7Ozs7Ozs7MENBRzdCLDhEQUFDcEI7Z0NBQ0NDLFdBQVU7Z0NBQ1ZDLFNBQVM7b0NBQ1AsSUFDRSxDQUFDMkIsT0FBT0MsUUFDTixpREFFRjt3Q0FDQTtvQ0FDRjtvQ0FDQSxPQUFPTixZQUFZckI7Z0NBQ3JCO2dDQUNBRSxVQUFVbUIsWUFBWWxCOzBDQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0lBNUVTWTs7UUFLSHRCLDBFQUF3QkE7OztNQUxyQnNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvam91cm5hbC9qb3VybmFsLXVpLnRzeD9lNTc3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgS2V5cGFpciwgUHVibGljS2V5IH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbi8vIGltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBlbGxpcHNpZnkgfSBmcm9tICcuLi91aS91aS1sYXlvdXQnO1xuaW1wb3J0IHsgRXhwbG9yZXJMaW5rIH0gZnJvbSAnLi4vY2x1c3Rlci9jbHVzdGVyLXVpJztcbmltcG9ydCB7XG4gIHVzZUpvdXJuYWxQcm9ncmFtLFxuICB1c2VKb3VybmFsUHJvZ3JhbUFjY291bnQsXG59IGZyb20gJy4vam91cm5hbC1kYXRhLWFjY2Vzcyc7XG5pbXBvcnQgeyB0aXRsZSB9IGZyb20gJ3Byb2Nlc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gSm91cm5hbENyZWF0ZSgpIHtcbiAgY29uc3QgeyBjcmVhdGVFbnRyeSB9ID0gdXNlSm91cm5hbFByb2dyYW0oKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4teHMgbGc6YnRuLW1kIGJ0bi1wcmltYXJ5XCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZUVudHJ5Lm11dGF0ZUFzeW5jKEtleXBhaXIuZ2VuZXJhdGUoKSl9XG4gICAgICBkaXNhYmxlZD17Y3JlYXRlRW50cnkuaXNQZW5kaW5nfVxuICAgID5cbiAgICAgIENyZWF0ZSBKb3VybmFsIEVudHJ5IHtjcmVhdGVFbnRyeS5pc1BlbmRpbmcgJiYgJy4uLid9XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBKb3VybmFsTGlzdCgpIHtcbiAgY29uc3QgeyBhY2NvdW50cywgZ2V0UHJvZ3JhbUFjY291bnQgfSA9IHVzZUpvdXJuYWxQcm9ncmFtKCk7XG5cbiAgaWYgKGdldFByb2dyYW1BY2NvdW50LmlzTG9hZGluZykge1xuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPjtcbiAgfVxuICBpZiAoIWdldFByb2dyYW1BY2NvdW50LmRhdGE/LnZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mbyBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIFByb2dyYW0gYWNjb3VudCBub3QgZm91bmQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBkZXBsb3llZCB0aGUgcHJvZ3JhbSBhbmRcbiAgICAgICAgICBhcmUgb24gdGhlIGNvcnJlY3QgY2x1c3Rlci5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsnc3BhY2UteS02J30+XG4gICAgICB7YWNjb3VudHMuaXNMb2FkaW5nID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPlxuICAgICAgKSA6IGFjY291bnRzLmRhdGE/Lmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAge2FjY291bnRzLmRhdGE/Lm1hcCgoYWNjb3VudCkgPT4gKFxuICAgICAgICAgICAgPEpvdXJuYWxDYXJkXG4gICAgICAgICAgICAgIGtleT17YWNjb3VudC5wdWJsaWNLZXkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudC5wdWJsaWNLZXl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsndGV4dC0yeGwnfT5ObyBhY2NvdW50czwvaDI+XG4gICAgICAgICAgTm8gYWNjb3VudHMgZm91bmQuIENyZWF0ZSBvbmUgYWJvdmUgdG8gZ2V0IHN0YXJ0ZWQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSm91cm5hbENhcmQoeyBhY2NvdW50IH06IHsgYWNjb3VudDogUHVibGljS2V5IH0pIHtcbiAgY29uc3Qge1xuICAgIGFjY291bnRRdWVyeSxcbiAgICB1cGRhdGVFbnRyeSwgXG4gICAgZGVsZXRlRW50cnlcbiAgfSA9IHVzZUpvdXJuYWxQcm9ncmFtQWNjb3VudCh7IGFjY291bnQgfSk7XG5cbiAgcmV0dXJuIGFjY291bnRRdWVyeS5pc0xvYWRpbmcgPyAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibG9hZGluZyBsb2FkaW5nLXNwaW5uZXIgbG9hZGluZy1sZ1wiPjwvc3Bhbj5cbiAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib3JkZXJlZCBib3JkZXItYmFzZS0zMDAgYm9yZGVyLTQgdGV4dC1uZXV0cmFsLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBqdXN0aWZ5LWNlbnRlciB0ZXh0LTN4bCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY2NvdW50UXVlcnkucmVmZXRjaCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGp1c3RpZnktYXJvdW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4teHMgbGc6YnRuLW1kIGJ0bi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlRW50cnkubXV0YXRlQXN5bmMoKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VwZGF0ZUVudHJ5LmlzUGVuZGluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVXBkYXRlIEpvdXJuYWwgRW50cnlcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi14cyBsZzpidG4tbWQgYnRuLW91dGxpbmVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB3aW5kb3cucHJvbXB0KFxuICAgICAgICAgICAgICAgICAgJ1NldCB0aXRsZSB0bzonLFxuICAgICAgICAgICAgICAgICAgdGl0bGUudG9TdHJpbmcoKSA/PyAnMCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRNdXRhdGlvbi5tdXRhdGVBc3luYyhwYXJzZUludCh2YWx1ZSkpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17c2V0TXV0YXRpb24uaXNQZW5kaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXhzIGxnOmJ0bi1tZCBidG4tb3V0bGluZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlY3JlbWVudE11dGF0aW9uLm11dGF0ZUFzeW5jKCl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkZWNyZW1lbnRNdXRhdGlvbi5pc1BlbmRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlY3JlbWVudFxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3BhY2UteS00XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPEV4cGxvcmVyTGlua1xuICAgICAgICAgICAgICAgIHBhdGg9e2BhY2NvdW50LyR7YWNjb3VudH1gfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtlbGxpcHNpZnkoYWNjb3VudC50b1N0cmluZygpKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi14cyBidG4tc2Vjb25kYXJ5IGJ0bi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICF3aW5kb3cuY29uZmlybShcbiAgICAgICAgICAgICAgICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZSB0aGlzIGFjY291bnQ/J1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlRW50cnkubXV0YXRlQXN5bmMoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RlbGV0ZUVudHJ5LmlzUGVuZGluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIktleXBhaXIiLCJlbGxpcHNpZnkiLCJFeHBsb3JlckxpbmsiLCJ1c2VKb3VybmFsUHJvZ3JhbSIsInVzZUpvdXJuYWxQcm9ncmFtQWNjb3VudCIsInRpdGxlIiwiSm91cm5hbENyZWF0ZSIsImNyZWF0ZUVudHJ5IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm11dGF0ZUFzeW5jIiwiZ2VuZXJhdGUiLCJkaXNhYmxlZCIsImlzUGVuZGluZyIsIkpvdXJuYWxMaXN0IiwiZ2V0UHJvZ3JhbUFjY291bnQiLCJhY2NvdW50cyIsImlzTG9hZGluZyIsInNwYW4iLCJkYXRhIiwidmFsdWUiLCJkaXYiLCJsZW5ndGgiLCJtYXAiLCJhY2NvdW50IiwiSm91cm5hbENhcmQiLCJwdWJsaWNLZXkiLCJ0b1N0cmluZyIsImgyIiwiYWNjb3VudFF1ZXJ5IiwidXBkYXRlRW50cnkiLCJkZWxldGVFbnRyeSIsInJlZmV0Y2giLCJwIiwicGF0aCIsImxhYmVsIiwid2luZG93IiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/journal/journal-ui.tsx\n"));

/***/ })

});