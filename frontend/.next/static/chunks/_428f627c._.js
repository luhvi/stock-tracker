(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/store/subscriptionSelection.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSubscriptionSelectionStore": ()=>useSubscriptionSelectionStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useSubscriptionSelectionStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        subscriptionSelection: "monthly",
        setSubscriptionSelection: (selection)=>set(()=>({
                    subscriptionSelection: selection
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/SubscriptionSelection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$subscriptionSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/subscriptionSelection.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const SubscriptionSelection = ()=>{
    _s();
    const subscriptionSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$subscriptionSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscriptionSelectionStore"])({
        "SubscriptionSelection.useSubscriptionSelectionStore[subscriptionSelection]": (state)=>state.subscriptionSelection
    }["SubscriptionSelection.useSubscriptionSelectionStore[subscriptionSelection]"]);
    const setSubscriptionSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$subscriptionSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscriptionSelectionStore"])({
        "SubscriptionSelection.useSubscriptionSelectionStore[setSubscriptionSelection]": (state)=>state.setSubscriptionSelection
    }["SubscriptionSelection.useSubscriptionSelectionStore[setSubscriptionSelection]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-13 w-74 items-center justify-between rounded-full bg-black/10 px-2 py-2 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setSubscriptionSelection("monthly"),
                className: "absolute left-2 h-9 cursor-pointer rounded-full px-4 py-1 font-medium text-[oklch(0.95_0_0)] transition-all duration-300 ease-in-out hover:ring-1 hover:ring-indigo-500 ".concat(subscriptionSelection === "monthly" ? "bg-indigo-700/40 ring-1 ring-indigo-500" : ""),
                children: "Monthly"
            }, void 0, false, {
                fileName: "[project]/components/ui/SubscriptionSelection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setSubscriptionSelection("yearly"),
                className: "right absolute right-2 flex h-9 w-45 cursor-pointer items-center justify-between rounded-full px-0.5 py-1 transition-all duration-300 ease-in-out hover:ring-1 hover:ring-indigo-500 ".concat(subscriptionSelection === "yearly" ? "bg-indigo-700/40 ring-1 ring-indigo-500" : "", " "),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full pl-4 font-medium text-[oklch(0.95_0_0)]",
                        children: "Yearly"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SubscriptionSelection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-indigo-700/40 px-4 py-1 font-medium text-[oklch(0.95_0_0)] shadow-lg backdrop-blur-2xl",
                        children: "Save 20%"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SubscriptionSelection.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/SubscriptionSelection.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/SubscriptionSelection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SubscriptionSelection, "sV+Fd7fLzAT4b0mQIB9Hg/t/fPw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$subscriptionSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscriptionSelectionStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$subscriptionSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubscriptionSelectionStore"]
    ];
});
_c = SubscriptionSelection;
const __TURBOPACK__default__export__ = SubscriptionSelection;
var _c;
__turbopack_context__.k.register(_c, "SubscriptionSelection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_428f627c._.js.map