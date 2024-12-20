import {
  require_jsx_runtime
} from "/build/_shared/chunk-B43JI2TA.js";
import {
  Typography,
  tw
} from "/build/_shared/chunk-LYOTCKAL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-JL6WUFSE.js";
import {
  require_react_dom
} from "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/mdx-bundler/dist/client.js
var require_client = __commonJS({
  "node_modules/mdx-bundler/dist/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getMDXComponent = getMDXComponent;
    exports.getMDXExport = getMDXExport;
    var React = _interopRequireWildcard(require_react());
    var _jsx_runtime = _interopRequireWildcard(require_jsx_runtime());
    var ReactDOM = _interopRequireWildcard(require_react_dom());
    function _getRequireWildcardCache(e) {
      if ("function" != typeof WeakMap)
        return null;
      var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(e2) {
        return e2 ? t : r;
      })(e);
    }
    function _interopRequireWildcard(e, r) {
      if (!r && e && e.__esModule)
        return e;
      if (null === e || "object" != typeof e && "function" != typeof e)
        return { default: e };
      var t = _getRequireWildcardCache(r);
      if (t && t.has(e))
        return t.get(e);
      var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e)
        if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
          var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
        }
      return n.default = e, t && t.set(e, n), n;
    }
    function getMDXComponent(code, globals) {
      const mdxExport = getMDXExport(code, globals);
      return mdxExport.default;
    }
    function getMDXExport(code, globals) {
      const scope = {
        React,
        ReactDOM,
        _jsx_runtime,
        ...globals
      };
      const fn = new Function(...Object.keys(scope), code);
      return fn(...Object.values(scope));
    }
  }
});

// node_modules/mdx-bundler/client/index.js
var require_client2 = __commonJS({
  "node_modules/mdx-bundler/client/index.js"(exports, module) {
    module.exports = require_client();
  }
});

// app/lib/postComponents.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/postComponents.tsx"
  );
  import.meta.hot.lastModified = "1720648866944.121";
}
var postComponents = {
  h1: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Typography.Serif,
    {
      className: tw(
        "[&:not(:first-child)]:mt-6 scroll-m-20 border-b border-border pb-2 mb-6 text-4xl font-bold tracking-tight lg:text-5xl",
        props.className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "app/lib/postComponents.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  ),
  h2: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Typography.Serif,
    {
      className: tw(
        "[&:not(:first-child)]:mt-6 scroll-m-20 pb-0 mb-0 text-3xl font-extrabold tracking-tight first:mt-0",
        props.className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "app/lib/postComponents.tsx",
      lineNumber: 28,
      columnNumber: 9
    },
    this
  ),
  h3: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Typography.Serif,
    {
      className: tw(
        "[&:not(:first-child)]:mt-6 scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "app/lib/postComponents.tsx",
      lineNumber: 37,
      columnNumber: 9
    },
    this
  ),
  h4: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Typography.Serif,
    {
      className: tw(
        "[&:not(:first-child)]:mt-6 leading-8 text-xl font-semibold",
        props.className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "app/lib/postComponents.tsx",
      lineNumber: 46,
      columnNumber: 9
    },
    this
  ),
  h5: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Typography.Serif,
    {
      className: tw("[&:not(:first-child)]:mt-6 leading-8 text-lg", props.className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "app/lib/postComponents.tsx",
      lineNumber: 55,
      columnNumber: 9
    },
    this
  ),
  h6: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Typography.Serif,
    {
      className: tw("[&:not(:first-child)]:mt-6 leading-8 text-md", props.className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "app/lib/postComponents.tsx",
      lineNumber: 61,
      columnNumber: 9
    },
    this
  ),
  hr: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: tw("shrink-0 border-border", props.className), ...props }, void 0, false, {
    fileName: "app/lib/postComponents.tsx",
    lineNumber: 66,
    columnNumber: 18
  }, this),
  blockquote: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "blockquote",
    {
      className: tw("mt-6 border-l-2 pl-6 italic border-border", props.className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "app/lib/postComponents.tsx",
      lineNumber: 68,
      columnNumber: 9
    },
    this
  ),
  p: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography.Sans, { className: tw("leading-8 mb-6", props.className), ...props }, void 0, false, {
    fileName: "app/lib/postComponents.tsx",
    lineNumber: 73,
    columnNumber: 17
  }, this),
  table: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: tw("my-6 w-full max-w-lg mx-auto", props.className), ...props }, void 0, false, {
    fileName: "app/lib/postComponents.tsx",
    lineNumber: 75,
    columnNumber: 9
  }, this),
  tr: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: tw("", props.className), ...props }, void 0, false, {
    fileName: "app/lib/postComponents.tsx",
    lineNumber: 77,
    columnNumber: 18
  }, this),
  th: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: tw("m-0 border-t border-border p-0", props.className), ...props }, void 0, false, {
    fileName: "app/lib/postComponents.tsx",
    lineNumber: 79,
    columnNumber: 9
  }, this),
  li: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: tw("my-4 ml-6 list-disc [&>li]:mt-2", props.className), ...props }, void 0, false, {
    fileName: "app/lib/postComponents.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, this),
  small: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: tw("text-sm font-medium leading-none", props.className), ...props }, void 0, false, {
    fileName: "app/lib/postComponents.tsx",
    lineNumber: 85,
    columnNumber: 9
  }, this),
  svg: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: tw("inline", props.className), ...props }, void 0, false, {
    fileName: "app/lib/postComponents.tsx",
    lineNumber: 87,
    columnNumber: 19
  }, this),
  img: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "img",
    {
      alt: "[missing alt]",
      ...props,
      className: tw("object-cover max-w-[80%] mx-auto", props.className)
    },
    void 0,
    false,
    {
      fileName: "app/lib/postComponents.tsx",
      lineNumber: 89,
      columnNumber: 9
    },
    this
  )
};

export {
  require_client2 as require_client,
  postComponents
};
//# sourceMappingURL=/build/_shared/chunk-HZPDTMHU.js.map
