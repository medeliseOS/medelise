module.exports = [
"[project]/apps/web/src/components/ui/Spinner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Spinner — SVG loading indicator for the Button component.
 * Inherits `currentColor` for seamless variant integration.
 */ __turbopack_context__.s([
    "default",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Spinner({ size = 20, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `animate-spin ${className}`,
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round",
                opacity: 0.25
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/Spinner.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2a10 10 0 0 1 10 10",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/Spinner.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ui/Spinner.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/apps/web/src/components/ui/button-tokens.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  Button Design Tokens — 8pt Grid Compliant                         ║
 * ║                                                                      ║
 * ║  Central config for responsive button dimensions.                   ║
 * ║  All values are multiples of 4px (base-unit).                       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */ __turbopack_context__.s([
    "BUTTON_TOKENS",
    ()=>BUTTON_TOKENS,
    "BUTTON_VARIANTS",
    ()=>BUTTON_VARIANTS,
    "MIN_TOUCH_TARGET",
    ()=>MIN_TOUCH_TARGET
]);
const BUTTON_TOKENS = {
    /** ≥1024px — Desktop */ desktop: {
        height: 48,
        paddingX: 24,
        fontSize: 16,
        borderRadius: 100
    },
    /** 768px – 1023px — Tablet */ tablet: {
        height: 48,
        paddingX: 20,
        fontSize: 16,
        borderRadius: 100
    },
    /** <768px — Mobile */ mobile: {
        height: 56,
        paddingX: 16,
        fontSize: 18,
        borderRadius: 100
    }
};
const MIN_TOUCH_TARGET = 48;
const BUTTON_VARIANTS = {
    primary: {
        bg: 'var(--color-primary)',
        bgHover: 'var(--color-primary-hover)',
        text: 'var(--color-white)',
        border: 'transparent'
    },
    secondary: {
        bg: 'var(--color-secondary)',
        bgHover: '#A5D4FF',
        text: 'var(--color-primary)',
        border: 'transparent'
    },
    outline: {
        bg: 'transparent',
        bgHover: 'rgba(33, 49, 112, 0.06)',
        text: 'var(--color-primary)',
        border: 'var(--color-primary)'
    },
    ghost: {
        bg: 'transparent',
        bgHover: 'rgba(33, 49, 112, 0.06)',
        text: 'var(--color-primary)',
        border: 'transparent'
    },
    accent: {
        bg: 'var(--color-accent)',
        bgHover: 'var(--color-accent-hover)',
        text: 'var(--color-white)',
        border: 'transparent'
    }
};
}),
"[project]/apps/web/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/Spinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button-tokens.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
/* ═══════════════════════════════════════════════════════════════════════════
 * COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════ */ /**
 * Reusable Button / CTA — responsive, accessible, design-token-driven.
 *
 * Uses `styled-jsx` for responsive media queries (project convention)
 * and inline styles for variant colors (from button-tokens.ts).
 *
 * @example
 *   <Button variant="primary" iconLeft={<Heart size={18} />}>
 *     Book Now
 *   </Button>
 */ const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = 'primary', isFullWidth = false, isLoading = false, iconLeft, iconRight, disabled, children, className = '', style, ...rest }, ref)=>{
    const v = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_VARIANTS"][variant];
    const isDisabled = disabled || isLoading;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: ref,
                disabled: isDisabled,
                "aria-busy": isLoading || undefined,
                "aria-disabled": isDisabled || undefined,
                style: {
                    '--btn-bg': v.bg,
                    '--btn-bg-hover': v.bgHover,
                    '--btn-text': v.text,
                    '--btn-border': v.border,
                    ...style
                },
                ...rest,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "bc671a73b96b9170",
                        [
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.height,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.paddingX,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.fontSize,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.borderRadius,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.height,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.paddingX,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.fontSize,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.borderRadius,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.height,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.paddingX,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.fontSize,
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.borderRadius
                        ]
                    ]
                ]) + " " + (rest && rest.className != null && rest.className || `btn btn--${variant} ${isFullWidth ? 'btn--full' : ''} ${className}`),
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "bc671a73b96b9170",
                                [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.borderRadius,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.borderRadius,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.borderRadius
                                ]
                            ]
                        ]) + " " + "btn__spinner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ui/Button.tsx",
                            lineNumber: 82,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ui/Button.tsx",
                        lineNumber: 81,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLoading && iconLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "bc671a73b96b9170",
                                [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.borderRadius,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.borderRadius,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.borderRadius
                                ]
                            ]
                        ]) + " " + "btn__icon",
                        children: iconLeft
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ui/Button.tsx",
                        lineNumber: 86,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "bc671a73b96b9170",
                                [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.borderRadius,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.borderRadius,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.borderRadius
                                ]
                            ]
                        ]) + " " + "btn__label",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ui/Button.tsx",
                        lineNumber: 90,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLoading && iconRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "bc671a73b96b9170",
                                [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.borderRadius,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.borderRadius,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.height,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.paddingX,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.fontSize,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.borderRadius
                                ]
                            ]
                        ]) + " " + "btn__icon",
                        children: iconRight
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ui/Button.tsx",
                        lineNumber: 92,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ui/Button.tsx",
                lineNumber: 65,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "bc671a73b96b9170",
                dynamic: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.height,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.paddingX,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.fontSize,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.borderRadius,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.height,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.paddingX,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.fontSize,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.borderRadius,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.height,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.paddingX,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.fontSize,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.borderRadius
                ],
                children: `.btn.__jsx-style-dynamic-selector{height:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.height}px;padding:0 ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.paddingX}px;font-size:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.fontSize}px;border-radius:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].mobile.borderRadius}px;font-family:var(--font-cta);white-space:nowrap;cursor:pointer;border:1.5px solid var(--btn-border);background:var(--btn-bg);color:var(--btn-text);-webkit-tap-highlight-color:transparent;justify-content:center;align-items:center;gap:8px;min-height:48px;font-weight:500;line-height:1;text-decoration:none;transition:background .2s,border-color .2s,box-shadow .2s,transform .15s;display:inline-flex;position:relative}.btn--full.__jsx-style-dynamic-selector{width:100%}.btn.__jsx-style-dynamic-selector:active:not(:disabled){transform:scale(.98)}.btn.__jsx-style-dynamic-selector:disabled{opacity:.5;cursor:not-allowed}@media (hover:hover) and (pointer:fine){.btn.__jsx-style-dynamic-selector:hover:not(:disabled){background:var(--btn-bg-hover);box-shadow:var(--shadow-md);transform:translateY(-1px)}.btn.__jsx-style-dynamic-selector:hover:active:not(:disabled){box-shadow:none;transform:scale(.98)}}.btn.__jsx-style-dynamic-selector:focus-visible{outline:2px solid var(--color-accent);outline-offset:2px}.btn__label.__jsx-style-dynamic-selector{align-items:center;display:inline-flex}.btn__icon.__jsx-style-dynamic-selector,.btn__spinner.__jsx-style-dynamic-selector{flex-shrink:0;align-items:center;display:inline-flex}@media (width>=768px){.btn.__jsx-style-dynamic-selector{height:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.height}px;padding:0 ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.paddingX}px;font-size:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.fontSize}px;border-radius:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].tablet.borderRadius}px}}@media (width>=1024px){.btn.__jsx-style-dynamic-selector{height:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.height}px;padding:0 ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.paddingX}px;font-size:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.fontSize}px;border-radius:${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BUTTON_TOKENS"].desktop.borderRadius}px}}`
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
});
Button.displayName = 'Button';
const __TURBOPACK__default__export__ = Button;
}),
"[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EasyCareSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
/* ═══════════════════════════════════════════════════════════════════════════
 * PLAN DATA
 * ═══════════════════════════════════════════════════════════════════════════ */ const PLANS = [
    {
        id: 'basic',
        name: 'Basic Protect',
        monthlyPrice: 19,
        yearlyPrice: 17,
        description: 'Serviciul de elită pentru cei care își prețuiesc timpul și sănătatea. Primești prioritate totală: intervenție medicală în maxim 90 de minute în orașele mari și condiții VIP la toate serviciile.',
        features: [
            'Telemedicină 24/7',
            '1 intervenție simplă/an',
            'Acces la portal pacient',
            'Reduceri la servicii suplimentare'
        ],
        badge: null
    },
    {
        id: 'standard',
        name: 'Standard Protect',
        monthlyPrice: 29,
        yearlyPrice: 26,
        description: 'Protecția completă pentru sănătatea și timpul tău. Beneficiezi de intervenții rapide și acces prioritar la consultații acasă, exact atunci când ai nevoie. Îți protejezi sănătatea, fără stres și fără pierdere de timp.',
        features: [
            'Telemedicină 24/7',
            '2 intervenții simple/an',
            'Acces rapid la consultație la domiciliu (max 24h)',
            'Discount 25% la servicii extra'
        ],
        badge: 'cel mai popular'
    },
    {
        id: 'premium',
        name: 'Premium Protect',
        monthlyPrice: 49,
        yearlyPrice: 44,
        description: 'Serviciul de elită pentru cei care își prețuiesc timpul și sănătatea. Primești prioritate totală: intervenție medicală în maxim 90 de minute în orașele mari și condiții VIP la toate serviciile.',
        features: [
            'Telemedicină 24/7',
            '4 intervenții simple/an',
            'Vizită medicală prioritară în 90 minute în orașe mari',
            'Discount 40% la servicii extra',
            'Prioritate garantată la programări complexe și tratamente speciale',
            'Chat Support 24/7'
        ],
        badge: null
    }
];
function EasyCareSection() {
    const [isYearly, setIsYearly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1); // default: Standard Protect
    const [selectedDesktop, setSelectedDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1); // default: Standard Protect
    const activePlan = PLANS[activeTab];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "224eacf5e8f3e166",
                children: ".easycare.jsx-c2750741f2bdac20{background:var(--color-white);width:100%;padding:var(--space-12)var(--space-section-px)}.easycare-inner.jsx-c2750741f2bdac20{max-width:var(--max-width);margin:0 auto}.easycare-header.jsx-c2750741f2bdac20{text-align:center;padding:var(--space-4)0 var(--space-8)}.easycare-title.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);margin:0 0 var(--space-2);font-size:28px;font-weight:600;line-height:36px}.easycare-subtitle.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);max-width:none;margin:0;font-size:16px;font-weight:400;line-height:24px}.easycare-toggle-wrap.jsx-c2750741f2bdac20{align-items:center;gap:var(--space-4);margin-bottom:var(--space-6);flex-direction:column;display:flex}.easycare-toggle.jsx-c2750741f2bdac20{background:var(--color-surface);border:1px solid var(--color-surface);border-radius:12px;align-items:center;padding:6px 8px;display:inline-flex}.easycare-toggle-btn.jsx-c2750741f2bdac20{padding:var(--space-2)var(--space-4);border-radius:var(--radius-main);font-family:var(--font-heading);cursor:pointer;color:var(--color-primary);background:0 0;border:none;flex:1;min-width:100px;font-size:16px;font-weight:500;line-height:24px;transition:all .25s}.easycare-toggle-btn.active.jsx-c2750741f2bdac20{background:var(--color-white);color:var(--color-primary);box-shadow:0 2px 4px #3440511f}.easycare-save-text.jsx-c2750741f2bdac20{font-family:var(--font-body);color:var(--color-primary);font-size:16px;font-weight:300;line-height:24px;display:none}.easycare-tabs.jsx-c2750741f2bdac20{width:100%;margin-bottom:var(--space-4);align-items:center;display:flex}.easycare-tab.jsx-c2750741f2bdac20{padding:var(--space-2)var(--space-5);background:var(--color-white);cursor:pointer;font-family:var(--font-heading);color:var(--color-primary);text-align:center;border:none;border-bottom:2px solid #e4e7ec;flex:1;font-size:12px;font-weight:500;line-height:16px;transition:all .2s}.easycare-tab.active.jsx-c2750741f2bdac20{color:var(--color-primary);border-bottom-color:var(--color-primary);font-weight:600}.easycare-single-card.jsx-c2750741f2bdac20{padding:var(--space-6);background:var(--color-surface);border-radius:var(--radius-main)}.easycare-single-header.jsx-c2750741f2bdac20{margin-bottom:var(--space-6);justify-content:space-between;align-items:center;display:flex}.easycare-single-name.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);font-size:18px;font-weight:600;line-height:28px}.easycare-single-badge.jsx-c2750741f2bdac20{background:var(--color-surface);border-radius:var(--radius-main);font-family:var(--font-heading);color:var(--color-primary);padding:2px 10px;font-size:14px;font-weight:500;line-height:20px;display:inline-flex}.easycare-single-price.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);margin:0;font-size:36px;font-weight:600;line-height:44px}.easycare-single-period.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);margin:0 0 var(--space-4);font-size:16px;font-weight:400;line-height:24px}.easycare-single-desc.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);margin:0 0 var(--space-4);max-width:none;font-size:16px;font-weight:400;line-height:24px}.easycare-single-features.jsx-c2750741f2bdac20{gap:var(--space-4);padding:var(--space-2)0;margin-bottom:var(--space-6);flex-direction:column;display:flex}.easycare-single-actions.jsx-c2750741f2bdac20{gap:var(--space-3);flex-direction:column;display:flex}.easycare-feature.jsx-c2750741f2bdac20{align-items:center;gap:var(--space-2);display:flex}.easycare-feature-icon.jsx-c2750741f2bdac20{background:var(--color-surface);border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;width:20px;height:20px;display:flex;overflow:hidden}.easycare-feature-text.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);flex:1;font-size:14px;font-weight:400;line-height:20px}.easycare-grid.jsx-c2750741f2bdac20{display:none}@media (width>=768px){.easycare.jsx-c2750741f2bdac20{padding:var(--space-16)var(--space-section-px)}.easycare-header.jsx-c2750741f2bdac20{padding:var(--space-4)0 var(--space-12)}.easycare-title.jsx-c2750741f2bdac20{font-size:var(--text-h2);line-height:44px}.easycare-subtitle.jsx-c2750741f2bdac20{font-size:18px;line-height:28px}.easycare-tab.jsx-c2750741f2bdac20{padding:var(--space-2)var(--space-5);font-size:18px;line-height:28px}.easycare-single-name.jsx-c2750741f2bdac20{font-size:20px}.easycare-single-price.jsx-c2750741f2bdac20{font-size:48px;line-height:60px}}@media (width>=1024px){.easycare-toggle.jsx-c2750741f2bdac20{background:var(--color-surface-card);border-radius:var(--radius-main);padding:var(--space-1);border:none}.easycare-toggle-btn.active.jsx-c2750741f2bdac20{background:var(--color-primary);color:var(--color-white);box-shadow:none}.easycare-toggle-btn.jsx-c2750741f2bdac20{min-width:160px}.easycare-save-text.jsx-c2750741f2bdac20{display:block}.easycare-toggle-wrap.jsx-c2750741f2bdac20{margin-bottom:var(--space-10)}.easycare-inner.jsx-c2750741f2bdac20{max-width:none}.easycare-tabs.jsx-c2750741f2bdac20,.easycare-single-card.jsx-c2750741f2bdac20{display:none}.easycare-grid.jsx-c2750741f2bdac20{grid-template-columns:repeat(3,1fr);gap:32px;display:grid}.easycare-card.jsx-c2750741f2bdac20{padding:var(--space-8);cursor:pointer;border:1px solid var(--color-surface);background:var(--color-surface);border-radius:var(--radius-lg);flex-direction:column;justify-content:space-between;transition:background .45s cubic-bezier(.4,0,.2,1),border-color .45s cubic-bezier(.4,0,.2,1),box-shadow .45s cubic-bezier(.4,0,.2,1),transform .35s cubic-bezier(.4,0,.2,1);display:flex}.easycare-card.highlighted.jsx-c2750741f2bdac20{background-image:linear-gradient(var(--color-primary),var(--color-primary)),conic-gradient(from var(--gradient-angle),var(--color-primary-hover)0%,var(--color-primary)37%,var(--color-secondary)40%,var(--color-primary)43%,var(--color-primary-hover)50%,var(--color-primary)77%,var(--color-secondary)80%,var(--color-primary)83%,var(--color-primary-hover)90%);z-index:2;border-radius:var(--radius-lg);background-origin:padding-box,border-box;background-clip:padding-box,border-box;border:2px solid #0000;animation:2.5s linear infinite gradient-angle;transform:scaleY(1.03);box-shadow:0 20px 60px #21317047}.easycare-card-header.jsx-c2750741f2bdac20{margin-bottom:var(--space-6);justify-content:space-between;align-items:center;display:flex}.easycare-plan-name.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);font-size:20px;font-weight:600;line-height:28px;transition:color .45s cubic-bezier(.4,0,.2,1)}.highlighted.jsx-c2750741f2bdac20 .easycare-plan-name.jsx-c2750741f2bdac20{color:var(--color-white)}.easycare-badge.jsx-c2750741f2bdac20{padding:var(--space-1)var(--space-3);background:var(--color-white);border-radius:var(--radius-main);font-family:var(--font-heading);color:var(--color-primary);font-size:14px;font-weight:500;line-height:20px;transition:opacity .3s;display:inline-flex}.highlighted.jsx-c2750741f2bdac20 .easycare-badge.jsx-c2750741f2bdac20{background:var(--color-white);color:var(--color-primary)}.easycare-price.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);margin:0;font-size:48px;font-weight:600;line-height:60px;transition:color .45s cubic-bezier(.4,0,.2,1)}.highlighted.jsx-c2750741f2bdac20 .easycare-price.jsx-c2750741f2bdac20{color:var(--color-white)}.easycare-period.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);margin:0 0 var(--space-6);font-size:16px;font-weight:400;line-height:24px;transition:color .45s cubic-bezier(.4,0,.2,1)}.highlighted.jsx-c2750741f2bdac20 .easycare-period.jsx-c2750741f2bdac20{color:var(--color-white)}.easycare-desc.jsx-c2750741f2bdac20{font-family:var(--font-heading);color:var(--color-primary);margin:0 0 var(--space-6);max-width:none;font-size:18px;font-weight:400;line-height:26px;transition:color .45s cubic-bezier(.4,0,.2,1)}.highlighted.jsx-c2750741f2bdac20 .easycare-desc.jsx-c2750741f2bdac20{color:var(--color-white)}.easycare-features.jsx-c2750741f2bdac20{gap:var(--space-4);padding:var(--space-2)0;margin-bottom:var(--space-8);flex-direction:column;flex:1;display:flex}.highlighted.jsx-c2750741f2bdac20 .easycare-feature-icon.jsx-c2750741f2bdac20{background:var(--color-white)}.highlighted.jsx-c2750741f2bdac20 .easycare-feature-text.jsx-c2750741f2bdac20{color:var(--color-white)}.easycare-actions.jsx-c2750741f2bdac20{gap:var(--space-3);flex-direction:column;display:flex}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "58cb2166e5e6221",
                children: '@property --gradient-angle{syntax:"<angle>";inherits:false;initial-value:0turn}@keyframes gradient-angle{to{--gradient-angle:1turn}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "easycare-heading",
                className: "jsx-c2750741f2bdac20" + " " + "easycare",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-c2750741f2bdac20" + " " + "easycare-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c2750741f2bdac20" + " " + "easycare-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "easycare-heading",
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-title",
                                    children: "Medelise EasyCare"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 564,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-subtitle",
                                    children: "Ai grijă de tine și de cei dragi, în fiecare zi, cu un singur abonament."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 567,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                            lineNumber: 563,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c2750741f2bdac20" + " " + "easycare-toggle-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-toggle",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsYearly(false),
                                            className: "jsx-c2750741f2bdac20" + " " + `easycare-toggle-btn ${!isYearly ? 'active' : ''}`,
                                            children: "Lunar"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                            lineNumber: 575,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsYearly(true),
                                            className: "jsx-c2750741f2bdac20" + " " + `easycare-toggle-btn ${isYearly ? 'active' : ''}`,
                                            children: "Anual"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                            lineNumber: 582,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 574,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-save-text",
                                    children: "Save 10% for yearly payment"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 590,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                            lineNumber: 573,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c2750741f2bdac20" + " " + "easycare-tabs",
                            children: PLANS.map((plan, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveTab(idx),
                                    className: "jsx-c2750741f2bdac20" + " " + `easycare-tab ${activeTab === idx ? 'active' : ''}`,
                                    children: plan.name
                                }, plan.id, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 600,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                            lineNumber: 598,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c2750741f2bdac20" + " " + "easycare-single-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-single-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-c2750741f2bdac20" + " " + "easycare-single-name",
                                            children: activePlan.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                            lineNumber: 613,
                                            columnNumber: 29
                                        }, this),
                                        activePlan.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-c2750741f2bdac20" + " " + "easycare-single-badge",
                                            children: activePlan.badge
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                            lineNumber: 615,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 612,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-single-price",
                                    children: [
                                        isYearly ? activePlan.yearlyPrice : activePlan.monthlyPrice,
                                        "€"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 618,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-single-period",
                                    children: "Pe luna"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 621,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-single-desc",
                                    children: activePlan.description
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 622,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-single-features",
                                    children: activePlan.features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "jsx-c2750741f2bdac20" + " " + "easycare-feature",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-feature-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons-medelise/md-system/md-ico-check.webp",
                                                        alt: "",
                                                        width: 12,
                                                        height: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-feature-text",
                                                    children: feat
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, feat, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                            lineNumber: 626,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 624,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-single-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "primary",
                                            isFullWidth: true,
                                            children: "Activează planul"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                            lineNumber: 641,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "outline",
                                            isFullWidth: true,
                                            children: "Află toate detaliile"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                            lineNumber: 644,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 640,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                            lineNumber: 611,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c2750741f2bdac20" + " " + "easycare-grid",
                            children: PLANS.map((plan, idx)=>{
                                const isSelected = selectedDesktop === idx;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    onClick: ()=>setSelectedDesktop(idx),
                                    role: "button",
                                    tabIndex: 0,
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedDesktop(idx);
                                        }
                                    },
                                    "aria-pressed": isSelected,
                                    className: "jsx-c2750741f2bdac20" + " " + `easycare-card ${isSelected ? 'highlighted' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c2750741f2bdac20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-card-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-c2750741f2bdac20" + " " + "easycare-plan-name",
                                                            children: plan.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                            lineNumber: 675,
                                                            columnNumber: 45
                                                        }, this),
                                                        plan.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-c2750741f2bdac20" + " " + "easycare-badge",
                                                            children: plan.badge
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                            lineNumber: 677,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-price",
                                                    children: [
                                                        isYearly ? plan.yearlyPrice : plan.monthlyPrice,
                                                        "€"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-period",
                                                    children: "Pe luna"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-desc",
                                                    children: plan.description
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-features",
                                                    children: plan.features.map((feat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "jsx-c2750741f2bdac20" + " " + "easycare-feature",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-feature-icon",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/icons-medelise/md-system/md-ico-check.webp",
                                                                        alt: "",
                                                                        width: 12,
                                                                        height: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                                        lineNumber: 691,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                                    lineNumber: 690,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-c2750741f2bdac20" + " " + "easycare-feature-text",
                                                                    children: feat
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                                    lineNumber: 698,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, feat, true, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                            lineNumber: 689,
                                                            columnNumber: 49
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                            lineNumber: 673,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c2750741f2bdac20" + " " + "easycare-actions",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: isSelected ? 'secondary' : 'primary',
                                                    isFullWidth: true,
                                                    style: isSelected ? {
                                                        '--btn-bg': 'var(--color-white)',
                                                        '--btn-bg-hover': 'var(--color-white)',
                                                        '--btn-text': 'var(--color-primary)',
                                                        '--btn-border': 'transparent'
                                                    } : undefined,
                                                    children: "Activează planul"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                    lineNumber: 705,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: "outline",
                                                    isFullWidth: true,
                                                    style: isSelected ? {
                                                        '--btn-border': 'var(--color-white)',
                                                        '--btn-text': 'var(--color-white)',
                                                        '--btn-bg': 'transparent',
                                                        '--btn-bg-hover': 'transparent'
                                                    } : undefined,
                                                    children: "Află toate detaliile"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                                    lineNumber: 721,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                            lineNumber: 704,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, plan.id, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                                    lineNumber: 659,
                                    columnNumber: 33
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                            lineNumber: 654,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                    lineNumber: 561,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx",
                lineNumber: 560,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/features/homepage/components/FAQSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
/* ── FAQ Data ──────────────────────────────────────────────── */ const FAQ_ITEMS = [
    {
        question: 'Cum pot programa o vizită medicală la domiciliu?',
        answer: 'Poți programa direct online din contul tău Medelise, în mai puțin de 60 de secunde.'
    },
    {
        question: 'Ce tipuri de servicii medicale sunt disponibile acasă?',
        answer: 'Oferim consultații generale, recoltări analize, tratamente, perfuzii și monitorizări la domiciliu.'
    },
    {
        question: 'Cât durează până vine echipa medicală la mine?',
        answer: 'Timpul mediu de intervenție în București este sub 90 de minute, în funcție de urgență și oră.'
    },
    {
        question: 'Este nevoie de trimitere medicală sau bilet de internare?',
        answer: 'Nu. Medelise funcționează pe bază de abonament sau servicii la cerere, fără birocrație.'
    },
    {
        question: 'Pot folosi Medelise pentru un părinte în vârstă sau copil?',
        answer: 'Da, poți programa vizita în numele unei alte persoane și să gestionezi totul dintr-un singur cont.'
    },
    {
        question: 'Care este diferența dintre un abonament și o vizită unică?',
        answer: 'Abonamentele includ acces rapid, reduceri și intervenții gratuite. Vizitele unice sunt disponibile fără abonament, la tarif standard.'
    }
];
function FAQSection() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggle = (i)=>setOpenIndex((prev)=>prev === i ? null : i);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d35fc0837e0b7e71",
                children: ".faq.jsx-d35fc0837e0b7e71{background:var(--color-white);width:100%;padding:64px 16px;overflow:hidden}.faq-inner.jsx-d35fc0837e0b7e71{flex-direction:column;align-items:center;gap:32px;margin:0 auto;display:flex}.faq-header.jsx-d35fc0837e0b7e71{text-align:center;flex-direction:column;align-items:center;gap:12px;padding:16px 0 32px;display:flex}.faq-surtitle.jsx-d35fc0837e0b7e71{color:var(--color-surface-border);font-family:var(--font-heading);margin:0;font-size:24px;font-weight:600;line-height:1.22}.faq-title.jsx-d35fc0837e0b7e71{color:var(--color-primary);font-family:var(--font-heading);max-width:650px;margin:0;font-size:24px;font-weight:600;line-height:1.22}.faq-list.jsx-d35fc0837e0b7e71{flex-direction:column;gap:16px;width:100%;display:flex}.faq-item.jsx-d35fc0837e0b7e71{border:1px solid var(--color-surface-border);cursor:pointer;border-radius:8px;width:100%;padding:24px;transition:border-color .2s}.faq-item.jsx-d35fc0837e0b7e71:hover{border-color:var(--color-primary)}.faq-question-row.jsx-d35fc0837e0b7e71{align-items:center;gap:16px;display:flex}.faq-chevron.jsx-d35fc0837e0b7e71{flex-shrink:0;justify-content:center;align-items:center;width:24px;height:24px;transition:transform .3s;display:flex}.faq-chevron.open.jsx-d35fc0837e0b7e71{transform:rotate(180deg)}.faq-question.jsx-d35fc0837e0b7e71{color:var(--color-primary);font-family:var(--font-heading);flex:1;margin:0;font-size:16px;font-weight:700;line-height:1.4}.faq-answer.jsx-d35fc0837e0b7e71{opacity:0;max-height:0;margin-top:0;transition:max-height .35s,opacity .25s,margin .35s;overflow:hidden}.faq-answer.open.jsx-d35fc0837e0b7e71{opacity:1;max-height:200px;margin-top:16px}.faq-answer-text.jsx-d35fc0837e0b7e71{color:var(--color-primary);font-family:var(--font-heading);margin:0;font-size:16px;font-weight:400;line-height:24px}.faq-cta.jsx-d35fc0837e0b7e71{background:var(--color-primary);text-align:center;border-radius:20px;flex-direction:column;align-items:center;gap:24px;width:100%;padding:32px 24px;display:flex}.faq-cta-content.jsx-d35fc0837e0b7e71{flex-direction:column;align-items:center;gap:12px;display:flex}.faq-cta-title.jsx-d35fc0837e0b7e71{color:var(--color-white);font-family:var(--font-heading);margin:0;font-size:20px;font-weight:600;line-height:1.33}.faq-cta-desc.jsx-d35fc0837e0b7e71{color:var(--color-white);font-family:var(--font-heading);max-width:610px;margin:0;font-size:16px;font-weight:500;line-height:24px}.faq-cta-btn.jsx-d35fc0837e0b7e71{background:var(--color-white);cursor:pointer;border:none;border-radius:8px;align-items:center;gap:8px;padding:10px 20px;transition:opacity .2s;display:inline-flex}.faq-cta-btn.jsx-d35fc0837e0b7e71:hover{opacity:.9}.faq-cta-btn-text.jsx-d35fc0837e0b7e71{color:var(--color-primary);font-family:var(--font-heading);font-size:16px;font-weight:600;line-height:24px}.faq-cta-btn-icon.jsx-d35fc0837e0b7e71{justify-content:center;align-items:center;width:20px;height:20px;display:flex}@media (width>=768px){.faq.jsx-d35fc0837e0b7e71{padding:32px var(--space-section-px)}.faq-surtitle.jsx-d35fc0837e0b7e71,.faq-title.jsx-d35fc0837e0b7e71{font-size:30px;line-height:1.22}.faq-item.jsx-d35fc0837e0b7e71{padding:32px}.faq-question.jsx-d35fc0837e0b7e71{font-size:18px}.faq-cta.jsx-d35fc0837e0b7e71{gap:32px;padding:32px 48px}.faq-cta-title.jsx-d35fc0837e0b7e71{font-size:24px;line-height:32px}}@media (width>=1024px){.faq.jsx-d35fc0837e0b7e71{padding:32px 64px}.faq-surtitle.jsx-d35fc0837e0b7e71,.faq-title.jsx-d35fc0837e0b7e71{font-size:36px;line-height:44px}.faq-question.jsx-d35fc0837e0b7e71{font-size:20px;line-height:28px}.faq-cta.jsx-d35fc0837e0b7e71{padding:32px 64px}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "faq-heading",
                className: "jsx-d35fc0837e0b7e71" + " " + "faq",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-d35fc0837e0b7e71" + " " + "faq-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d35fc0837e0b7e71" + " " + "faq-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-d35fc0837e0b7e71" + " " + "faq-surtitle",
                                    children: "Frequently Asked Questions"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                    lineNumber: 305,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "faq-heading",
                                    className: "jsx-d35fc0837e0b7e71" + " " + "faq-title",
                                    children: "Tot ce trebuie să știi despre serviciile Medelise"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                    lineNumber: 306,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                            lineNumber: 304,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d35fc0837e0b7e71" + " " + "faq-list",
                            children: FAQ_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>toggle(i),
                                    role: "button",
                                    tabIndex: 0,
                                    "aria-expanded": openIndex === i,
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggle(i);
                                        }
                                    },
                                    className: "jsx-d35fc0837e0b7e71" + " " + "faq-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d35fc0837e0b7e71" + " " + "faq-question-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-d35fc0837e0b7e71" + " " + `faq-chevron ${openIndex === i ? 'open' : ''}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/icons-medelise/md-system/md-ico-chevron-down.webp",
                                                        alt: "",
                                                        width: 18,
                                                        height: 18,
                                                        className: "faq-chevron-img"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "jsx-d35fc0837e0b7e71" + " " + "faq-question",
                                                    children: item.question
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                            lineNumber: 328,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d35fc0837e0b7e71" + " " + `faq-answer ${openIndex === i ? 'open' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-d35fc0837e0b7e71" + " " + "faq-answer-text",
                                                children: item.answer
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                                lineNumber: 345,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                            lineNumber: 342,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                    lineNumber: 314,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                            lineNumber: 312,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d35fc0837e0b7e71" + " " + "faq-cta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d35fc0837e0b7e71" + " " + "faq-cta-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-d35fc0837e0b7e71" + " " + "faq-cta-title",
                                            children: "Vrei să afli mai multe?"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                            lineNumber: 354,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-d35fc0837e0b7e71" + " " + "faq-cta-desc",
                                            children: "Contactează-ne și primești suport personalizat din partea echipei Medelise. Răspundem prompt și clar."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                            lineNumber: 355,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                    lineNumber: 353,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "jsx-d35fc0837e0b7e71" + " " + "faq-cta-btn",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-d35fc0837e0b7e71" + " " + "faq-cta-btn-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/icons-medelise/md-business/md-ico-mail.webp",
                                                alt: "",
                                                width: 20,
                                                height: 20,
                                                className: "faq-cta-mail-img"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                                lineNumber: 362,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                            lineNumber: 361,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-d35fc0837e0b7e71" + " " + "faq-cta-btn-text",
                                            children: "Contactează-ne"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                            lineNumber: 370,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                                    lineNumber: 360,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                            lineNumber: 352,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                    lineNumber: 302,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/homepage/components/FAQSection.tsx",
                lineNumber: 301,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/shared/constants/images.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Centralized Image Registry
 * ──────────────────────────
 * All content image paths from `public/images-medelise/`.
 * Import from here instead of hardcoding paths in components.
 *
 * Usage:
 *   import { IMAGES } from '@shared/constants/images';
 *   <Image src={IMAGES.quality.macbookMockup} alt="..." ... />
 *
 * Governance: see `public/images-medelise/reguli-stricte.md`
 */ __turbopack_context__.s([
    "IMAGES",
    ()=>IMAGES
]);
const IMAGES = {
    /** Quality Section — MacBook mockup assets */ quality: {
        /** MacBook Pro mockup — desktop version with medical dashboard */ macbookMockup: '/images-medelise/md-quality/md-img-macbook-mockup.webp',
        /** MacBook Pro — tablet/mobile fallback */ macbookTablet: '/images-medelise/md-quality/md-img-macbook-tablet.webp'
    },
    /** Portal Section — Patient Portal imagery */ portal: {
        /** Main composition image — 588×380 */ mainImage: '/images-medelise/md-portal/md-img-portal-main.webp',
        /** Side accent image — 204×312 */ sideImage: '/images-medelise/md-portal/md-img-portal-side.webp'
    },
    /** Watch — Apple Watch Ultra assets */ watch: {
        /** Apple Watch Ultra with Medelise notifications on screen */ iwatchNotifications: '/images-medelise/md-watch/md-img-iwatch-ultra-notifications.webp'
    },
    /** Hero Section Assets */ hero: {
        background: '/images-medelise/md-hero/md-img-hero-medical-02.webp',
        avatar1: '/images-medelise/md-hero/md-img-avatar-01.webp',
        avatar2: '/images-medelise/md-hero/md-img-avatar-02.webp',
        avatar3: '/images-medelise/md-hero/md-img-avatar-03.webp'
    }
};
}),
"[project]/apps/web/src/features/homepage/components/HeroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/shared/constants/images.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "7c85d505ac50c9b6",
                children: '.hero-section.jsx-7c85d505ac50c9b6{background:var(--color-white);flex-direction:column;align-items:center;width:100%;min-height:100svh;display:flex;position:relative;overflow:hidden}.hero-background.jsx-7c85d505ac50c9b6{z-index:0;position:absolute;inset:0}.hero-blur-overlay.jsx-7c85d505ac50c9b6{z-index:1;-webkit-backdrop-filter:blur(14px);pointer-events:none;background:linear-gradient(#ffffffa6 0%,#ffffff4d 35%,#ffffff0d 55%,#ffffff4d 75%,#ffffff8c 100%);position:absolute;inset:64px 0 0;-webkit-mask-image:linear-gradient(#0000 0%,#000 8%,#000000b3 30%,#00000040 50%,#0009 70%,#000 100%);mask-image:linear-gradient(#0000 0%,#000 8%,#000000b3 30%,#00000040 50%,#0009 70%,#000 100%)}.hero-content.jsx-7c85d505ac50c9b6{width:100%;padding:clamp(64px,12vh,210px)var(--space-section-px-sm)var(--space-6);z-index:1;justify-content:flex-start;align-items:flex-end;gap:var(--space-10);flex-direction:column;flex:1;display:flex;position:relative}.hero-top-block.jsx-7c85d505ac50c9b6{flex-direction:column;align-self:stretch;gap:40px;display:flex}.hero-text-group.jsx-7c85d505ac50c9b6{flex-direction:column;gap:12px;display:flex}.hero-heading.jsx-7c85d505ac50c9b6{color:var(--color-primary);font-size:26px;font-family:var(--font-display);margin:0;font-weight:500;line-height:33.8px}.hero-subtitle-cta.jsx-7c85d505ac50c9b6{z-index:10;flex-direction:column;gap:16px;display:flex;position:relative}.hero-subtitle-cta.jsx-7c85d505ac50c9b6:before{content:"";z-index:-1;-webkit-backdrop-filter:blur(12px);background:#ffffff26;border-radius:16px;position:absolute;inset:-24px;-webkit-mask-image:radial-gradient(#000 30%,#0000 80%);mask-image:radial-gradient(#000 30%,#0000 80%)}.hero-subtitle.jsx-7c85d505ac50c9b6{color:var(--color-primary);max-width:75%;margin:0;font-size:16px;font-weight:500;line-height:22px}.hero-cta-group.jsx-7c85d505ac50c9b6{cursor:pointer;align-self:stretch;align-items:center;text-decoration:none;display:inline-flex}.hero-social-proof.jsx-7c85d505ac50c9b6{align-self:flex-end;align-items:flex-start;gap:var(--space-4);z-index:2;flex-direction:column;width:280px;margin-top:auto;display:flex;position:relative}.hero-social-proof.jsx-7c85d505ac50c9b6:before{content:"";z-index:-1;-webkit-backdrop-filter:blur(16px);background:#ffffff26;border-radius:24px;position:absolute;inset:-32px;-webkit-mask-image:radial-gradient(#000 35%,#0000 75%);mask-image:radial-gradient(#000 35%,#0000 75%)}.hero-sp-label.jsx-7c85d505ac50c9b6{color:var(--color-primary);font-size:18px;font-weight:600;line-height:25.2px}.hero-avatars-group.jsx-7c85d505ac50c9b6{align-items:center;display:inline-flex}.hero-avatar-wrapper.jsx-7c85d505ac50c9b6{border:2px solid var(--color-white);border-radius:50%;flex-shrink:0;align-items:flex-end;width:64px;height:64px;display:flex;overflow:hidden}.hero-avatar-wrapper.jsx-7c85d505ac50c9b6:not(:first-child){margin-left:-16px}.hero-avatar-wrapper.jsx-7c85d505ac50c9b6:first-child{z-index:4}.hero-avatar-wrapper.jsx-7c85d505ac50c9b6:nth-child(2){z-index:3}.hero-avatar-wrapper.jsx-7c85d505ac50c9b6:nth-child(3){z-index:2}.hero-avatar-img.jsx-7c85d505ac50c9b6{object-fit:cover;object-position:top;width:100%;height:56px}.hero-avatar-count.jsx-7c85d505ac50c9b6{background:var(--color-surface-card);border:2px solid var(--color-white);z-index:1;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;width:64px;height:64px;margin-left:-16px;display:flex}.hero-avatar-count-text.jsx-7c85d505ac50c9b6{color:var(--color-error);font-size:14px;font-weight:500;line-height:19.6px}.hero-sp-stat-title.jsx-7c85d505ac50c9b6{color:var(--color-accent);font-size:18px;font-weight:500;line-height:25.2px}.hero-sp-stat-desc.jsx-7c85d505ac50c9b6{color:var(--color-primary);font-size:14px;font-weight:600;line-height:21px}@media (width>=641px){.hero-content.jsx-7c85d505ac50c9b6{padding:clamp(68px,14vh,210px)var(--space-section-px-md)var(--space-8)}.hero-text-group.jsx-7c85d505ac50c9b6,.hero-heading.jsx-7c85d505ac50c9b6,.hero-subtitle-cta.jsx-7c85d505ac50c9b6,.hero-subtitle.jsx-7c85d505ac50c9b6{max-width:75%}}@media (width>=1025px){.hero-blur-overlay.jsx-7c85d505ac50c9b6{display:none}.hero-section.jsx-7c85d505ac50c9b6{min-height:100svh}.hero-content.jsx-7c85d505ac50c9b6{padding:210px var(--space-section-px-lg)var(--space-16)}.hero-top-block.jsx-7c85d505ac50c9b6{gap:64px}.hero-text-group.jsx-7c85d505ac50c9b6{max-width:800px}.hero-heading.jsx-7c85d505ac50c9b6{font-size:var(--text-h1);max-width:728px;line-height:1.3}.hero-subtitle-cta.jsx-7c85d505ac50c9b6{gap:32px;max-width:600px}.hero-subtitle-cta.jsx-7c85d505ac50c9b6:before,.hero-social-proof.jsx-7c85d505ac50c9b6:before{display:none}.hero-subtitle.jsx-7c85d505ac50c9b6{font-size:var(--text-body-lg);font-family:var(--font-display);max-width:448px;line-height:1.4}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-7c85d505ac50c9b6" + " " + "hero-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7c85d505ac50c9b6" + " " + "hero-background",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].hero.background,
                            alt: "Medelise Hero Background",
                            fill: true,
                            priority: true,
                            style: {
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                            lineNumber: 331,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                        lineNumber: 330,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7c85d505ac50c9b6" + " " + "hero-blur-overlay"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                        lineNumber: 341,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7c85d505ac50c9b6" + " " + "hero-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7c85d505ac50c9b6" + " " + "hero-top-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-7c85d505ac50c9b6" + " " + "hero-heading",
                                        children: "Vizite medicale acasă, programabile în sub 60 de secunde."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                        lineNumber: 346,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7c85d505ac50c9b6" + " " + "hero-subtitle-cta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7c85d505ac50c9b6" + " " + "hero-subtitle",
                                                children: "Creează-ți contul gratuit în Portalul MEDELISE și programează o vizită medicală acasă, fără apeluri sau cozi."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                lineNumber: 351,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                className: "hero-cta-group",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    variant: "primary",
                                                    isFullWidth: true,
                                                    children: "Creeaza contul gratuit"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                lineNumber: 355,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                        lineNumber: 350,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                lineNumber: 345,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7c85d505ac50c9b6" + " " + "hero-social-proof",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7c85d505ac50c9b6" + " " + "hero-sp-label",
                                        children: "Apreciat de cei mai buni medici"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                        lineNumber: 365,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7c85d505ac50c9b6" + " " + "hero-avatars-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--color-accent)'
                                                },
                                                className: "jsx-7c85d505ac50c9b6" + " " + "hero-avatar-wrapper",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].hero.avatar1,
                                                    alt: "Medic 1",
                                                    width: 64,
                                                    height: 64,
                                                    className: "hero-avatar-img",
                                                    style: {
                                                        width: '100%',
                                                        height: '56px',
                                                        objectFit: 'cover',
                                                        objectPosition: 'top'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                lineNumber: 368,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--color-secondary)'
                                                },
                                                className: "jsx-7c85d505ac50c9b6" + " " + "hero-avatar-wrapper",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].hero.avatar2,
                                                    alt: "Medic 2",
                                                    width: 64,
                                                    height: 64,
                                                    className: "hero-avatar-img",
                                                    style: {
                                                        width: '100%',
                                                        height: '56px',
                                                        objectFit: 'cover',
                                                        objectPosition: 'top'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                lineNumber: 371,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--color-primary)'
                                                },
                                                className: "jsx-7c85d505ac50c9b6" + " " + "hero-avatar-wrapper",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].hero.avatar3,
                                                    alt: "Medic 3",
                                                    width: 64,
                                                    height: 64,
                                                    className: "hero-avatar-img",
                                                    style: {
                                                        width: '100%',
                                                        height: '56px',
                                                        objectFit: 'cover',
                                                        objectPosition: 'top'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                lineNumber: 374,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7c85d505ac50c9b6" + " " + "hero-avatar-count",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-7c85d505ac50c9b6" + " " + "hero-avatar-count-text",
                                                    children: "40+"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                                lineNumber: 377,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                        lineNumber: 367,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7c85d505ac50c9b6" + " " + "hero-sp-stat-title",
                                        children: "Peste 40 de specialiști"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                        lineNumber: 382,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7c85d505ac50c9b6" + " " + "hero-sp-stat-desc",
                                        children: "Medici experți colaborează cu MEDELISE pentru diagnostice precise și rapide."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                        lineNumber: 383,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                                lineNumber: 364,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                        lineNumber: 343,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/homepage/components/HeroSection.tsx",
                lineNumber: 328,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorksSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
/* ── Step Data ──────────────────────────────────────────────── */ const STEPS = [
    {
        step: 'STEP 1',
        icon: '/icons-medelise/md-business/md-ico-calendar-check.webp',
        title: 'Creezi Contul și Alegi Serviciul',
        description: 'Începe prin a-ți crea un cont gratuit în Portalul Pacientului Medelise. Odată autentificat, ai acces la întreaga gamă de servicii: de la analize de laborator și kinetoterapie, până la medicină de prevenție sau consulturi de specialitate. Totul este digital, rapid și sigur.'
    },
    {
        step: 'STEP 2',
        icon: '/icons-medelise/md-medical/md-ico-stethoscope.webp',
        title: 'Programezi Vizita la Domiciliu',
        description: 'Selectezi tipul de consultație sau investigație necesară, alegi data și ora care îți convin, iar echipa noastră confirmă programarea în mai puțin de 60 de secunde. În orașele mari, echipa medicală poate ajunge la ușa ta în maximum 90 de minute pentru solicitările urgente.'
    },
    {
        step: 'STEP 3',
        icon: '/icons-medelise/md-document/md-ico-clipboard.webp',
        title: 'Realizarea Vizitei Medicale',
        description: 'Personalul medical calificat (medici, asistenți sau kinetoterapeuți) se deplasează la adresa ta cu toate echipamentele necesare. Beneficiezi de îngrijire profesională în confortul casei tale, eliminând stresul deplasării sau al timpului pierdut în sălile de așteptare.'
    },
    {
        step: 'STEP 4',
        icon: '/icons-medelise/md-system/md-ico-dashboard.webp',
        title: 'Dashboard Complet',
        description: 'Istoric și Facturare Imediat după vizită, experiența ta se mută în plan digital. În dashboard-ul tău personal vei regăsi factura aferentă serviciului, rezultatele analizelor și recomandările medicale. Astfel, îți construiești un istoric medical digital complet, accesibil 24/7, pentru o monitorizare simplă și eficientă a sănătății tale.'
    }
];
const WHY_ITEMS = [
    {
        label: 'Transparență:',
        text: 'Factura și costurile sunt mereu vizibile în cont.'
    },
    {
        label: 'Accesibilitate:',
        text: 'Istoricul tău medical este mereu la un click distanță.'
    },
    {
        label: 'Eficiență:',
        text: 'Fără hârtii pierdute; totul este centralizat în portalul tău.'
    }
];
function HowItWorksSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d5c10c85a48de12e",
                children: ".hiw.jsx-d5c10c85a48de12e{background:var(--color-white);width:100%;padding:32px 16px;overflow:hidden}.hiw-inner.jsx-d5c10c85a48de12e{flex-direction:column;gap:32px;margin:0 auto;display:flex}.hiw-title.jsx-d5c10c85a48de12e{color:var(--color-primary);font-family:var(--font-heading);margin:0;font-size:26px;font-weight:500;line-height:1.3}.hiw-content.jsx-d5c10c85a48de12e{flex-direction:column;gap:32px;display:flex}.hiw-steps-wrapper.jsx-d5c10c85a48de12e{grid-template-rows:auto auto auto;grid-template-columns:1fr auto 1fr;gap:0;display:grid}.hiw-step--1.jsx-d5c10c85a48de12e{grid-area:1/1;padding:0 12px 16px 0}.hiw-step--2.jsx-d5c10c85a48de12e{grid-area:1/3;padding:0 0 16px 12px}.hiw-step--3.jsx-d5c10c85a48de12e{grid-area:3/1;padding:16px 12px 0 0}.hiw-step--4.jsx-d5c10c85a48de12e{grid-area:3/3;padding:16px 0 0 12px}.hiw-divider-v.jsx-d5c10c85a48de12e{background:var(--color-surface-border);grid-area:1/2/4;width:1px;display:block}.hiw-divider-h.jsx-d5c10c85a48de12e{background:var(--color-surface-border);grid-area:2/1/auto/4;height:1px;display:block}.hiw-step.jsx-d5c10c85a48de12e{flex-direction:column;gap:16px;display:flex}.hiw-step-label.jsx-d5c10c85a48de12e{color:var(--color-primary);font-family:var(--font-body);margin:0;font-size:12px;font-weight:500;line-height:18px}.hiw-step-icon.jsx-d5c10c85a48de12e{background:var(--color-primary);border-radius:100px;flex-shrink:0;justify-content:center;align-items:center;width:32px;height:32px;display:flex}.hiw-step-icon.jsx-d5c10c85a48de12e .hiw-step-icon-img{filter:brightness(0)invert()}.hiw-step-title.jsx-d5c10c85a48de12e{color:var(--color-primary);font-family:var(--font-heading);margin:0;font-size:14px;font-weight:500;line-height:19.6px}.hiw-step-desc.jsx-d5c10c85a48de12e{color:var(--color-primary);font-family:var(--font-body);margin:4px 0 0;font-size:16px;font-weight:300;line-height:24px}.hiw-why.jsx-d5c10c85a48de12e{flex-direction:column;gap:24px;padding:24px 0;display:flex}.hiw-why-title.jsx-d5c10c85a48de12e{color:var(--color-primary);font-family:var(--font-body);margin:0;font-size:24px;font-weight:600;line-height:36px}.hiw-why-list.jsx-d5c10c85a48de12e{flex-direction:column;gap:8px;display:flex}.hiw-why-item.jsx-d5c10c85a48de12e{align-items:flex-start;gap:16px;display:flex}.hiw-why-label.jsx-d5c10c85a48de12e{color:var(--color-primary);font-family:var(--font-body);flex-shrink:0;min-width:120px;font-size:16px;font-weight:500;line-height:24px}.hiw-why-text.jsx-d5c10c85a48de12e{color:var(--color-primary);font-family:var(--font-body);font-size:16px;font-weight:400;line-height:24px}@media (width>=768px){.hiw.jsx-d5c10c85a48de12e{padding:48px var(--space-section-px)}.hiw-inner.jsx-d5c10c85a48de12e{gap:40px}.hiw-title.jsx-d5c10c85a48de12e{font-size:38px}.hiw-step--1.jsx-d5c10c85a48de12e{padding:0 24px 24px 0}.hiw-step--2.jsx-d5c10c85a48de12e{padding:0 0 24px 24px}.hiw-step--3.jsx-d5c10c85a48de12e{padding:24px 24px 0 0}.hiw-step--4.jsx-d5c10c85a48de12e{padding:24px 0 0 24px}.hiw-step-label.jsx-d5c10c85a48de12e{font-size:14px;line-height:20px}.hiw-step-icon.jsx-d5c10c85a48de12e{width:40px;height:40px}.hiw-step-title.jsx-d5c10c85a48de12e{font-size:18px;line-height:25px}.hiw-step-desc.jsx-d5c10c85a48de12e{font-size:13px;line-height:20px}}@media (width>=1024px){.hiw.jsx-d5c10c85a48de12e{padding:64px var(--space-section-px)}.hiw-inner.jsx-d5c10c85a48de12e{gap:48px}.hiw-title.jsx-d5c10c85a48de12e{font-size:50px;line-height:65px}.hiw-content.jsx-d5c10c85a48de12e{flex-direction:row-reverse;justify-content:space-between;align-items:flex-start;gap:40px;padding:24px 0}.hiw-steps-wrapper.jsx-d5c10c85a48de12e{flex:1}.hiw-step--1.jsx-d5c10c85a48de12e{padding:0 40px 40px 0}.hiw-step--2.jsx-d5c10c85a48de12e{padding:0 0 40px 40px}.hiw-step--3.jsx-d5c10c85a48de12e{padding:40px 40px 0 0}.hiw-step--4.jsx-d5c10c85a48de12e{padding:40px 0 0 40px}.hiw-step.jsx-d5c10c85a48de12e{gap:24px}.hiw-step-label.jsx-d5c10c85a48de12e{font-size:20px;line-height:28px}.hiw-step-icon.jsx-d5c10c85a48de12e{width:48px;height:48px}.hiw-step-title.jsx-d5c10c85a48de12e{font-size:24px;line-height:33.6px}.hiw-step-desc.jsx-d5c10c85a48de12e{font-size:16px;font-weight:400;line-height:24px}.hiw-why.jsx-d5c10c85a48de12e{flex-shrink:0;align-self:flex-end;width:400px}.hiw-why-title.jsx-d5c10c85a48de12e{font-size:28px}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "hiw-heading",
                className: "jsx-d5c10c85a48de12e" + " " + "hiw",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-d5c10c85a48de12e" + " " + "hiw-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "hiw-heading",
                            className: "jsx-d5c10c85a48de12e" + " " + "hiw-title",
                            children: [
                                "Cum funcționează serviciul Medelise",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "jsx-d5c10c85a48de12e"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                    lineNumber: 336,
                                    columnNumber: 60
                                }, this),
                                "În doar 3 pași simpli."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                            lineNumber: 335,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d5c10c85a48de12e" + " " + "hiw-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d5c10c85a48de12e" + " " + "hiw-steps-wrapper",
                                    children: [
                                        STEPS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "jsx-d5c10c85a48de12e" + " " + `hiw-step hiw-step--${i + 1}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-d5c10c85a48de12e" + " " + "hiw-step-label",
                                                        children: s.step
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-d5c10c85a48de12e" + " " + "hiw-step-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: s.icon,
                                                            alt: "",
                                                            width: 24,
                                                            height: 24,
                                                            className: "hiw-step-icon-img"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-d5c10c85a48de12e",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-d5c10c85a48de12e" + " " + "hiw-step-title",
                                                                children: s.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-d5c10c85a48de12e" + " " + "hiw-step-desc",
                                                                children: s.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, s.step, true, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                lineNumber: 345,
                                                columnNumber: 33
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": "true",
                                            className: "jsx-d5c10c85a48de12e" + " " + "hiw-divider-v"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                            lineNumber: 363,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": "true",
                                            className: "jsx-d5c10c85a48de12e" + " " + "hiw-divider-h"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                            lineNumber: 365,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                    lineNumber: 343,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "jsx-d5c10c85a48de12e" + " " + "hiw-why",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-d5c10c85a48de12e" + " " + "hiw-why-title",
                                            children: "De ce să alegi acest flux?"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                            lineNumber: 370,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d5c10c85a48de12e" + " " + "hiw-why-list",
                                            children: WHY_ITEMS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-d5c10c85a48de12e" + " " + "hiw-why-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-d5c10c85a48de12e" + " " + "hiw-why-label",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-d5c10c85a48de12e" + " " + "hiw-why-text",
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, item.label, true, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                            lineNumber: 371,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                                    lineNumber: 369,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                            lineNumber: 341,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                    lineNumber: 333,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx",
                lineNumber: 332,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/components/ui/StatCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
'use client';
;
;
function StatCard({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "da7ccb28681fef7f",
                children: ".stat-card.jsx-da7ccb28681fef7f{padding:var(--space-6);background:var(--color-primary);border-radius:var(--radius-main);justify-content:flex-start;align-items:center;gap:var(--space-2);flex-direction:column;flex:1 1 0;display:inline-flex}.stat-label.jsx-da7ccb28681fef7f{text-align:center;color:var(--color-white);font-size:var(--text-body-lg);font-weight:600;line-height:var(--lh-body);align-self:stretch}.stat-value.jsx-da7ccb28681fef7f{color:var(--color-white);font-size:var(--text-display);font-weight:600;line-height:var(--lh-heading)}@media (width<=640px){.stat-card.jsx-da7ccb28681fef7f{flex:unset;align-self:stretch}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-da7ccb28681fef7f" + " " + "stat-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-da7ccb28681fef7f" + " " + "stat-label",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ui/StatCard.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-da7ccb28681fef7f" + " " + "stat-value",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ui/StatCard.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/ui/StatCard.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MissionStatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/StatCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
/* ── Mission Stats Section ─────────────────────────────────────── */ const STATS = [
    {
        label: 'Ani de experienta',
        value: '10'
    },
    {
        label: 'Membri',
        value: '120+'
    },
    {
        label: 'Programari',
        value: '1000+'
    },
    {
        label: 'Pacienti multumiti',
        value: '98%'
    }
];
function MissionStatsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "fdc3d86e900dc58e",
                children: ".mission-section.jsx-fdc3d86e900dc58e{background:var(--color-white);flex-direction:column;justify-content:flex-start;align-items:center;width:100%;display:flex}.mission-inner.jsx-fdc3d86e900dc58e{flex-direction:column;justify-content:flex-start;align-self:stretch;align-items:center;padding-top:64px;padding-bottom:64px;display:flex}.mission-content.jsx-fdc3d86e900dc58e{flex-direction:column;justify-content:center;align-self:stretch;align-items:center;display:flex}.mission-text-block.jsx-fdc3d86e900dc58e{padding-top:var(--space-4);padding-bottom:var(--space-16);background:var(--color-white);flex-direction:column;justify-content:center;align-self:stretch;align-items:stretch;display:flex}.mission-text-inner.jsx-fdc3d86e900dc58e{justify-content:center;align-self:stretch;align-items:stretch;gap:var(--space-2);flex-direction:column;display:flex}.mission-text-group.jsx-fdc3d86e900dc58e{justify-content:center;align-self:stretch;align-items:stretch;gap:var(--space-3);flex-direction:column;display:flex}.mission-heading.jsx-fdc3d86e900dc58e{text-align:center;color:var(--color-primary);font-size:var(--text-h2);font-weight:700;line-height:var(--lh-heading);word-wrap:break-word;align-self:stretch;margin:0}.mission-description.jsx-fdc3d86e900dc58e{text-align:center;width:100%;max-width:none;color:var(--color-primary);font-size:var(--text-body);font-weight:500;line-height:var(--lh-body);word-wrap:break-word;align-self:stretch;margin:0}.mission-description--narrow.jsx-fdc3d86e900dc58e{text-align:center;width:100%;max-width:60ch;color:var(--color-primary);font-size:var(--text-body);font-weight:500;line-height:var(--lh-body);word-wrap:break-word;align-self:stretch;margin:0 auto}.mission-stats-row.jsx-fdc3d86e900dc58e{justify-content:center;align-self:stretch;align-items:stretch;gap:var(--space-8);display:flex}@media (width<=1024px){.mission-content.jsx-fdc3d86e900dc58e{gap:var(--space-6)}.mission-text-block.jsx-fdc3d86e900dc58e{padding-bottom:var(--space-12)}.mission-text-group.jsx-fdc3d86e900dc58e{gap:var(--space-4)}.mission-heading.jsx-fdc3d86e900dc58e{font-weight:600}.mission-description.jsx-fdc3d86e900dc58e,.mission-description--narrow.jsx-fdc3d86e900dc58e{font-weight:400}.mission-stats-row.jsx-fdc3d86e900dc58e{gap:var(--space-8);grid-template-columns:1fr 1fr;display:grid}}@media (width<=640px){.mission-content.jsx-fdc3d86e900dc58e{padding-top:var(--space-12);padding-bottom:var(--space-12);gap:var(--space-6)}.mission-text-block.jsx-fdc3d86e900dc58e{padding-top:var(--space-4);padding-bottom:var(--space-8)}.mission-text-inner.jsx-fdc3d86e900dc58e{gap:var(--space-6)}.mission-text-group.jsx-fdc3d86e900dc58e{gap:var(--space-4)}.mission-heading.jsx-fdc3d86e900dc58e{font-weight:600}.mission-description.jsx-fdc3d86e900dc58e,.mission-description--narrow.jsx-fdc3d86e900dc58e{text-align:left;font-weight:400}.mission-stats-row.jsx-fdc3d86e900dc58e{gap:var(--space-4);flex-direction:column;display:flex}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "mission-heading",
                className: "jsx-fdc3d86e900dc58e" + " " + "mission-section section-padding",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-fdc3d86e900dc58e" + " " + "mission-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-fdc3d86e900dc58e" + " " + "mission-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-fdc3d86e900dc58e" + " " + "mission-text-block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-fdc3d86e900dc58e" + " " + "mission-text-inner",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-fdc3d86e900dc58e" + " " + "mission-text-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "mission-heading",
                                                className: "jsx-fdc3d86e900dc58e" + " " + "mission-heading",
                                                children: "Vă doriți o viață sănătoasă și echilibrată?"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                                                lineNumber: 215,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-fdc3d86e900dc58e" + " " + "mission-description",
                                                children: [
                                                    "La noi, sănătatea și bunăstarea ta sunt pe primul loc!",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                        className: "jsx-fdc3d86e900dc58e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Oferim soluții personalizate de îngrijire medicală la domiciliu, adaptate nevoilor fiecărui pacient."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                                                lineNumber: 219,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-fdc3d86e900dc58e" + " " + "mission-description--narrow",
                                                children: "Indiferent dacă ai nevoie de asistență pentru un membru al familiei, recuperare după o intervenție chirurgicală sau pur și simplu de sprijin pentru gestionarea unei afecțiuni cronice, echipa noastră de profesioniști calificați este aici pentru tine."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                                                lineNumber: 227,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                                        lineNumber: 214,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                                    lineNumber: 213,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                                lineNumber: 212,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-fdc3d86e900dc58e" + " " + "mission-stats-row",
                                children: STATS.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$StatCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        label: stat.label,
                                        value: stat.value
                                    }, stat.label, false, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                                        lineNumber: 244,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                                lineNumber: 242,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                        lineNumber: 210,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                    lineNumber: 209,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsletterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function NewsletterSection({ heading = 'Intră în comunitatea Medelise, a celor care văd sănătatea altfel.', description = 'Viitorul sănătății este personalizat, digital și uman. Noi construim acest viitor pas cu pas, alături de cei care cred că medicina înseamnă mai mult decât rețete și protocoale.' }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "newsletter-heading",
                className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-outer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-text",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                id: "newsletter-heading",
                                                className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-heading",
                                                children: heading
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-description",
                                                children: description
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-illustration",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images-medelise/md-quality/md-img-girl-model.webp",
                                                    alt: "Medelise community",
                                                    width: 174,
                                                    height: 87
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: (e)=>{
                                                    e.preventDefault();
                                                /* handle subscribe */ },
                                                className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-form",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-input-wrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            value: email,
                                                            onChange: (e)=>setEmail(e.target.value),
                                                            placeholder: "Your e-mail address",
                                                            "aria-label": "Email address",
                                                            required: true,
                                                            className: "jsx-b1d534b5c2fbd7e5" + " " + "newsletter-input"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "primary",
                                                        isFullWidth: true,
                                                        type: "submit",
                                                        children: "Subscribe"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "b1d534b5c2fbd7e5",
                children: ".newsletter-section.jsx-b1d534b5c2fbd7e5{background:#fff;width:100%}.newsletter-outer.jsx-b1d534b5c2fbd7e5{width:100%;padding:48px var(--space-section-px-sm)}.newsletter-container.jsx-b1d534b5c2fbd7e5,.newsletter-card.jsx-b1d534b5c2fbd7e5{width:100%}.newsletter-row.jsx-b1d534b5c2fbd7e5{flex-direction:column;gap:32px;display:flex}.newsletter-text.jsx-b1d534b5c2fbd7e5{flex-direction:column;gap:24px;display:flex}.newsletter-heading.jsx-b1d534b5c2fbd7e5{color:var(--color-primary);margin:0;font-size:24px;font-weight:600;line-height:32px}.newsletter-description.jsx-b1d534b5c2fbd7e5{color:var(--color-primary);margin:0;font-size:16px;font-weight:500;line-height:24px}.newsletter-right.jsx-b1d534b5c2fbd7e5{flex-direction:column;align-items:flex-end;gap:12px;display:flex}.newsletter-illustration.jsx-b1d534b5c2fbd7e5{display:none}.newsletter-form.jsx-b1d534b5c2fbd7e5{flex-direction:column;gap:12px;width:100%;display:flex}.newsletter-input-wrap.jsx-b1d534b5c2fbd7e5{width:100%}.newsletter-input.jsx-b1d534b5c2fbd7e5{background:var(--color-surface-card);width:100%;color:var(--color-primary);border:none;border-radius:8px;outline:none;padding:10px 12px;font-size:16px;font-weight:400;line-height:24px;transition:box-shadow .2s}.newsletter-input.jsx-b1d534b5c2fbd7e5::placeholder{color:var(--color-primary);opacity:.5}.newsletter-input.jsx-b1d534b5c2fbd7e5:focus{box-shadow:0 0 0 2px var(--color-accent)}@media (width>=641px){.newsletter-outer.jsx-b1d534b5c2fbd7e5{padding:64px var(--space-section-px-md)}.newsletter-row.jsx-b1d534b5c2fbd7e5{gap:40px}.newsletter-text.jsx-b1d534b5c2fbd7e5{gap:16px}.newsletter-illustration.jsx-b1d534b5c2fbd7e5{width:174px;height:87px;display:block}.newsletter-heading.jsx-b1d534b5c2fbd7e5{font-size:28px;line-height:36px}.newsletter-description.jsx-b1d534b5c2fbd7e5{font-size:18px;line-height:28px}.newsletter-right.jsx-b1d534b5c2fbd7e5{gap:0}.newsletter-form.jsx-b1d534b5c2fbd7e5{flex-direction:row;align-items:flex-start;gap:16px}.newsletter-input-wrap.jsx-b1d534b5c2fbd7e5{flex-shrink:0;width:320px}}@media (width>=1025px){.newsletter-outer.jsx-b1d534b5c2fbd7e5{padding:64px var(--space-section-px-lg)}.newsletter-card.jsx-b1d534b5c2fbd7e5{padding:64px 0}.newsletter-row.jsx-b1d534b5c2fbd7e5{flex-direction:row;align-items:center;gap:64px}.newsletter-text.jsx-b1d534b5c2fbd7e5{flex:1 1 0;gap:16px}.newsletter-heading.jsx-b1d534b5c2fbd7e5{font-size:36px;line-height:44px}.newsletter-description.jsx-b1d534b5c2fbd7e5{font-size:18px;line-height:28px}.newsletter-right.jsx-b1d534b5c2fbd7e5{flex:1 1 0;gap:0}.newsletter-form.jsx-b1d534b5c2fbd7e5{flex-direction:column;gap:16px}.newsletter-input-wrap.jsx-b1d534b5c2fbd7e5{flex-shrink:1;width:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientPortalSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/shared/constants/icons.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/shared/constants/images.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
/* ─── Tab Data ───────────────────────────────────────────────────────────── */ const portalTabs = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICONS"].ambulance,
        label: 'Ambulanță la domiciliu'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICONS"].timer,
        label: 'Acces 24/7 la servicii medicale'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICONS"].stethoscope,
        label: 'Specialisti medicalii disponibili în permanență'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICONS"].stethoscope,
        label: 'Consultații medicale acasă'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICONS"].box,
        label: 'Livrarea medicatiei la domiciliu'
    }
];
/* ─── Checklist Data ─────────────────────────────────────────────────────── */ const checklistItems = [
    'Monitorizează-ți starea de sănătate, accesează servicii medicale la domiciliu și programează consultații în doar câteva click-uri, direct din contul tău Medelise.',
    'Fără cozi, Fără drumuri inutile.',
    'Totul digital, accesibil și eficient.'
];
function PatientPortalSection() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "portal-heading",
                className: "jsx-5bcba73a87b8e776" + " " + "portal-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5bcba73a87b8e776" + " " + "portal-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5bcba73a87b8e776" + " " + "portal-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "portal-heading",
                                    className: "jsx-5bcba73a87b8e776" + " " + "portal-display",
                                    children: "Simplu, Rapid și Sigur"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-5bcba73a87b8e776" + " " + "portal-display",
                                    children: "Portalul Pacienților Medelise"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5bcba73a87b8e776" + " " + "portal-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "aria-label": "Servicii portal",
                                    className: "jsx-5bcba73a87b8e776" + " " + "portal-tabs",
                                    children: portalTabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveTab(i),
                                            className: "jsx-5bcba73a87b8e776" + " " + `portal-tab${i === activeTab ? ' portal-tab--active' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: tab.icon,
                                                    alt: "",
                                                    width: 24,
                                                    height: 24,
                                                    className: "portal-tab-icon",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-5bcba73a87b8e776" + " " + "portal-tab-label",
                                                    children: tab.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5bcba73a87b8e776" + " " + "portal-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-5bcba73a87b8e776" + " " + "portal-img-main",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].portal.mainImage,
                                                alt: "Interfața portalului pacientului Medelise — gestionare completă a sănătății digitale",
                                                width: 588,
                                                height: 380,
                                                className: "portal-img"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-5bcba73a87b8e776" + " " + "portal-img-side",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].portal.sideImage,
                                                alt: "Vizualizare secundară a portalului medical",
                                                width: 352,
                                                height: 220,
                                                className: "portal-img"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-5bcba73a87b8e776" + " " + "portal-info-heading",
                                            children: "Tot ce ai nevoie pentru sănătatea ta, într-un singur loc."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            role: "list",
                                            className: "jsx-5bcba73a87b8e776" + " " + "portal-checklist",
                                            children: checklistItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-5bcba73a87b8e776" + " " + "portal-check-item",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "aria-hidden": "true",
                                                            className: "jsx-5bcba73a87b8e776" + " " + "portal-check-icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "12",
                                                                height: "12",
                                                                viewBox: "0 0 12 12",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "jsx-5bcba73a87b8e776",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M10.125 3.375L4.875 8.625L1.875 5.625",
                                                                    stroke: "white",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "jsx-5bcba73a87b8e776"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-5bcba73a87b8e776" + " " + "portal-check-text",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "primary",
                                                isFullWidth: true,
                                                className: "portal-cta-btn",
                                                children: "Intră în contul tău Medelise"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "5bcba73a87b8e776",
                children: '.portal-section.jsx-5bcba73a87b8e776{background:var(--color-white);width:100%;overflow:hidden}.portal-container.jsx-5bcba73a87b8e776{width:100%;max-width:none;padding:var(--space-16)var(--space-4);gap:var(--space-10);flex-direction:column;margin:0 auto;display:flex}.portal-header.jsx-5bcba73a87b8e776{gap:var(--space-2);flex-direction:column;display:flex}.portal-display.jsx-5bcba73a87b8e776{color:var(--color-primary);font-size:var(--text-h2);margin:0;font-weight:600;line-height:1.25}.portal-body.jsx-5bcba73a87b8e776{align-items:center;gap:var(--space-6);flex-direction:column;display:flex}.portal-tabs.jsx-5bcba73a87b8e776{flex-wrap:wrap;align-self:stretch;display:flex}.portal-tab.jsx-5bcba73a87b8e776{align-items:center;gap:var(--space-3);padding:var(--space-3)var(--space-3);cursor:pointer;text-align:left;border:none;border-bottom:.4px solid var(--color-primary);background:0 0;flex:50%;transition:border-color .25s,color .25s,background-color .2s,transform .15s;display:flex}.portal-tab.jsx-5bcba73a87b8e776:hover{background:#2131700f}.portal-tab.jsx-5bcba73a87b8e776:active{transform:scale(.97)}.portal-tab--active.jsx-5bcba73a87b8e776{border-bottom:1px solid var(--color-accent)}.portal-tab--active.jsx-5bcba73a87b8e776 .portal-tab-label.jsx-5bcba73a87b8e776{color:var(--color-primary);font-weight:500}.portal-tab.jsx-5bcba73a87b8e776 .portal-tab-icon{flex-shrink:0;width:16px;height:16px}.portal-tab-label.jsx-5bcba73a87b8e776{color:var(--color-primary);font-size:var(--text-body);flex:1;font-weight:500;line-height:1.4}.portal-content.jsx-5bcba73a87b8e776{align-self:stretch;gap:var(--space-4);flex-direction:column;display:flex}.portal-img-main.jsx-5bcba73a87b8e776{width:100%}.portal-img-side.jsx-5bcba73a87b8e776{display:none}.portal-content.jsx-5bcba73a87b8e776 .portal-img{border-radius:var(--radius-lg);object-fit:cover;width:100%;height:220px;display:block}.portal-info-heading.jsx-5bcba73a87b8e776{color:var(--color-primary);margin:0;font-size:18px;font-weight:600;line-height:1.43}.portal-checklist.jsx-5bcba73a87b8e776{gap:var(--space-2);flex-direction:column;margin:0;padding:0;list-style:none;display:flex}.portal-check-item.jsx-5bcba73a87b8e776{align-items:center;gap:var(--space-3);display:flex}.portal-check-icon.jsx-5bcba73a87b8e776{background:var(--color-primary);border-radius:var(--radius-full);flex-shrink:0;justify-content:center;align-items:center;width:16px;min-width:16px;height:16px;display:flex}.portal-check-text.jsx-5bcba73a87b8e776{color:var(--color-primary);flex:1;font-size:16px;font-weight:400;line-height:1.33}.portal-cta-btn.jsx-5bcba73a87b8e776{padding:var(--space-2)var(--space-8);background:var(--color-primary);border-radius:var(--radius-main);color:var(--color-white);font-size:var(--text-xs);cursor:pointer;text-align:center;border:none;align-self:stretch;font-weight:500;line-height:1.5;transition:all .2s ease-in-out}.portal-cta-btn.jsx-5bcba73a87b8e776:hover{background:var(--color-primary-hover);box-shadow:var(--shadow-md);transform:translateY(-1px)}@media (width>=641px){.portal-container.jsx-5bcba73a87b8e776{padding:var(--space-16)var(--space-4)}.portal-display.jsx-5bcba73a87b8e776{line-height:1.25}.portal-tab.jsx-5bcba73a87b8e776 .portal-tab-icon{width:var(--space-6);height:var(--space-6)}.portal-tab-label.jsx-5bcba73a87b8e776{line-height:1.43}.portal-img-side.jsx-5bcba73a87b8e776{width:100%;display:block}.portal-content.jsx-5bcba73a87b8e776{gap:var(--space-4);column-gap:var(--space-8);grid-template-columns:1fr 1fr;grid-template-areas:"img-main img-side""heading heading""checklist checklist""cta cta";display:grid}.portal-img-main.jsx-5bcba73a87b8e776{grid-area:img-main}.portal-img-side.jsx-5bcba73a87b8e776{grid-area:img-side}.portal-info-heading.jsx-5bcba73a87b8e776{grid-area:heading}.portal-checklist.jsx-5bcba73a87b8e776{grid-area:checklist}.portal-cta-btn.jsx-5bcba73a87b8e776{grid-area:cta}.portal-info-heading.jsx-5bcba73a87b8e776{font-size:var(--text-body);font-weight:500;line-height:1.5}.portal-check-text.jsx-5bcba73a87b8e776{font-size:var(--text-sm);line-height:1.43}.portal-check-icon.jsx-5bcba73a87b8e776{width:24px;min-width:24px;height:24px}}@media (width>=1025px){.portal-container.jsx-5bcba73a87b8e776{padding:var(--space-16)var(--space-section-px);gap:var(--space-16)}.portal-body.jsx-5bcba73a87b8e776{gap:var(--space-10)}.portal-display.jsx-5bcba73a87b8e776{line-height:var(--lh-heading)}.portal-tab.jsx-5bcba73a87b8e776{border-bottom:2px solid var(--color-surface-border);padding-bottom:var(--space-6);padding-left:var(--space-3);flex:1 1 0;align-items:flex-start}.portal-tab--active.jsx-5bcba73a87b8e776{border-bottom-color:var(--color-accent)}.portal-tab-label.jsx-5bcba73a87b8e776{line-height:1.4}.portal-content.jsx-5bcba73a87b8e776{gap:var(--space-6);column-gap:var(--space-10);grid-template-columns:1fr 1fr;grid-template-areas:"img-main heading""img-main img-side""img-main checklist""img-main cta";align-items:start}.portal-img-main.jsx-5bcba73a87b8e776{grid-area:img-main;align-self:stretch}.portal-content.jsx-5bcba73a87b8e776 .portal-img{height:100%;max-height:none}.portal-img-side.jsx-5bcba73a87b8e776 .portal-img{height:220px}.portal-info-heading.jsx-5bcba73a87b8e776{font-size:var(--text-h4);font-weight:600;line-height:var(--lh-heading)}.portal-check-text.jsx-5bcba73a87b8e776{font-size:var(--text-sm)}.portal-cta-btn.jsx-5bcba73a87b8e776{font-size:var(--text-body);padding:var(--space-3)var(--space-8)}.portal-check-icon.jsx-5bcba73a87b8e776{width:32px;min-width:32px;height:32px}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/features/homepage/components/QualitySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QualitySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/shared/constants/images.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const checklistItems = [
    'Răspuns rapid, fără așteptare',
    'Acces simplu, oriunde te afli',
    'Fără costuri ascunse',
    'Abonament cu activare instant'
];
function QualitySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "quality-heading",
                className: "jsx-945293d70ee06ee5" + " " + "quality-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-945293d70ee06ee5" + " " + "quality-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-945293d70ee06ee5" + " " + "quality-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-945293d70ee06ee5" + " " + "quality-text-col",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-945293d70ee06ee5" + " " + "quality-text-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-945293d70ee06ee5" + " " + "quality-heading-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    id: "quality-heading",
                                                    className: "jsx-945293d70ee06ee5" + " " + "quality-heading",
                                                    children: "Calitatea serviciilor ne definește"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                    lineNumber: 25,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-945293d70ee06ee5" + " " + "quality-body-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-945293d70ee06ee5" + " " + "quality-body",
                                                            children: "Echipa noastră este formată din profesioniști cu experiență: medici, asistenți medicali și terapeuți specializați."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-945293d70ee06ee5" + " " + "quality-body",
                                                            children: "Fiecare membru al echipei noastre este dedicat excelenței în îngrijire și are la dispoziție resursele necesare pentru a oferi un tratament de calitate."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                            lineNumber: 34,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            role: "list",
                                                            className: "jsx-945293d70ee06ee5" + " " + "quality-checklist",
                                                            children: checklistItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-945293d70ee06ee5" + " " + "quality-check-item",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            "aria-hidden": "true",
                                                                            className: "jsx-945293d70ee06ee5" + " " + "quality-check-icon",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                width: "18",
                                                                                height: "18",
                                                                                viewBox: "0 0 18 18",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "jsx-945293d70ee06ee5",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M7.5 12.75L3.75 9L4.6275 8.1225L7.5 10.9875L13.3725 5.115L14.25 6L7.5 12.75Z",
                                                                                    fill: "currentColor",
                                                                                    className: "jsx-945293d70ee06ee5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                                                    lineNumber: 52,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                                                lineNumber: 45,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                                            lineNumber: 44,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-945293d70ee06ee5" + " " + "quality-check-text",
                                                                            children: item
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                                            lineNumber: 58,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                                    lineNumber: 43,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: (e)=>e.preventDefault(),
                                            className: "jsx-945293d70ee06ee5" + " " + "quality-cta-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-945293d70ee06ee5" + " " + "quality-input-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "quality-email",
                                                            className: "jsx-945293d70ee06ee5" + " " + "sr-only",
                                                            children: "Adresa de email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "quality-email",
                                                            type: "email",
                                                            placeholder: "Introduceti adresa dumneavoastra de email",
                                                            className: "jsx-945293d70ee06ee5" + " " + "quality-email-input"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/login",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "primary",
                                                        isFullWidth: true,
                                                        className: "quality-cta-btn",
                                                        children: "Intră în contul tău Medelise"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-945293d70ee06ee5" + " " + "quality-laptop-col",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-945293d70ee06ee5" + " " + "quality-laptop-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].quality.macbookMockup,
                                            alt: "Previzualizare a platformei medicale Medelise pe un MacBook Pro — dashboard cu informații despre pacient, anatomie 3D interactivă și monitorizare a semnelor vitale",
                                            width: 676,
                                            height: 468,
                                            className: "quality-laptop-img quality-laptop-desktop",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].quality.macbookTablet,
                                            alt: "Platforma medicală Medelise afișată pe laptop — interfață modernă cu anatomie interactivă și semnele vitale ale pacientului",
                                            width: 676,
                                            height: 468,
                                            className: "quality-laptop-img quality-laptop-mobile"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/homepage/components/QualitySection.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "945293d70ee06ee5",
                children: ".quality-section.jsx-945293d70ee06ee5{background:var(--color-white);width:100%;overflow:hidden}.quality-container.jsx-945293d70ee06ee5{width:100%;max-width:var(--max-width);padding-left:var(--space-6);padding-right:var(--space-6);margin:0 auto}.quality-row.jsx-945293d70ee06ee5{align-items:stretch;gap:var(--space-8);flex-direction:column;width:100%;padding-top:64px;padding-bottom:64px;display:flex}.quality-text-col.jsx-945293d70ee06ee5{flex-direction:column;justify-content:center;align-items:flex-start;width:100%;max-width:70ch;display:flex}.quality-text-content.jsx-945293d70ee06ee5{justify-content:center;align-items:flex-start;gap:var(--space-8);flex-direction:column;flex:1;width:100%;display:flex}.quality-heading-group.jsx-945293d70ee06ee5{gap:var(--space-6);flex-direction:column;flex:1;width:100%;display:flex}.quality-heading.jsx-945293d70ee06ee5{color:var(--color-primary);font-size:var(--text-h2);font-weight:600;line-height:var(--lh-heading);margin:0}.quality-body-group.jsx-945293d70ee06ee5{gap:var(--space-4);flex-direction:column;width:100%;display:flex}.quality-body.jsx-945293d70ee06ee5{color:var(--color-primary);font-size:var(--text-body-lg);font-weight:500;line-height:var(--lh-body);margin:0}.quality-checklist.jsx-945293d70ee06ee5{gap:var(--space-3);flex-direction:column;margin:0;padding:0;list-style:none;display:flex}.quality-check-item.jsx-945293d70ee06ee5{align-items:center;gap:var(--space-2);display:flex}.quality-check-icon.jsx-945293d70ee06ee5{width:var(--space-8);height:var(--space-8);background:var(--color-surface-card);border-radius:var(--radius-full);color:var(--color-primary);flex-shrink:0;justify-content:center;align-items:center;display:flex}.quality-check-text.jsx-945293d70ee06ee5{color:var(--color-primary);font-size:var(--text-body);font-weight:500;line-height:var(--lh-body)}.quality-cta-row.jsx-945293d70ee06ee5{gap:var(--space-3);flex-direction:column;width:100%;display:flex}.quality-input-wrap.jsx-945293d70ee06ee5{width:100%}.sr-only.jsx-945293d70ee06ee5{clip:rect(0,0,0,0);white-space:nowrap;border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.quality-email-input.jsx-945293d70ee06ee5{width:100%;padding:var(--space-3)var(--space-6)var(--space-3)var(--space-6);background:var(--color-white);border-radius:var(--radius-pill);outline:1px var(--color-input-border)solid;outline-offset:-1px;font-size:var(--text-sm);font-weight:400;line-height:var(--lh-body);color:var(--color-text);border:none;transition:outline-color .2s}.quality-email-input.jsx-945293d70ee06ee5::placeholder{color:var(--color-text-muted)}.quality-email-input.jsx-945293d70ee06ee5:focus{outline:2px solid var(--color-primary);outline-offset:-2px}.quality-cta-btn.jsx-945293d70ee06ee5{padding:var(--space-3)var(--space-6);background:var(--color-primary);border-radius:var(--radius-pill);color:var(--color-white);font-size:var(--text-body);font-weight:600;line-height:var(--lh-body);cursor:pointer;white-space:nowrap;text-align:center;border:none;width:100%;transition:all .2s ease-in-out}.quality-cta-btn.jsx-945293d70ee06ee5:hover{background:var(--color-primary-hover);box-shadow:var(--shadow-md);transform:translateY(-1px)}.quality-laptop-col.jsx-945293d70ee06ee5{justify-content:center;align-items:center;width:100%;display:flex}.quality-laptop-wrap.jsx-945293d70ee06ee5{justify-content:center;align-items:center;width:100%;max-width:676px;display:flex}.quality-laptop-wrap.jsx-945293d70ee06ee5 .quality-laptop-img{width:100%;max-width:100%;height:auto;display:block}.quality-laptop-wrap.jsx-945293d70ee06ee5 .quality-laptop-desktop{display:none}.quality-laptop-wrap.jsx-945293d70ee06ee5 .quality-laptop-mobile{display:block}@media (width>=641px){.quality-container.jsx-945293d70ee06ee5{padding-left:var(--space-section-px);padding-right:var(--space-section-px)}.quality-cta-row.jsx-945293d70ee06ee5{flex-direction:row;width:auto}.quality-input-wrap.jsx-945293d70ee06ee5{width:320px}.quality-cta-btn.jsx-945293d70ee06ee5{width:auto}}@media (width>=1025px){.quality-section.jsx-945293d70ee06ee5{overflow:visible}.quality-container.jsx-945293d70ee06ee5{max-width:none;padding-left:var(--space-section-px);padding-right:0}.quality-row.jsx-945293d70ee06ee5{flex-direction:row;justify-content:space-between;align-items:stretch;gap:0}.quality-text-col.jsx-945293d70ee06ee5{flex:0 0 50%;min-width:0;max-width:50%;padding-right:32px}.quality-laptop-col.jsx-945293d70ee06ee5{flex:0 0 50%;justify-content:flex-end;align-items:flex-end;width:auto;max-width:50%;overflow:visible}.quality-laptop-wrap.jsx-945293d70ee06ee5{justify-content:flex-end;max-width:none}.quality-laptop-wrap.jsx-945293d70ee06ee5 .quality-laptop-desktop{display:block}.quality-laptop-wrap.jsx-945293d70ee06ee5 .quality-laptop-mobile{display:none}.quality-cta-row.jsx-945293d70ee06ee5{flex-direction:column;width:100%}.quality-input-wrap.jsx-945293d70ee06ee5{width:100%}.quality-cta-btn.jsx-945293d70ee06ee5{text-align:center;width:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiciiSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
