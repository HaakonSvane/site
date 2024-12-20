import {
  isJsonErrorResponse
} from "/build/_shared/chunk-2PKLFTWB.js";
import {
  postComponents,
  require_client
} from "/build/_shared/chunk-HZPDTMHU.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Container,
  Typography
} from "/build/_shared/chunk-LYOTCKAL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  useLoaderData,
  useRouteError
} from "/build/_shared/chunk-COYQBUTN.js";
import "/build/_shared/chunk-3ASZTCA3.js";
import {
  createHotContext
} from "/build/_shared/chunk-JL6WUFSE.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/lib/server/blogPost.server
var require_blogPost = __commonJS({
  "empty-module:~/lib/server/blogPost.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/blog.$slug/route.tsx
var import_node = __toESM(require_node(), 1);
var import_client = __toESM(require_client(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_blogPost = __toESM(require_blogPost(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.$slug/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.$slug/route.tsx"
  );
  import.meta.hot.lastModified = "1723494298737.9717";
}
var meta = ({
  data
}) => {
  return [{
    title: `${data?.title ?? "Post"} | Haakon Svane`
  }, {
    name: "description",
    content: "Personal site for Haakon Svane"
  }];
};
var BlogPost = () => {
  _s();
  const {
    content
  } = useLoaderData();
  const Component = (0, import_react2.useMemo)(() => (0, import_client.getMDXComponent)(content), [content]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Component, { components: postComponents }, void 0, false, {
    fileName: "app/routes/blog.$slug/route.tsx",
    lineNumber: 81,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.$slug/route.tsx",
    lineNumber: 80,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.$slug/route.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
};
_s(BlogPost, "rp9pIN3HyI74FiaiPsrbD8LOhko=", false, function() {
  return [useLoaderData];
});
_c = BlogPost;
var ErrorBoundary = () => {
  _s2();
  const error = useRouteError();
  let errorTitle;
  let errorDescription;
  if (isJsonErrorResponse(error)) {
    errorTitle = error.data.message;
    errorDescription = error.data.details;
    if (error.data.error?.message) {
      errorDescription += `
: ${error.data.error.message}`;
    }
  } else {
    errorTitle = "An error occurred";
    errorDescription = "An error occurred somewhere in the blog post page";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "flex h-full gap-x-4 flex-row justify-center align-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography.Serif, { className: "text-6xl font-bold whitespace-nowrap", children: ":(" }, void 0, false, {
      fileName: "app/routes/blog.$slug/route.tsx",
      lineNumber: 106,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.$slug/route.tsx",
      lineNumber: 105,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography.Serif, { className: "text-3xl font-bold", children: errorTitle }, void 0, false, {
        fileName: "app/routes/blog.$slug/route.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography.Sans, { children: errorDescription }, void 0, false, {
        fileName: "app/routes/blog.$slug/route.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog.$slug/route.tsx",
      lineNumber: 111,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography.Serif, { className: "text-6xl font-bold", children: "):" }, void 0, false, {
      fileName: "app/routes/blog.$slug/route.tsx",
      lineNumber: 117,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/blog.$slug/route.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.$slug/route.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
};
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c2 = ErrorBoundary;
var route_default = BlogPost;
var _c;
var _c2;
$RefreshReg$(_c, "BlogPost");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  route_default as default,
  meta
};
//# sourceMappingURL=/build/routes/blog.$slug-WMAD5NNE.js.map
