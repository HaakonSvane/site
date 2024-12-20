import {
  logo_dark_default,
  logo_light_default,
  require_build
} from "/build/_shared/chunk-GLW6SBSN.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  Container,
  Typography
} from "/build/_shared/chunk-LYOTCKAL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-3ASZTCA3.js";
import {
  createHotContext
} from "/build/_shared/chunk-JL6WUFSE.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_remix_themes = __toESM(require_build(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1720801478114.702";
}
var meta = () => {
  return [{
    title: "Haakon Svane"
  }, {
    name: "description",
    content: "Personal site for Haakon Svane"
  }];
};
function Index() {
  _s();
  const [theme] = (0, import_remix_themes.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "justify-center gap-4 max-w-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row gap-8 md:gap-6 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: theme === "dark" ? logo_dark_default : logo_light_default, alt: "logo", className: "w-24 h-24" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography.Serif, { className: "text-5xl font-bold", children: "Hi, I'm Haakon" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography.Sans, { children: "My name is Haakon Hafsahl Svane. Welcome to what is, or at least will be, my personal site. This site acts as both a blog and a project showcase. Feel free to navigate around and see if there is anything that interests you." }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(Index, "tTTAODy8wohSLSpq8pa8WNTieJI=", false, function() {
  return [import_remix_themes.useTheme];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-LAC2JXS6.js.map
