import {
  SiteItemCardSkeleton
} from "/build/_shared/chunk-OTVCGHW4.js";
import {
  SiteItemCard,
  gql,
  require_graphql
} from "/build/_shared/chunk-4GFZLXQY.js";
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
  Await,
  useLoaderData
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/projects._index/route.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_graphql2 = __toESM(require_graphql(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/projects._index/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects._index/route.tsx"
  );
  import.meta.hot.lastModified = "1723321745110.1633";
}
var meta = () => {
  return [{
    title: "Projects | Haakon Svane"
  }, {
    name: "description",
    content: "Haakon Svane's projects"
  }];
};
var GET_PROJECTS_QUERY = gql(`
    query GetProjectsQuery {
        projectCollection {
            items {
                title
                slug
                title
                synopsis
                leadImage {
                    url
                    title
                }
            }
        }
    }
`);
var Projects = () => {
  _s();
  const {
    posts
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { className: "flex flex-1 flex-col gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography.Serif, { className: "text-4xl font-bold", children: "Projects" }, void 0, false, {
      fileName: "app/routes/projects._index/route.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, { fallback: Array(3).fill(0).map((index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteItemCardSkeleton, {}, index, false, {
      fileName: "app/routes/projects._index/route.tsx",
      lineNumber: 72,
      columnNumber: 67
    }, this)), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: posts, children: (posts2) => posts2.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteItemCard, { title: project.title ?? "[Missing title]", description: project.synopsis ?? "[Missing synopsis]", slug: project.slug, leadImage: project.leadImage ? {
      url: project.leadImage.url,
      title: project.leadImage.title ?? void 0
    } : void 0 }, project.slug, false, {
      fileName: "app/routes/projects._index/route.tsx",
      lineNumber: 74,
      columnNumber: 56
    }, this)) }, void 0, false, {
      fileName: "app/routes/projects._index/route.tsx",
      lineNumber: 73,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/projects._index/route.tsx",
      lineNumber: 72,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/projects._index/route.tsx",
      lineNumber: 71,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects._index/route.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
};
_s(Projects, "TAfyE0i9dyPQ7/d8lmPxXUSIugM=", false, function() {
  return [useLoaderData];
});
_c = Projects;
var route_default = Projects;
var _c;
$RefreshReg$(_c, "Projects");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default,
  meta
};
//# sourceMappingURL=/build/routes/projects._index-LDWA7O4X.js.map
