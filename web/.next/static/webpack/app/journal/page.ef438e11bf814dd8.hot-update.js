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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JournalCreate\": function() { return /* binding */ JournalCreate; },\n/* harmony export */   \"JournalList\": function() { return /* binding */ JournalList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui-layout */ \"(app-client)/./components/ui/ui-layout.tsx\");\n/* harmony import */ var _cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cluster/cluster-ui */ \"(app-client)/./components/cluster/cluster-ui.tsx\");\n/* harmony import */ var _journal_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal-data-access */ \"(app-client)/./components/journal/journal-data-access.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-client)/../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-client)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ JournalCreate,JournalList auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n// import { useMemo } from 'react';\n\n\n\n\n\nfunction JournalCreate() {\n    _s();\n    const { createEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram)();\n    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const isFormValid = title.trim() !== \"\" && message.trim() !== \"\";\n    const handleSubmit = ()=>{\n        if (publicKey && isFormValid) {\n            createEntry.mutateAsync({\n                title,\n                message,\n                owner: publicKey\n            });\n        }\n    };\n    if (!publicKey) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Connect your wallet\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Title\",\n                value: title,\n                onChange: (e)=>setTitle(e.target.value),\n                className: \"input input-bordered w-full max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"Message\",\n                value: message,\n                onChange: (e)=>setMessage(e.target.value),\n                className: \"textarea textarea-bordered w-full max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-xs lg:btn-md btn-primary\",\n                onClick: handleSubmit,\n                disabled: createEntry.isPending || !isFormValid,\n                children: [\n                    \"Create Journal Entry \",\n                    createEntry.isPending && \"...\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalCreate, \"l18ZqCRQ9XH1CUMpG69KtXUpv7k=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet\n    ];\n});\n_c = JournalCreate;\nfunction JournalList() {\n    var _getProgramAccount_data, _accounts_data, _accounts_data1;\n    _s1();\n    const { accounts , getProgramAccount  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram)();\n    if (getProgramAccount.isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 64,\n            columnNumber: 12\n        }, this);\n    }\n    if (!((_getProgramAccount_data = getProgramAccount.data) === null || _getProgramAccount_data === void 0 ? void 0 : _getProgramAccount_data.value)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center alert alert-info\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Program account not found. Make sure you have deployed the program and are on the correct cluster.\"\n            }, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6\",\n        children: accounts.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 79,\n            columnNumber: 9\n        }, this) : ((_accounts_data = accounts.data) === null || _accounts_data === void 0 ? void 0 : _accounts_data.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid gap-4 md:grid-cols-2\",\n            children: (_accounts_data1 = accounts.data) === null || _accounts_data1 === void 0 ? void 0 : _accounts_data1.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JournalCard, {\n                    account: account.publicKey\n                }, account.publicKey.toString(), false, {\n                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 81,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl\",\n                    children: \"No accounts\"\n                }, void 0, false, {\n                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, this),\n                \"No accounts found. Create one above to get started.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 90,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_s1(JournalList, \"ODkGGbMi85Tkf3ZOOaPAIBMWQ/w=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram\n    ];\n});\n_c1 = JournalList;\nfunction JournalCard(param) {\n    let { account  } = param;\n    var _accountQuery_data, _accountQuery_data1;\n    _s2();\n    const { accountQuery , updateEntry , deleteEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgramAccount)({\n        account\n    });\n    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const isFormValid = title.trim() !== \"\" && message.trim() !== \"\";\n    const handleSubmit = ()=>{\n        if (publicKey && isFormValid) {\n            updateEntry.mutateAsync({\n                title,\n                message,\n                owner: publicKey\n            });\n        }\n    };\n    if (!publicKey) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Connect your wallet\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 118,\n            columnNumber: 12\n        }, this);\n    }\n    return accountQuery.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"loading loading-spinner loading-lg\"\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card card-bordered border-base-300 border-4 text-neutral-content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body items-center text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"card-title justify-center text-3xl cursor-pointer\",\n                        onClick: ()=>accountQuery.refetch(),\n                        children: (_accountQuery_data = accountQuery.data) === null || _accountQuery_data === void 0 ? void 0 : _accountQuery_data.title\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (_accountQuery_data1 = accountQuery.data) === null || _accountQuery_data1 === void 0 ? void 0 : _accountQuery_data1.message\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-actions justify-around\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Title\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                className: \"input input-bordered w-full max-w-xs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Message\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                className: \"textarea textarea-bordered w-full max-w-xs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-xs lg:btn-md btn-primary\",\n                                onClick: handleSubmit,\n                                disabled: updateEntry.isPending || !isFormValid,\n                                children: [\n                                    \"Create Journal Entry \",\n                                    updateEntry.isPending && \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 150,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_2__.ExplorerLink, {\n                                    path: \"account/\".concat(account),\n                                    label: (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__.ellipsify)(account.toString())\n                                }, void 0, false, {\n                                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                    lineNumber: 160,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-xs btn-secondary btn-outline\",\n                                onClick: ()=>{\n                                    if (!window.confirm(\"Are you sure you want to close this account?\")) {\n                                        return;\n                                    }\n                                    return deleteEntry.mutateAsync();\n                                },\n                                disabled: deleteEntry.isPending,\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 165,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 125,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this);\n}\n_s2(JournalCard, \"M0SQC0iBD/OlaMoycQIKLXRmXp0=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgramAccount,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet\n    ];\n});\n_c2 = JournalCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"JournalCreate\");\n$RefreshReg$(_c1, \"JournalList\");\n$RefreshReg$(_c2, \"JournalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9qb3VybmFsL2pvdXJuYWwtdWkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsbUNBQW1DO0FBQ1M7QUFDUztBQUl0QjtBQUMwQjtBQUV4QjtBQUUxQixTQUFTTTs7SUFDZCxNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHTCx1RUFBaUJBO0lBQ3pDLE1BQU0sRUFBRU0sVUFBUyxFQUFFLEdBQUdKLHVFQUFTQTtJQUMvQixNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLGNBQWNKLE1BQU1LLFdBQVcsTUFBTUgsUUFBUUcsV0FBVztJQUU5RCxNQUFNQyxlQUFlO1FBQ25CLElBQUlQLGFBQWFLLGFBQWE7WUFDNUJOLFlBQVlTLFlBQVk7Z0JBQUVQO2dCQUFPRTtnQkFBU00sT0FBT1Q7WUFBVTtRQUM3RDtJQUNGO0lBRUEsSUFBSSxDQUFDQSxXQUFVO1FBQ2IscUJBQU8sOERBQUNVO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPZDtnQkFDUGUsVUFBVSxDQUFDQyxJQUFNZixTQUFTZSxFQUFFQyxPQUFPSDtnQkFDbkNJLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0M7Z0JBQ0NOLGFBQVk7Z0JBQ1pDLE9BQU9aO2dCQUNQYSxVQUFVLENBQUNDLElBQU1iLFdBQVdhLEVBQUVDLE9BQU9IO2dCQUNyQ0ksV0FBVTs7Ozs7OzBCQUVaLDhEQUFDRTtnQkFDQ0YsV0FBVTtnQkFDVkcsU0FBU2Y7Z0JBQ1RnQixVQUFVeEIsWUFBWXlCLGFBQWEsQ0FBQ25COztvQkFDckM7b0JBQ3VCTixZQUFZeUIsYUFBYTs7Ozs7Ozs7Ozs7OztBQUl2RDtHQTFDZ0IxQjs7UUFDVUosbUVBQWlCQTtRQUNuQkUsbUVBQVNBOzs7S0FGakJFO0FBNkNULFNBQVMyQjtRQU1UQyx5QkFjR0MsZ0JBRUNBOztJQXJCVCxNQUFNLEVBQUVBLFNBQVEsRUFBRUQsa0JBQWlCLEVBQUUsR0FBR2hDLHVFQUFpQkE7SUFFekQsSUFBSWdDLGtCQUFrQkUsV0FBVztRQUMvQixxQkFBTyw4REFBQ0M7WUFBS1YsV0FBVTs7Ozs7O0lBQ3pCO0lBQ0EsSUFBSSxDQUFDTyxDQUFBQSxDQUFBQSwwQkFBQUEsa0JBQWtCSSxrQkFBbEJKLHFDQUFBQSxLQUFBQSxJQUFBQSx3QkFBd0JYLEtBQUksR0FBRztRQUNsQyxxQkFDRSw4REFBQ0o7WUFBSVEsV0FBVTtzQkFDYiw0RUFBQ1U7MEJBQUs7Ozs7Ozs7Ozs7O0lBTVo7SUFDQSxxQkFDRSw4REFBQ2xCO1FBQUlRLFdBQVc7a0JBQ2JRLFNBQVNDLDBCQUNSLDhEQUFDQztZQUFLVixXQUFVOzs7OzttQkFDZFEsQ0FBQUEsQ0FBQUEsaUJBQUFBLFNBQVNHLGtCQUFUSCw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBZUksTUFBSyxrQkFDdEIsOERBQUNwQjtZQUFJUSxXQUFVO3NCQUNaUSxDQUFBQSxrQkFBQUEsU0FBU0csa0JBQVRILDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBZUssSUFBSSxDQUFDQyx3QkFDbkIsOERBQUNDO29CQUVDRCxTQUFTQSxRQUFRakM7bUJBRFppQyxRQUFRakMsVUFBVW1DOzs7Ozs7Ozs7aUNBTTdCLDhEQUFDeEI7WUFBSVEsV0FBVTs7OEJBQ2IsOERBQUNpQjtvQkFBR2pCLFdBQVc7OEJBQVk7Ozs7OztnQkFBZ0I7Ozs7Ozs7Ozs7OztBQU1yRDtJQXJDZ0JNOztRQUMwQi9CLG1FQUFpQkE7OztNQUQzQytCO0FBdUNoQixTQUFTUyxZQUFZLEtBQW1DO1FBQW5DLEVBQUVELFFBQU8sRUFBMEIsR0FBbkM7UUFnQ1JJLG9CQUdGQTs7SUFsQ1QsTUFBTSxFQUNKQSxhQUFZLEVBQ1pDLFlBQVcsRUFDWEMsWUFBVyxFQUNaLEdBQUc1Qyw4RUFBd0JBLENBQUM7UUFBRXNDO0lBQVE7SUFDdkMsTUFBTSxFQUFFakMsVUFBUyxFQUFFLEdBQUdKLHVFQUFTQTtJQUMvQixNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLGNBQWNKLE1BQU1LLFdBQVcsTUFBTUgsUUFBUUcsV0FBVztJQUU5RCxNQUFNQyxlQUFlO1FBQ25CLElBQUlQLGFBQWFLLGFBQWE7WUFDNUJpQyxZQUFZOUIsWUFBWTtnQkFBRVA7Z0JBQU9FO2dCQUFTTSxPQUFPVDtZQUFVO1FBQzdEO0lBQ0Y7SUFFQSxJQUFJLENBQUNBLFdBQVU7UUFDYixxQkFBTyw4REFBQ1U7c0JBQUU7Ozs7OztJQUNaO0lBRUEsT0FBTzJCLGFBQWFULDBCQUNsQiw4REFBQ0M7UUFBS1YsV0FBVTs7Ozs7NkJBRWhCLDhEQUFDUjtRQUFJUSxXQUFVO2tCQUNiLDRFQUFDUjtZQUFJUSxXQUFVO3NCQUNiLDRFQUFDUjtnQkFBSVEsV0FBVTs7a0NBQ2IsOERBQUNpQjt3QkFDQ2pCLFdBQVU7d0JBQ1ZHLFNBQVMsSUFBTWUsYUFBYUc7a0NBRTNCSCxDQUFBQSxxQkFBQUEsYUFBYVAsa0JBQWJPLGdDQUFBQSxLQUFBQSxJQUFBQSxtQkFBbUJwQzs7Ozs7O2tDQUV0Qiw4REFBQ1M7a0NBQ0EyQixDQUFBQSxzQkFBQUEsYUFBYVAsa0JBQWJPLGlDQUFBQSxLQUFBQSxJQUFBQSxvQkFBbUJsQzs7Ozs7O2tDQUVwQiw4REFBQ1E7d0JBQUlRLFdBQVU7OzBDQUNiLDhEQUFDUDtnQ0FDQ0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBT2Q7Z0NBQ1BlLFVBQVUsQ0FBQ0MsSUFBTWYsU0FBU2UsRUFBRUMsT0FBT0g7Z0NBQ25DSSxXQUFVOzs7Ozs7MENBRVosOERBQUNDO2dDQUNDTixhQUFZO2dDQUNaQyxPQUFPWjtnQ0FDUGEsVUFBVSxDQUFDQyxJQUFNYixXQUFXYSxFQUFFQyxPQUFPSDtnQ0FDckNJLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ0U7Z0NBQ0NGLFdBQVU7Z0NBQ1ZHLFNBQVNmO2dDQUNUZ0IsVUFBVWUsWUFBWWQsYUFBYSxDQUFDbkI7O29DQUNyQztvQ0FDdUJpQyxZQUFZZCxhQUFhOzs7Ozs7Ozs7Ozs7O2tDQUduRCw4REFBQ2I7d0JBQUlRLFdBQVU7OzBDQUNiLDhEQUFDVDswQ0FDQyw0RUFBQ2pCLDZEQUFZQTtvQ0FDWGdELE1BQU0sV0FBbUIsT0FBUlI7b0NBQ2pCUyxPQUFPbEQsd0RBQVNBLENBQUN5QyxRQUFRRTs7Ozs7Ozs7Ozs7MENBRzdCLDhEQUFDZDtnQ0FDQ0YsV0FBVTtnQ0FDVkcsU0FBUztvQ0FDUCxJQUNFLENBQUNxQixPQUFPQyxRQUNOLGlEQUVGO3dDQUNBO29DQUNGO29DQUNBLE9BQU9MLFlBQVkvQjtnQ0FDckI7Z0NBQ0FlLFVBQVVnQixZQUFZZjswQ0FDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtJQXZGU1U7O1FBS0h2QywwRUFBd0JBO1FBQ05DLG1FQUFTQTs7O01BTnhCc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qb3VybmFsL2pvdXJuYWwtdWkudHN4P2U1NzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBLZXlwYWlyLCBQdWJsaWNLZXkgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xuLy8gaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGVsbGlwc2lmeSB9IGZyb20gJy4uL3VpL3VpLWxheW91dCc7XG5pbXBvcnQgeyBFeHBsb3JlckxpbmsgfSBmcm9tICcuLi9jbHVzdGVyL2NsdXN0ZXItdWknO1xuaW1wb3J0IHtcbiAgdXNlSm91cm5hbFByb2dyYW0sXG4gIHVzZUpvdXJuYWxQcm9ncmFtQWNjb3VudCxcbn0gZnJvbSAnLi9qb3VybmFsLWRhdGEtYWNjZXNzJztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IHsgcHVibGljS2V5IH0gZnJvbSAnQGNvcmFsLXh5ei9hbmNob3IvZGlzdC9janMvdXRpbHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBKb3VybmFsQ3JlYXRlKCkge1xuICBjb25zdCB7IGNyZWF0ZUVudHJ5IH0gPSB1c2VKb3VybmFsUHJvZ3JhbSgpO1xuICBjb25zdCB7IHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaXNGb3JtVmFsaWQgPSB0aXRsZS50cmltKCkgIT09ICcnICYmIG1lc3NhZ2UudHJpbSgpICE9PSAnJztcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKHB1YmxpY0tleSAmJiBpc0Zvcm1WYWxpZCkge1xuICAgICAgY3JlYXRlRW50cnkubXV0YXRlQXN5bmMoeyB0aXRsZSwgbWVzc2FnZSwgb3duZXI6IHB1YmxpY0tleSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKCFwdWJsaWNLZXkpe1xuICAgIHJldHVybiA8cD5Db25uZWN0IHlvdXIgd2FsbGV0PC9wPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiXG4gICAgICAvPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYSB0ZXh0YXJlYS1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxuICAgICAgLz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi14cyBsZzpidG4tbWQgYnRuLXByaW1hcnlcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIGRpc2FibGVkPXtjcmVhdGVFbnRyeS5pc1BlbmRpbmcgfHwgIWlzRm9ybVZhbGlkfVxuICAgICAgPlxuICAgICAgICBDcmVhdGUgSm91cm5hbCBFbnRyeSB7Y3JlYXRlRW50cnkuaXNQZW5kaW5nICYmICcuLi4nfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEpvdXJuYWxMaXN0KCkge1xuICBjb25zdCB7IGFjY291bnRzLCBnZXRQcm9ncmFtQWNjb3VudCB9ID0gdXNlSm91cm5hbFByb2dyYW0oKTtcblxuICBpZiAoZ2V0UHJvZ3JhbUFjY291bnQuaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbG9hZGluZy1zcGlubmVyIGxvYWRpbmctbGdcIj48L3NwYW4+O1xuICB9XG4gIGlmICghZ2V0UHJvZ3JhbUFjY291bnQuZGF0YT8udmFsdWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGFsZXJ0IGFsZXJ0LWluZm9cIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgUHJvZ3JhbSBhY2NvdW50IG5vdCBmb3VuZC4gTWFrZSBzdXJlIHlvdSBoYXZlIGRlcGxveWVkIHRoZSBwcm9ncmFtIGFuZFxuICAgICAgICAgIGFyZSBvbiB0aGUgY29ycmVjdCBjbHVzdGVyLlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eydzcGFjZS15LTYnfT5cbiAgICAgIHthY2NvdW50cy5pc0xvYWRpbmcgPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbG9hZGluZy1zcGlubmVyIGxvYWRpbmctbGdcIj48L3NwYW4+XG4gICAgICApIDogYWNjb3VudHMuZGF0YT8ubGVuZ3RoID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICB7YWNjb3VudHMuZGF0YT8ubWFwKChhY2NvdW50KSA9PiAoXG4gICAgICAgICAgICA8Sm91cm5hbENhcmRcbiAgICAgICAgICAgICAga2V5PXthY2NvdW50LnB1YmxpY0tleS50b1N0cmluZygpfVxuICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50LnB1YmxpY0tleX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9eyd0ZXh0LTJ4bCd9Pk5vIGFjY291bnRzPC9oMj5cbiAgICAgICAgICBObyBhY2NvdW50cyBmb3VuZC4gQ3JlYXRlIG9uZSBhYm92ZSB0byBnZXQgc3RhcnRlZC5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBKb3VybmFsQ2FyZCh7IGFjY291bnQgfTogeyBhY2NvdW50OiBQdWJsaWNLZXkgfSkge1xuICBjb25zdCB7XG4gICAgYWNjb3VudFF1ZXJ5LFxuICAgIHVwZGF0ZUVudHJ5LCBcbiAgICBkZWxldGVFbnRyeVxuICB9ID0gdXNlSm91cm5hbFByb2dyYW1BY2NvdW50KHsgYWNjb3VudCB9KTtcbiAgY29uc3QgeyBwdWJsaWNLZXkgfSA9IHVzZVdhbGxldCgpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGlzRm9ybVZhbGlkID0gdGl0bGUudHJpbSgpICE9PSAnJyAmJiBtZXNzYWdlLnRyaW0oKSAhPT0gJyc7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmIChwdWJsaWNLZXkgJiYgaXNGb3JtVmFsaWQpIHtcbiAgICAgIHVwZGF0ZUVudHJ5Lm11dGF0ZUFzeW5jKHsgdGl0bGUsIG1lc3NhZ2UsIG93bmVyOiBwdWJsaWNLZXkgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmICghcHVibGljS2V5KXtcbiAgICByZXR1cm4gPHA+Q29ubmVjdCB5b3VyIHdhbGxldDwvcD5cbiAgfVxuXG4gIHJldHVybiBhY2NvdW50UXVlcnkuaXNMb2FkaW5nID8gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbG9hZGluZy1zcGlubmVyIGxvYWRpbmctbGdcIj48L3NwYW4+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9yZGVyZWQgYm9yZGVyLWJhc2UtMzAwIGJvcmRlci00IHRleHQtbmV1dHJhbC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUganVzdGlmeS1jZW50ZXIgdGV4dC0zeGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWNjb3VudFF1ZXJ5LnJlZmV0Y2goKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWNjb3VudFF1ZXJ5LmRhdGE/LnRpdGxlfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHA+IFxuICAgICAgICAgIHthY2NvdW50UXVlcnkuZGF0YT8ubWVzc2FnZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dGFyZWEgdGV4dGFyZWEtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4teHMgbGc6YnRuLW1kIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dXBkYXRlRW50cnkuaXNQZW5kaW5nIHx8ICFpc0Zvcm1WYWxpZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ3JlYXRlIEpvdXJuYWwgRW50cnkge3VwZGF0ZUVudHJ5LmlzUGVuZGluZyAmJiAnLi4uJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3BhY2UteS00XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPEV4cGxvcmVyTGlua1xuICAgICAgICAgICAgICAgIHBhdGg9e2BhY2NvdW50LyR7YWNjb3VudH1gfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtlbGxpcHNpZnkoYWNjb3VudC50b1N0cmluZygpKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi14cyBidG4tc2Vjb25kYXJ5IGJ0bi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICF3aW5kb3cuY29uZmlybShcbiAgICAgICAgICAgICAgICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZSB0aGlzIGFjY291bnQ/J1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlRW50cnkubXV0YXRlQXN5bmMoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RlbGV0ZUVudHJ5LmlzUGVuZGluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImVsbGlwc2lmeSIsIkV4cGxvcmVyTGluayIsInVzZUpvdXJuYWxQcm9ncmFtIiwidXNlSm91cm5hbFByb2dyYW1BY2NvdW50IiwidXNlV2FsbGV0IiwidXNlU3RhdGUiLCJKb3VybmFsQ3JlYXRlIiwiY3JlYXRlRW50cnkiLCJwdWJsaWNLZXkiLCJ0aXRsZSIsInNldFRpdGxlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJpc0Zvcm1WYWxpZCIsInRyaW0iLCJoYW5kbGVTdWJtaXQiLCJtdXRhdGVBc3luYyIsIm93bmVyIiwicCIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImlzUGVuZGluZyIsIkpvdXJuYWxMaXN0IiwiZ2V0UHJvZ3JhbUFjY291bnQiLCJhY2NvdW50cyIsImlzTG9hZGluZyIsInNwYW4iLCJkYXRhIiwibGVuZ3RoIiwibWFwIiwiYWNjb3VudCIsIkpvdXJuYWxDYXJkIiwidG9TdHJpbmciLCJoMiIsImFjY291bnRRdWVyeSIsInVwZGF0ZUVudHJ5IiwiZGVsZXRlRW50cnkiLCJyZWZldGNoIiwicGF0aCIsImxhYmVsIiwid2luZG93IiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/journal/journal-ui.tsx\n"));

/***/ })

});