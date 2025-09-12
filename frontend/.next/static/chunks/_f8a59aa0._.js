(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/store/page.store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePageStore": ()=>usePageStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const usePageStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        page: "landingPage",
        setPage: (newPage)=>set(()=>({
                    page: newPage
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/Header/LinkElement.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LinkELement": ()=>LinkELement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
const LinkELement = (param)=>{
    let { title, page, setPage } = param;
    const handleClick = (page)=>{
        setPage(page);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/".concat(title === "tryForFreePage" || title === "pricingPage" ? "pricing" : ""),
        className: "flex cursor-pointer items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-0.5 ".concat(page === title ? "text-white" : "text-[oklch(0.75_0_0)] hover:text-[oklch(0.95_0_0)]"),
        onClick: ()=>handleClick(title),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sm:text-md text-sm font-medium",
            children: title === "tryForFreePage" ? "Try For Free" : title.charAt(0).toUpperCase() + title.slice(1)
        }, void 0, false, {
            fileName: "[project]/components/layout/Header/LinkElement.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/layout/Header/LinkElement.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LinkELement;
var _c;
__turbopack_context__.k.register(_c, "LinkELement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/Header/ProfileDropdownElement.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProfileDropdownElement": ()=>ProfileDropdownElement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
const ProfileDropdownElement = (param)=>{
    let { title, Icon, setPage, setIsProfileDropdownOpen, setIsLoggedIn } = param;
    const handleClick = (title)=>{
        if (title === "logOutPage") {
            setIsLoggedIn(false);
        } else {
            setPage(title);
        }
        setIsProfileDropdownOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "".concat(title === "logInPage" ? "login" : "/"),
        className: "group flex cursor-pointer items-center justify-start rounded-md px-2 py-1 text-[oklch(0.95_0_0)] transition-all duration-300 ease-in-out hover:bg-indigo-700/40 ".concat(title === "logInPage" || title === "logOutPage" ? "" : "mb-1", " "),
        onClick: ()=>handleClick(title),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-2 text-2xl ".concat(title === "settingsPage" ? "group-hover:animate-spin" : ""),
                style: {
                    animationDuration: "2s"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                    fileName: "[project]/components/layout/Header/ProfileDropdownElement.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/layout/Header/ProfileDropdownElement.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-1 text-sm font-medium",
                children: title === "logInPage" ? "Log In" : title === "logOutPage" ? "Log Out" : title.charAt(0).toUpperCase() + title.slice(1)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header/ProfileDropdownElement.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Header/ProfileDropdownElement.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProfileDropdownElement;
var _c;
__turbopack_context__.k.register(_c, "ProfileDropdownElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/Header/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$page$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/page.store.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/store/profiledropdown.store'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/store/loggedin.store'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2f$LinkElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header/LinkElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2f$ProfileDropdownElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header/ProfileDropdownElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/go/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const Header = ()=>{
    _s();
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$page$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageStore"])({
        "Header.usePageStore[page]": (state)=>state.page
    }["Header.usePageStore[page]"]);
    const setPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$page$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageStore"])({
        "Header.usePageStore[setPage]": (state)=>state.setPage
    }["Header.usePageStore[setPage]"]);
    const isProfileDropdownOpen = useProfileDropdownStore({
        "Header.useProfileDropdownStore[isProfileDropdownOpen]": (state)=>state.isProfileDropdownOpen
    }["Header.useProfileDropdownStore[isProfileDropdownOpen]"]);
    const toggleProfileDropdown = useProfileDropdownStore({
        "Header.useProfileDropdownStore[toggleProfileDropdown]": (state)=>state.toggleProfileDropdown
    }["Header.useProfileDropdownStore[toggleProfileDropdown]"]);
    const setIsProfileDropdownOpen = useProfileDropdownStore({
        "Header.useProfileDropdownStore[setIsProfileDropdownOpen]": (state)=>state.setIsProfileDropdownOpen
    }["Header.useProfileDropdownStore[setIsProfileDropdownOpen]"]);
    const isLoggedIn = useLoggedInStore({
        "Header.useLoggedInStore[isLoggedIn]": (state)=>state.isLoggedIn
    }["Header.useLoggedInStore[isLoggedIn]"]);
    const setIsLoggedIn = useLoggedInStore({
        "Header.useLoggedInStore[setIsLoggedIn]": (state)=>state.setIsLoggedIn
    }["Header.useLoggedInStore[setIsLoggedIn]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-12 z-50 flex w-full items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex w-full flex-row items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-18 items-center justify-between gap-6 rounded-full bg-black/10 px-8 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2f$LinkElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkELement"], {
                            title: "landingPage",
                            page: page,
                            setPage: setPage
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header/Header.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2f$LinkElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkELement"], {
                            title: "tryForFreePage",
                            page: page,
                            setPage: setPage
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header/Header.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2f$LinkElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkELement"], {
                            title: "pricingPage",
                            page: page,
                            setPage: setPage
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header/Header.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header/Header.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-18 flex items-center justify-center text-center",
                    onClick: toggleProfileDropdown,
                    children: "TC"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header/Header.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isProfileDropdownOpen && isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-18 right-18 flex flex-col justify-center rounded-md bg-black/10 p-1.5 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2f$ProfileDropdownElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileDropdownElement"], {
                            title: "profilePage",
                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoPerson"],
                            setPage: setPage,
                            setIsProfileDropdownOpen: setIsProfileDropdownOpen,
                            setIsLoggedIn: setIsLoggedIn
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header/Header.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2f$ProfileDropdownElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileDropdownElement"], {
                            title: "settingsPage",
                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiGear"],
                            setPage: setPage,
                            setIsProfileDropdownOpen: setIsProfileDropdownOpen,
                            setIsLoggedIn: setIsLoggedIn
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header/Header.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2f$ProfileDropdownElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileDropdownElement"], {
                            title: "logOutPage",
                            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdLogout"],
                            setPage: setPage,
                            setIsProfileDropdownOpen: setIsProfileDropdownOpen,
                            setIsLoggedIn: setIsLoggedIn
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header/Header.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Header/Header.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : isProfileDropdownOpen && !isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-18 right-18 flex flex-col justify-center rounded-lg bg-black/10 p-1.5 shadow-lg ring-1 ring-white/10 backdrop-blur-2xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2f$ProfileDropdownElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileDropdownElement"], {
                        title: "logInPage",
                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineLogin"],
                        setPage: setPage,
                        setIsProfileDropdownOpen: setIsProfileDropdownOpen,
                        setIsLoggedIn: setIsLoggedIn
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header/Header.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header/Header.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/Header/Header.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/layout/Header/Header.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "PQNonmxcQrJpWTDHG8UHcXB1KmQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$page$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$page$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageStore"],
        useProfileDropdownStore,
        useProfileDropdownStore,
        useProfileDropdownStore,
        useLoggedInStore,
        useLoggedInStore
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_f8a59aa0._.js.map