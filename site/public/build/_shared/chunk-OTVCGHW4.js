import {
  Card
} from "/build/_shared/chunk-4GFZLXQY.js";
import {
  tw
} from "/build/_shared/chunk-LYOTCKAL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-JL6WUFSE.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/ui/Skeleton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Skeleton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Skeleton.tsx"
  );
  import.meta.hot.lastModified = "1723319062331.0974";
}
var Skeleton = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: tw("animate-pulse rounded-md bg-muted opacity-10", className), ...props }, void 0, false, {
    fileName: "app/ui/Skeleton.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = Skeleton;
var _c;
$RefreshReg$(_c, "Skeleton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/SiteItem/SiteItemCardSkeleton.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/SiteItem/SiteItemCardSkeleton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/SiteItem/SiteItemCardSkeleton.tsx"
  );
  import.meta.hot.lastModified = "1723319915151.2983";
}
var SiteItemCardSkeleton = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "border-muted", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { className: "h-7 w-[10%]" }, void 0, false, {
      fileName: "app/ui/SiteItem/SiteItemCardSkeleton.tsx",
      lineNumber: 26,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/SiteItem/SiteItemCardSkeleton.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card.Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card.ContentRow, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { className: "w-12 h-12" }, void 0, false, {
        fileName: "app/ui/SiteItem/SiteItemCardSkeleton.tsx",
        lineNumber: 30,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card.Description, { className: "w-full flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { className: "h-4 w-[100%]" }, void 0, false, {
          fileName: "app/ui/SiteItem/SiteItemCardSkeleton.tsx",
          lineNumber: 32,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { className: "h-4 w-[62%]" }, void 0, false, {
          fileName: "app/ui/SiteItem/SiteItemCardSkeleton.tsx",
          lineNumber: 33,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/ui/SiteItem/SiteItemCardSkeleton.tsx",
        lineNumber: 31,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/SiteItem/SiteItemCardSkeleton.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/SiteItem/SiteItemCardSkeleton.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/SiteItem/SiteItemCardSkeleton.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c2 = SiteItemCardSkeleton;
var _c2;
$RefreshReg$(_c2, "SiteItemCardSkeleton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SiteItemCardSkeleton
};
//# sourceMappingURL=/build/_shared/chunk-OTVCGHW4.js.map