/* ═══════════════════════════════════════════════════════════
 * ServiciiSection — "Servicii standard dar si personalizate"
 * 4 service cards: Asistență Medicală, Kinetoterapie,
 * Medicină de Prevenție, Analize Medicale
 * ═══════════════════════════════════════════════════════════ */ /* ─── Icon paths from public/icons-medelise (All-WebP) ─── */ const ICON_MAP = {
    stethoscope: '/icons-medelise/md-medical/md-ico-stethoscope.webp',
    check: '/icons-medelise/md-system/md-ico-check.webp',
    dna: '/icons-medelise/md-medical/md-ico-adn.webp',
    atom: '/icons-medelise/md-medical/md-ico-atom.webp'
};
const services = [
    {
        title: 'Asistență Medicală',
        description: 'Îți oferim îngrijire medicală completă acasă: administrare de tratamente, monitorizarea stării de sănătate și intervenții specifice realizate de asistenți calificați.',
        icon: 'stethoscope'
    },
    {
        title: 'Kinetoterapie',
        description: 'Recuperare medicală personalizată la domiciliu, prin programe de exerciții supravegheate de specialiști. Ideal pentru pacienți post-operator, seniori sau persoane cu afecțiuni cronice.',
        icon: 'check'
    },
    {
        title: 'Medicină de Prevenție',
        description: 'Consulturi periodice, evaluări de risc și screeninguri personalizate pentru depistarea timpurie a afecțiunilor. Prevenția salvează vieți — iar noi te ajutăm să fii cu un pas înainte.',
        icon: 'dna'
    },
    {
        title: 'Analize Medicale',
        description: 'Recoltăm probe biologice direct la domiciliul pacientului, în condiții sigure și sterile. Lucrăm cu laboratoare acreditate pentru rezultate rapide și de încredere.',
        icon: 'atom'
    }
];
function ServiciiSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "servicii-heading",
                className: "jsx-6ca7bdb8af57050e" + " " + "servicii-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-6ca7bdb8af57050e" + " " + "servicii-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6ca7bdb8af57050e" + " " + "servicii-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6ca7bdb8af57050e" + " " + "servicii-title-col",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "servicii-heading",
                                        className: "jsx-6ca7bdb8af57050e" + " " + "servicii-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6ca7bdb8af57050e",
                                                children: "Servicii standard "
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-6ca7bdb8af57050e",
                                                children: "dar și personalizate"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6ca7bdb8af57050e" + " " + "servicii-desc-col",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-6ca7bdb8af57050e" + " " + "servicii-description",
                                        children: [
                                            "Medelise oferă servicii în următoarele domenii: medicină de prevenție, medicină generală, medicină de urgență și kinetoterapie.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "jsx-6ca7bdb8af57050e"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            "Ne dorim să oferim cât mai multe servicii, astfel încât să putem satisface toate nevoile pacienților noștri."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6ca7bdb8af57050e" + " " + "servicii-grid",
                            children: services.map((service)=>{
                                const iconSrc = ICON_MAP[service.icon];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "jsx-6ca7bdb8af57050e" + " " + "servicii-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6ca7bdb8af57050e" + " " + "servicii-card-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6ca7bdb8af57050e" + " " + "servicii-card-title-wrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-6ca7bdb8af57050e" + " " + "servicii-card-title",
                                                        children: service.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-6ca7bdb8af57050e" + " " + "servicii-card-desc",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6ca7bdb8af57050e" + " " + "servicii-card-icon",
                                            children: iconSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: iconSrc,
                                                alt: service.title,
                                                width: 32,
                                                height: 32
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                                lineNumber: 84,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, service.title, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6ca7bdb8af57050e",
                children: ".servicii-section.jsx-6ca7bdb8af57050e{background:var(--color-white);width:100%}.servicii-container.jsx-6ca7bdb8af57050e{flex-direction:column;gap:24px;width:100%;margin:0 auto;padding:48px 16px;display:flex}.servicii-header.jsx-6ca7bdb8af57050e{flex-direction:column;gap:24px;width:100%;padding:16px 0 32px;display:flex}.servicii-title-col.jsx-6ca7bdb8af57050e{flex:1 1 0}.servicii-heading.jsx-6ca7bdb8af57050e{color:var(--color-primary);margin:0;font-size:20px;font-weight:600;line-height:28px}.servicii-desc-col.jsx-6ca7bdb8af57050e{flex:1 1 0}.servicii-description.jsx-6ca7bdb8af57050e{color:var(--color-primary);margin:0;font-size:16px;font-weight:400;line-height:24px}.servicii-grid.jsx-6ca7bdb8af57050e{flex-direction:column;gap:16px;width:100%;display:flex}.servicii-card.jsx-6ca7bdb8af57050e{background:var(--color-surface-card);border-radius:8px;flex-direction:column;justify-content:flex-start;align-items:flex-end;gap:16px;padding:16px;display:flex}.servicii-card-content.jsx-6ca7bdb8af57050e{flex-direction:column;gap:16px;width:100%;display:flex}.servicii-card-title-wrap.jsx-6ca7bdb8af57050e{border-bottom:.5px solid var(--color-primary);align-items:center;width:100%;padding-bottom:16px;display:flex}.servicii-card-title.jsx-6ca7bdb8af57050e{color:var(--color-primary);flex:1;margin:0;font-size:16px;font-weight:500;line-height:24px}.servicii-card-desc.jsx-6ca7bdb8af57050e{color:var(--color-primary);font-size:var(--text-body);margin:0;font-weight:400;line-height:24px}.servicii-card-icon.jsx-6ca7bdb8af57050e{background:var(--color-white);border-radius:var(--radius-pill);justify-content:center;align-items:center;padding:8px;display:inline-flex}.servicii-card-icon.jsx-6ca7bdb8af57050e svg{width:24px;height:24px}@media (width>=641px){.servicii-container.jsx-6ca7bdb8af57050e{gap:24px;max-width:704px;margin:0 auto;padding:64px 32px}.servicii-header.jsx-6ca7bdb8af57050e{flex-direction:column;gap:16px;padding:0}.servicii-heading.jsx-6ca7bdb8af57050e{font-size:36px;line-height:44px}.servicii-description.jsx-6ca7bdb8af57050e{font-size:18px;line-height:28px}.servicii-grid.jsx-6ca7bdb8af57050e{grid-template-columns:repeat(2,1fr);gap:32px;display:grid}.servicii-card.jsx-6ca7bdb8af57050e{border-radius:16px;justify-content:space-between;gap:32px;min-height:396px;padding:24px;overflow:hidden}.servicii-card-title-wrap.jsx-6ca7bdb8af57050e{padding-bottom:24px}.servicii-card-title.jsx-6ca7bdb8af57050e{font-size:20px;line-height:28px}.servicii-card-icon.jsx-6ca7bdb8af57050e{padding:12px}.servicii-card-icon.jsx-6ca7bdb8af57050e svg{width:32px;height:32px}}@media (width>=1025px){.servicii-container.jsx-6ca7bdb8af57050e{gap:48px;max-width:none;padding:64px}.servicii-header.jsx-6ca7bdb8af57050e{flex-direction:row;justify-content:space-between;align-items:flex-start}.servicii-heading.jsx-6ca7bdb8af57050e{font-size:48px;line-height:60px}.servicii-grid.jsx-6ca7bdb8af57050e{grid-template-columns:repeat(4,1fr);gap:16px}.servicii-card.jsx-6ca7bdb8af57050e{min-height:auto}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/components/ui/FeatureCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
'use client';
;
;
function FeatureCard({ title, description, elevated = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "3cfa62f6d43121da",
                children: ".feature-card.jsx-3cfa62f6d43121da{padding:var(--space-6);background:var(--color-white);border-radius:var(--radius-lg);outline:1px var(--color-surface-border)solid;outline-offset:-1px;justify-content:flex-start;align-self:stretch;align-items:flex-start;gap:var(--space-3);flex-direction:column;flex:1 1 0;transition:box-shadow .2s;display:flex}.feature-card--elevated.jsx-3cfa62f6d43121da{box-shadow:var(--shadow-md);outline:none}.feature-card__content.jsx-3cfa62f6d43121da{justify-content:flex-start;align-self:stretch;align-items:flex-start;gap:var(--space-3);flex-direction:column;display:flex}.feature-card__title.jsx-3cfa62f6d43121da{color:var(--color-primary);font-size:var(--text-h4);font-weight:600;line-height:var(--lh-heading);word-wrap:break-word;align-self:stretch}.feature-card__description.jsx-3cfa62f6d43121da{color:var(--color-primary);font-size:var(--text-body-lg);font-weight:400;line-height:var(--lh-body);word-wrap:break-word;align-self:stretch}@media (width<=640px){.feature-card.jsx-3cfa62f6d43121da{border-radius:var(--radius-main)}.feature-card__description.jsx-3cfa62f6d43121da{font-weight:500}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3cfa62f6d43121da" + " " + `feature-card${elevated ? ' feature-card--elevated' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-3cfa62f6d43121da" + " " + "feature-card__content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "jsx-3cfa62f6d43121da" + " " + "feature-card__title",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ui/FeatureCard.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-3cfa62f6d43121da" + " " + "feature-card__description",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ui/FeatureCard.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ui/FeatureCard.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/FeatureCard.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChooseUsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/shared/constants/images.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$FeatureCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/FeatureCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
/* ── Why Choose Us Section ─────────────────────────────────────── */ const ALL_CARDS = [
    {
        title: 'Profesionalism Garantat',
        description: 'Medicii noștri sunt atent selecționați, cu experiență dovedită în îngrijirea medicală la domiciliu.\nCalitate fără compromis.',
        elevated: true
    },
    {
        title: 'Servicii medicale acasă',
        description: 'Consultații, investigații și tratamente – direct la tine acasă. Eliminăm timpul pierdut și stresul deplasărilor.',
        elevated: true
    },
    {
        title: 'Prețuri accesibile și clare',
        description: 'Costuri transparente, fără taxe ascunse. Ai mereu control asupra bugetului tău pentru sănătate.',
        elevated: false
    },
    {
        title: 'Programări Flexibile',
        description: 'Ne adaptăm programului tău. Poți alege ziua și ora convenabilă pentru vizita medicală.',
        elevated: false
    },
    {
        title: 'Acces Digital la Date Medicale',
        description: 'Tot istoricul medical, recomandările și programările tale – disponibile online prin platforma careOS.',
        elevated: false
    },
    {
        title: 'Transparență Completă',
        description: 'Știi din start ce servicii primești și cât costă. Comunicăm deschis și profesionist la fiecare pas.',
        elevated: false
    }
];
/* Split for the 3-col desktop layout */ const LEFT_CARDS = ALL_CARDS.slice(0, 3);
const RIGHT_CARDS = ALL_CARDS.slice(3);
function WhyChooseUsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "40c99a48b8fad5a",
                children: ".why-section.jsx-40c99a48b8fad5a{background:var(--color-white);flex-direction:column;justify-content:flex-start;align-items:center;width:100%;padding-top:64px;padding-bottom:64px;display:inline-flex}.why-inner.jsx-40c99a48b8fad5a{flex-direction:column;justify-content:flex-start;align-self:stretch;align-items:center;display:flex}.why-content.jsx-40c99a48b8fad5a{justify-content:center;align-self:stretch;align-items:center;gap:var(--space-6);flex-direction:column;display:flex}.why-text-block.jsx-40c99a48b8fad5a{padding-top:var(--space-4);padding-bottom:var(--space-16);background:var(--color-white);flex-direction:column;justify-content:center;align-self:stretch;align-items:center;display:flex}.why-text-inner.jsx-40c99a48b8fad5a{justify-content:center;align-items:center;gap:var(--space-3);flex-direction:column;width:100%;max-width:1216px;display:flex}.why-heading.jsx-40c99a48b8fad5a{color:var(--color-primary);font-size:var(--text-h2);font-weight:700;line-height:var(--lh-heading);word-wrap:break-word;text-align:center}.why-subtitle.jsx-40c99a48b8fad5a{text-align:center;width:100%;max-width:650px;color:var(--color-primary);font-size:var(--text-h3);font-weight:600;line-height:var(--lh-heading);word-wrap:break-word}.why-cols.jsx-40c99a48b8fad5a{justify-content:space-between;align-self:stretch;align-items:stretch;gap:var(--space-8);flex:1 1 0;display:inline-flex}.why-card-col.jsx-40c99a48b8fad5a{justify-content:flex-start;align-items:flex-start;gap:var(--space-8);flex-direction:column;flex:1 1 0;display:inline-flex}.why-cards-single.jsx-40c99a48b8fad5a{display:none}.why-image-col.jsx-40c99a48b8fad5a{background:var(--color-white);border-radius:var(--radius-xl);justify-content:flex-start;align-self:stretch;align-items:center;gap:var(--space-4);flex-direction:column;flex:1 1 0;display:inline-flex;overflow:hidden}.why-image-wrapper.jsx-40c99a48b8fad5a{padding-top:var(--space-8);flex:1 1 0;justify-content:center;align-self:stretch;align-items:flex-start;display:flex}.why-watch-image.jsx-40c99a48b8fad5a{object-fit:contain;width:341px;height:547px}.why-quote.jsx-40c99a48b8fad5a{width:354px;padding:var(--space-6);background:var(--color-white);border-radius:var(--radius-lg);text-align:center;color:var(--color-primary);font-size:var(--text-h4);font-weight:600;line-height:var(--lh-heading);word-wrap:break-word;flex-shrink:0}.why-watch-banner.jsx-40c99a48b8fad5a{display:none}@media (width<=1024px){.why-text-block.jsx-40c99a48b8fad5a{padding-bottom:var(--space-12)}.why-text-inner.jsx-40c99a48b8fad5a{gap:var(--space-3)}.why-subtitle.jsx-40c99a48b8fad5a{max-width:384px}.why-cols.jsx-40c99a48b8fad5a{display:none}.why-cards-single.jsx-40c99a48b8fad5a{justify-content:flex-start;align-self:stretch;align-items:center;gap:var(--space-8);flex-direction:column;display:flex}.why-cards-list.jsx-40c99a48b8fad5a{justify-content:flex-start;align-items:flex-start;gap:var(--space-6);flex-direction:column;width:100%;display:flex}.why-watch-banner.jsx-40c99a48b8fad5a{background:var(--color-white);border-radius:var(--radius-xl);justify-content:center;align-self:stretch;align-items:center;gap:var(--space-4);padding:var(--space-4);flex-direction:row;display:flex;overflow:hidden}.why-watch-banner__image.jsx-40c99a48b8fad5a{object-fit:contain;flex-shrink:0;width:198px;height:auto}.why-watch-banner__quote.jsx-40c99a48b8fad5a{padding:var(--space-4);justify-content:center;align-items:center;display:flex}.why-watch-banner__quote-text.jsx-40c99a48b8fad5a{text-align:center;color:var(--color-primary);font-size:var(--text-h4);font-weight:600;line-height:var(--lh-heading);word-wrap:break-word}}@media (width<=640px){.why-text-block.jsx-40c99a48b8fad5a{padding-bottom:var(--space-8)}.why-text-inner.jsx-40c99a48b8fad5a{gap:var(--space-2)}.why-subtitle.jsx-40c99a48b8fad5a{max-width:100%}.why-cards-list.jsx-40c99a48b8fad5a{gap:var(--space-4)}.why-watch-banner.jsx-40c99a48b8fad5a{padding:var(--space-4)var(--space-4)0;flex-direction:column;gap:0}.why-watch-banner__image.jsx-40c99a48b8fad5a{width:180px}.why-watch-banner__quote.jsx-40c99a48b8fad5a{width:100%;padding:var(--space-4)var(--space-6)}.why-watch-banner__quote-text.jsx-40c99a48b8fad5a{text-align:center}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-40c99a48b8fad5a" + " " + "why-section section-padding",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-40c99a48b8fad5a" + " " + "why-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-40c99a48b8fad5a" + " " + "why-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-40c99a48b8fad5a" + " " + "why-text-block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-40c99a48b8fad5a" + " " + "why-text-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-40c99a48b8fad5a" + " " + "why-heading",
                                            children: "De ce să alegi serviciile noastre?"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                            lineNumber: 334,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-40c99a48b8fad5a" + " " + "why-subtitle",
                                            children: [
                                                "Mai simplu. Mai rapid. Mai sigur.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                    className: "jsx-40c99a48b8fad5a"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 37
                                                }, this),
                                                "Totul pentru sănătatea ta."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                            lineNumber: 337,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                    lineNumber: 333,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                lineNumber: 332,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-40c99a48b8fad5a" + " " + "why-cols",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-40c99a48b8fad5a" + " " + "why-card-col",
                                        children: LEFT_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$FeatureCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                title: card.title,
                                                description: card.description,
                                                elevated: card.elevated
                                            }, card.title, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                lineNumber: 349,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                        lineNumber: 347,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-40c99a48b8fad5a" + " " + "why-image-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-40c99a48b8fad5a" + " " + "why-image-wrapper",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "why-watch-image",
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].watch.iwatchNotifications,
                                                    alt: "Apple Watch Ultra cu aplicația MEDELISE",
                                                    width: 300,
                                                    height: 400
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                lineNumber: 359,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "jsx-40c99a48b8fad5a" + " " + "why-quote",
                                                children: '„Smart alerts. Real care."'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                lineNumber: 368,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                        lineNumber: 358,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-40c99a48b8fad5a" + " " + "why-card-col",
                                        children: RIGHT_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$FeatureCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                title: card.title,
                                                description: card.description,
                                                elevated: card.elevated
                                            }, card.title, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                lineNumber: 375,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                        lineNumber: 373,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                lineNumber: 346,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-40c99a48b8fad5a" + " " + "why-cards-single",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-40c99a48b8fad5a" + " " + "why-cards-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-40c99a48b8fad5a" + " " + "why-watch-banner",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "why-watch-banner__image",
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IMAGES"].watch.iwatchNotifications,
                                                    alt: "Apple Watch Ultra cu aplicația MEDELISE",
                                                    width: 200,
                                                    height: 270
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-40c99a48b8fad5a" + " " + "why-watch-banner__quote",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "jsx-40c99a48b8fad5a" + " " + "why-watch-banner__quote-text",
                                                        children: '„Smart alerts. Real care."'
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                            lineNumber: 389,
                                            columnNumber: 33
                                        }, this),
                                        ALL_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$FeatureCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                title: card.title,
                                                description: card.description,
                                                elevated: card.elevated
                                            }, card.title, false, {
                                                fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                                lineNumber: 406,
                                                columnNumber: 37
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                    lineNumber: 387,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                                lineNumber: 386,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                        lineNumber: 330,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                    lineNumber: 329,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx",
                lineNumber: 328,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/features/homepage/components/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Public API — Homepage Feature
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$EasyCareSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$FAQSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/FAQSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/HeroSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$HowItWorksSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$MissionStatsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$NewsletterSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$PatientPortalSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$QualitySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/QualitySection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$ServiciiSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$WhyChooseUsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
}),
"[project]/apps/web/src/features/homepage/components/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EasyCareSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$EasyCareSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "FAQSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$FAQSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "HeroSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "HowItWorksSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$HowItWorksSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "MissionStatsSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$MissionStatsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "NewsletterSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$NewsletterSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "PatientPortalSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$PatientPortalSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "QualitySection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$QualitySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "ServiciiSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$ServiciiSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "WhyChooseUsSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$WhyChooseUsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$EasyCareSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/EasyCareSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$FAQSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/FAQSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/HeroSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$HowItWorksSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/HowItWorksSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$MissionStatsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/MissionStatsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$NewsletterSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/NewsletterSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$PatientPortalSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/PatientPortalSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$QualitySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/QualitySection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$ServiciiSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/ServiciiSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$homepage$2f$components$2f$WhyChooseUsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/homepage/components/WhyChooseUsSection.tsx [app-ssr] (ecmascript)");
}),
"[project]/apps/web/src/components/ui/CTASection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
/* ── Calendar SVG Icon ── */ const CalendarIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6.66667 1.66667V4.16667M13.3333 1.66667V4.16667M2.91667 7.57500H17.0833M17.5 7.08333V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08333C2.5 4.58333 3.75 2.91667 6.66667 2.91667H13.3333C16.25 2.91667 17.5 4.58333 17.5 7.08333Z",
            stroke: "white",
            strokeWidth: "1",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
            lineNumber: 9,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
function CTASection({ title = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
    children: [
        "Ai nevoie de o vizită medicală la domiciliu?",
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, this),
        "Programează acum – Fără stres, direct online."
    ]
}, void 0, true), description = 'Te ajutăm să ai grijă de sănătatea ta, fără să pierzi ore întregi pe drum.', primaryLabel = 'Programează', primaryHref = '/login', secondaryLabel = 'Intră în contul tău MEDELISE', secondaryHref = '/login', showSecondary = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-e415d7527d604e5d" + " " + "cta-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e415d7527d604e5d" + " " + "cta-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e415d7527d604e5d" + " " + "cta-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-e415d7527d604e5d" + " " + "cta-title",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-e415d7527d604e5d" + " " + "cta-desc",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e415d7527d604e5d" + " " + "cta-buttons",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: primaryHref,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "primary",
                                        iconLeft: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendarIcon, {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                                            lineNumber: 60,
                                            columnNumber: 65
                                        }, void 0),
                                        children: primaryLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this),
                                showSecondary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: secondaryHref,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "outline",
                                        children: secondaryLabel
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                                        lineNumber: 66,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/CTASection.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e415d7527d604e5d",
                children: ".cta-section.jsx-e415d7527d604e5d{background:var(--color-white,#fff);width:100%;font-family:var(--font-heading);flex-direction:column;align-items:center;padding:64px;display:flex}.cta-inner.jsx-e415d7527d604e5d{flex-direction:column;align-items:flex-start;gap:40px;width:100%;display:flex}.cta-buttons.jsx-e415d7527d604e5d{flex-wrap:wrap;align-items:center;gap:16px;display:flex}.cta-text.jsx-e415d7527d604e5d{flex-direction:column;gap:16px;display:flex}.cta-title.jsx-e415d7527d604e5d{color:var(--color-primary);margin:0;font-size:36px;font-weight:600;line-height:44px}.cta-desc.jsx-e415d7527d604e5d{color:var(--color-primary);margin:0;font-size:18px;font-weight:400;line-height:28px}@media (width<=1024px){.cta-section.jsx-e415d7527d604e5d{padding:48px 32px}.cta-title.jsx-e415d7527d604e5d{font-size:28px;line-height:36px}.cta-desc.jsx-e415d7527d604e5d{font-size:16px;line-height:24px}}@media (width<=480px){.cta-section.jsx-e415d7527d604e5d{padding:32px 16px}.cta-title.jsx-e415d7527d604e5d{font-size:22px;line-height:30px}.cta-desc.jsx-e415d7527d604e5d{font-size:16px;line-height:24px}.cta-buttons.jsx-e415d7527d604e5d{flex-direction:column;width:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[project]/apps/web/src/components/ui/TestimonialsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/shared/constants/icons.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
/* ─── SVG Star Shapes ─── */ const STAR_PATH = 'M10 1.5l2.47 5.01L18 7.27l-4 3.9.95 5.53L10 13.77 5.05 16.7 6 11.17l-4-3.9 5.53-.76L10 1.5z';
function FullStar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "19",
        viewBox: "0 0 20 19",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: STAR_PATH,
            fill: "var(--color-primary)"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function EmptyStar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "19",
        viewBox: "0 0 20 19",
        fill: "none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: STAR_PATH,
            fill: "var(--color-border-light)"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function PartialStar({ fraction }) {
    const id = `clip-${Math.round(fraction * 100)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "19",
        viewBox: "0 0 20 19",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: id,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "0",
                        width: 20 * fraction,
                        height: "19"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: STAR_PATH,
                fill: "var(--color-border-light)"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: STAR_PATH,
                fill: "var(--color-primary)",
                clipPath: `url(#${id})`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
/* ─── Star Rating helper ─── */ function renderStars(rating) {
    const stars = [];
    for(let i = 0; i < 5; i++){
        const diff = rating - i;
        if (diff >= 1) {
            stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FullStar, {}, i, false, {
                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                lineNumber: 66,
                columnNumber: 18
            }, this));
        } else if (diff > 0) {
            stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PartialStar, {
                fraction: diff
            }, i, false, {
                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                lineNumber: 68,
                columnNumber: 18
            }, this));
        } else {
            stars.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptyStar, {}, i, false, {
                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                lineNumber: 70,
                columnNumber: 18
            }, this));
        }
    }
    return stars;
}
/* ─── Default Testimonials ─── */ const defaultTestimonials = [
    {
        rating: 3.75,
        text: 'Medicul a ajuns exact la ora stabilită, a fost atent, calm și mi-a explicat totul cu răbdare. E prima dată când simt că sunt ascultat cu adevărat. Mulțumesc, Medelise!',
        name: 'Mircea Popa',
        company: 'Pacient Verificat'
    },
    {
        rating: 5.0,
        text: 'Am apelat la Medelise pentru o evaluare la domiciliu a tatălui meu. Echipa a fost impecabil organizată și empatică. Nu știam că se poate primi îngrijire medicală de calitate acasă!',
        name: 'Elena Dumitrescu',
        company: 'Pacient Verificat'
    },
    {
        rating: 4.5,
        text: 'Am programat o perfuzie IV pentru rehidratare după o viroză. Asistenta a fost profesionistă, m-a monitorizat constant și m-am simțit în siguranță pe tot parcursul procedurii.',
        name: 'Andrei Marinescu',
        company: 'Pacient Verificat'
    },
    {
        rating: 5.0,
        text: 'Serviciul de recoltare la domiciliu a fost rapid și fără stres. Rezultatele au ajuns pe e-mail în aceeași zi. Comod și eficient, exact ce aveam nevoie.',
        name: 'Maria Ionescu',
        company: 'Pacient Verificat'
    },
    {
        rating: 5.0,
        text: 'Mama mea are nevoie de îngrijiri regulate pentru escare. Echipa Medelise vine de trei ori pe săptămână și tratamentul a arătat progrese vizibile. Foarte recunoscătoare!',
        name: 'Cristina Georgescu',
        company: 'Pacient Verificat'
    },
    {
        rating: 4.5,
        text: 'După operația de genunchi, recuperarea cu kinetoterapistul de la Medelise a fost excelentă. Exercițiile personalizate și vizitele regulate m-au ajutat enorm.',
        name: 'Alexandru Toma',
        company: 'Pacient Verificat'
    },
    {
        rating: 5.0,
        text: 'Procesul de programare online e incredibil de simplu. În mai puțin de un minut am reușit să stabilesc o consultație pentru toată familia. Recomand cu încredere!',
        name: 'Diana Moldovan',
        company: 'Pacient Verificat'
    }
];
function TestimonialsSection({ testimonials = defaultTestimonials, title = 'Testimoniale', subtitle = 'Secțiunea noastră de testimoniale reflectă experiențele și satisfacția clienților și utilizatorilor noștri.', hiddenSubtitle = false, compact = false }) {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((direction)=>{
        if (!scrollRef.current) return;
        const cardWidth = 380 + 16; // card width + gap (matches CSS)
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -cardWidth : cardWidth,
            behavior: 'smooth'
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-73e62c4813ee9f37" + " " + `tm-section ${compact ? 'tm-compact' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-73e62c4813ee9f37" + " " + "tm-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-73e62c4813ee9f37" + " " + "tm-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-73e62c4813ee9f37" + " " + "tm-header-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-73e62c4813ee9f37" + " " + "tm-header-text",
                                        children: [
                                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-73e62c4813ee9f37" + " " + "tm-title",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                lineNumber: 148,
                                                columnNumber: 27
                                            }, this),
                                            !hiddenSubtitle && subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-73e62c4813ee9f37" + " " + "tm-subtitle",
                                                children: subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-73e62c4813ee9f37" + " " + "tm-nav-buttons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scroll('left'),
                                                "aria-label": "Testimonial anterior",
                                                className: "jsx-73e62c4813ee9f37" + " " + "tm-nav-btn",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICONS"].arrowLeft,
                                                    alt: "",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scroll('right'),
                                                "aria-label": "Testimonial următor",
                                                className: "jsx-73e62c4813ee9f37" + " " + "tm-nav-btn",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$shared$2f$constants$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICONS"].arrowRight,
                                                    alt: "",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: scrollRef,
                                className: "jsx-73e62c4813ee9f37" + " " + "tm-cards-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-73e62c4813ee9f37" + " " + "tm-cards-track",
                                    children: testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-73e62c4813ee9f37" + " " + "tm-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-73e62c4813ee9f37" + " " + "tm-stars",
                                                    children: renderStars(t.rating)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-73e62c4813ee9f37" + " " + "tm-card-content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "jsx-73e62c4813ee9f37" + " " + "tm-card-text",
                                                            children: t.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-73e62c4813ee9f37" + " " + "tm-card-author",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-73e62c4813ee9f37" + " " + "tm-avatar-circle",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-73e62c4813ee9f37" + " " + "tm-avatar-initials",
                                                                        children: t.name.split(' ').map((n)=>n[0]).join('')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                                        lineNumber: 191,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-73e62c4813ee9f37" + " " + "tm-author-info",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-73e62c4813ee9f37" + " " + "tm-author-name",
                                                                            children: t.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                                            lineNumber: 199,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-73e62c4813ee9f37" + " " + "tm-author-company",
                                                                            children: t.company
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                                            lineNumber: 200,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/ui/TestimonialsSection.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "73e62c4813ee9f37",
                children: ".tm-section.jsx-73e62c4813ee9f37{width:100%;padding-left:var(--space-section-px);background:var(--color-white);flex-direction:column;justify-content:flex-start;align-items:flex-start;display:inline-flex}.tm-section.tm-compact.jsx-73e62c4813ee9f37{background:0 0;padding-left:0}.tm-inner.jsx-73e62c4813ee9f37{background:var(--color-white);flex-direction:column;justify-content:flex-start;align-self:stretch;align-items:center;padding-top:64px;padding-bottom:64px;display:flex}.tm-compact.jsx-73e62c4813ee9f37 .tm-inner.jsx-73e62c4813ee9f37{background:0 0;padding-top:0;padding-bottom:0}.tm-compact.jsx-73e62c4813ee9f37 .tm-header-row.jsx-73e62c4813ee9f37,.tm-compact.jsx-73e62c4813ee9f37 .tm-cards-track.jsx-73e62c4813ee9f37{padding-right:0}.tm-content.jsx-73e62c4813ee9f37{flex-direction:column;justify-content:flex-start;align-self:stretch;align-items:flex-start;display:flex;overflow:hidden}.tm-header-row.jsx-73e62c4813ee9f37{padding-top:var(--space-8);padding-bottom:var(--space-8);padding-right:var(--space-section-px);background:var(--color-white);justify-content:flex-start;align-self:stretch;align-items:center;gap:var(--space-8);display:flex}.tm-header-text.jsx-73e62c4813ee9f37{justify-content:flex-start;align-items:flex-start;gap:var(--space-3);flex-direction:column;display:inline-flex}.tm-title.jsx-73e62c4813ee9f37{color:var(--color-primary);font-size:var(--text-h2);font-weight:600;line-height:var(--lh-heading);margin:0}.tm-subtitle.jsx-73e62c4813ee9f37{width:478px;color:var(--color-primary);font-size:var(--text-body-lg);font-weight:400;line-height:var(--lh-body);margin:0}.tm-nav-buttons.jsx-73e62c4813ee9f37{justify-content:flex-start;align-items:flex-start;gap:var(--space-8);margin-left:auto;display:none}@media (width>=641px){.tm-nav-buttons.jsx-73e62c4813ee9f37{display:flex}}.tm-nav-btn.jsx-73e62c4813ee9f37{background:var(--color-surface);border-radius:var(--radius-full);cursor:pointer;border:none;flex-shrink:0;justify-content:center;align-items:center;width:56px;height:56px;transition:background-color .2s,transform .15s;display:flex;position:relative}.tm-nav-btn.jsx-73e62c4813ee9f37:hover{background:var(--color-surface-border);transform:scale(1.05)}.tm-nav-btn.jsx-73e62c4813ee9f37:active{transform:scale(.97)}.tm-cards-wrapper.jsx-73e62c4813ee9f37{scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none;scroll-behavior:smooth;width:100%;overflow:scroll hidden}.tm-cards-wrapper.jsx-73e62c4813ee9f37::-webkit-scrollbar{display:none}.tm-cards-track.jsx-73e62c4813ee9f37{align-items:stretch;gap:var(--space-4);padding-right:var(--space-section-px);display:inline-flex}.tm-card.jsx-73e62c4813ee9f37{width:380px;min-width:380px;padding:var(--space-6);background:var(--color-surface-card);border-radius:var(--radius-lg);justify-content:flex-start;align-items:flex-start;gap:var(--space-3);scroll-snap-align:start;flex-direction:column;display:flex}.tm-card-content.jsx-73e62c4813ee9f37{justify-content:space-between;align-self:stretch;align-items:flex-start;gap:var(--space-6);flex-direction:column;flex:1;display:flex}.tm-card-text.jsx-73e62c4813ee9f37{color:var(--color-primary);font-size:var(--text-body);font-weight:400;line-height:var(--lh-body);align-self:stretch;margin:0}.tm-card-author.jsx-73e62c4813ee9f37{justify-content:flex-start;align-items:center;gap:var(--space-3);display:flex}.tm-avatar-circle.jsx-73e62c4813ee9f37{width:var(--space-12);height:var(--space-12);border-radius:var(--radius-full);background:var(--color-primary);flex-shrink:0;justify-content:center;align-items:center;display:flex}.tm-avatar-initials.jsx-73e62c4813ee9f37{color:var(--color-white);font-size:var(--text-body);letter-spacing:.5px;font-weight:600}.tm-author-info.jsx-73e62c4813ee9f37{flex-direction:column;flex:1 1 0;justify-content:flex-start;align-items:flex-start;display:inline-flex}.tm-author-name.jsx-73e62c4813ee9f37{color:var(--color-primary);font-size:var(--text-body);font-weight:500;line-height:var(--lh-body)}.tm-author-company.jsx-73e62c4813ee9f37{color:var(--color-text-muted);font-size:var(--text-sm);font-weight:400;line-height:var(--lh-body)}.tm-stars.jsx-73e62c4813ee9f37{gap:var(--space-1);height:var(--space-6);flex-direction:row;align-items:center;display:flex}@media (width<=1024px){.tm-section.jsx-73e62c4813ee9f37{padding-right:var(--space-section-px)}.tm-header-row.jsx-73e62c4813ee9f37{padding-right:0}.tm-subtitle.jsx-73e62c4813ee9f37{width:100%}.tm-cards-track.jsx-73e62c4813ee9f37{padding-right:0}}@media (width<=640px){.tm-header-row.jsx-73e62c4813ee9f37{padding-right:var(--space-section-px);padding-top:var(--space-6);padding-bottom:var(--space-6)}.tm-cards-track.jsx-73e62c4813ee9f37{padding-right:var(--space-section-px)}.tm-card.jsx-73e62c4813ee9f37{width:280px;min-width:280px;padding:var(--space-5)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=apps_web_src_baa409ae._.js.map