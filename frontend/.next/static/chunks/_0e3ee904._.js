(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:8000"
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/graph.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Graph": ()=>Graph
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Graph = ()=>{
    _s();
    const tickers = [
        "NVDA",
        "AAPL",
        "MSFT"
    ];
    const [prices, setPrices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [hists, setHists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const fetchTickerHist = async ()=>{
        try {
            const responses = await Promise.all(tickers.map((ticker)=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/hist/".concat(ticker))));
            const next = {};
            tickers.forEach((ticker, index)=>{
                const histData = responses[index].data.hist;
                if (histData && Array.isArray(histData)) {
                    next[ticker] = histData;
                }
            });
            setHists(next);
        } catch (error) {
            console.error("Error fetching ticker history", error);
        }
    };
    const fetchTickerPrice = async ()=>{
        try {
            const responses = await Promise.all(tickers.map((ticker)=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/price/".concat(ticker))));
            const next = {};
            tickers.forEach((ticker, index)=>{
                const priceString = responses[index].data.price;
                const priceNumber = priceString === undefined ? undefined : Number(priceString);
                if (priceNumber !== undefined && !Number.isNaN(priceNumber)) {
                    next[ticker] = priceNumber;
                }
            });
            setPrices(next);
        } catch (error) {
            console.error("Error fetching ticker price", error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Graph.useEffect": ()=>{
            fetchTickerPrice();
            fetchTickerHist();
        }
    }["Graph.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-50 w-2/3 bg-white",
        children: tickers.map((ticker)=>{
            const tickerHist = hists[ticker];
            const latestClose = tickerHist && tickerHist.length > 0 ? tickerHist[tickerHist.length - 1].close : null;
            var _prices_ticker;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-black",
                children: [
                    ticker,
                    ": ",
                    (_prices_ticker = prices[ticker]) !== null && _prices_ticker !== void 0 ? _prices_ticker : "...",
                    ", Hist:",
                    " ",
                    latestClose ? latestClose.toFixed(2) : "..."
                ]
            }, ticker, true, {
                fileName: "[project]/components/ui/graph.tsx",
                lineNumber: 78,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/components/ui/graph.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Graph, "5+tIU7etEmzmWalT3JceMiMbn+4=");
_c = Graph;
var _c;
__turbopack_context__.k.register(_c, "Graph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_0e3ee904._.js.map