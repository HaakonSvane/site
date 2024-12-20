import {
  Github,
  Globe
} from "/build/_shared/chunk-N4JNMWUH.js";
import {
  require_projects
} from "/build/_shared/chunk-OPEP335O.js";
import {
  SiteItemCard,
  gql,
  require_graphql
} from "/build/_shared/chunk-4GFZLXQY.js";
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
  Typography,
  tw
} from "/build/_shared/chunk-LYOTCKAL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
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

// app/routes/projects.$project._index/route.tsx
var import_node = __toESM(require_node(), 1);
var import_client = __toESM(require_client(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_graphql2 = __toESM(require_graphql(), 1);
var import_projects = __toESM(require_projects(), 1);

// app/ui/Badge/Badge.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Badge/Badge.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Badge/Badge.tsx"
  );
  import.meta.hot.lastModified = "1717344776566.703";
}
var Badge = ({
  title,
  LeadingIcon,
  TrailingIcon,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ...rest, className: tw("rounded-sm border bg-card text-card-foreground p-2 flex flex-row space-x-2 items-center", className), children: [
    LeadingIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LeadingIcon, { className: "size-4" }, void 0, false, {
      fileName: "app/ui/Badge/Badge.tsx",
      lineNumber: 31,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography.Sans, { children: title }, void 0, false, {
      fileName: "app/ui/Badge/Badge.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    TrailingIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrailingIcon, { className: "size-4" }, void 0, false, {
      fileName: "app/ui/Badge/Badge.tsx",
      lineNumber: 33,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/Badge/Badge.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c = Badge;
var _c;
$RefreshReg$(_c, "Badge");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Badge/BadgeLink.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Badge/BadgeLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Badge/BadgeLink.tsx"
  );
  import.meta.hot.lastModified = "1717344833094.7698";
}
var BadgeLink = ({
  LeadingIcon,
  TrailingIcon,
  className,
  title,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { ...rest, className: tw("rounded-sm border bg-card text-card-foreground p-2 flex flex-row space-x-2 items-center hover:bg-primary/5 transition-colors", className), children: [
    LeadingIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LeadingIcon, { className: "size-4" }, void 0, false, {
      fileName: "app/ui/Badge/BadgeLink.tsx",
      lineNumber: 31,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography.Sans, { className: "font-bold", children: title }, void 0, false, {
      fileName: "app/ui/Badge/BadgeLink.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    TrailingIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TrailingIcon, { className: "size-4" }, void 0, false, {
      fileName: "app/ui/Badge/BadgeLink.tsx",
      lineNumber: 33,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/Badge/BadgeLink.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c2 = BadgeLink;
var _c2;
$RefreshReg$(_c2, "BadgeLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Badge/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Badge/index.ts"
  );
  import.meta.hot.lastModified = "1715251960047.7148";
}
var Badge2 = Badge;
Badge2.Link = BadgeLink;

// app/routes/projects.$project._index/route.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/projects.$project._index/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/projects.$project._index/route.tsx"
  );
  import.meta.hot.lastModified = "1723319896686.4255";
}
var GET_PROJECT_POSTS_QUERY = gql(`
    query GetProjectPostsQuery($projectSlug: String!) {
        projectPostCollection(where: { project: { slug: $projectSlug } }) {
            items {
                title
                slug
                synopsis
                leadImage {
                    title
                    url
                }
            }
        }
    }
`);
var meta = ({
  data
}) => {
  return [{
    title: `${data?.project?.title ?? "Project"} | Haakon Svane`
  }, {
    name: "description",
    content: `The ${data?.project?.title ?? "UNNAMED"} project of Haakon Svane`
  }];
};
function Project() {
  _s();
  const {
    project,
    projectPosts
  } = useLoaderData();
  const Component = (0, import_react2.useMemo)(() => (0, import_client.getMDXComponent)(project?.description ?? ""), [project?.description]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container, { className: "flex flex-1 flex-col gap-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Typography.Serif, { className: "text-4xl font-bold", children: project?.title }, void 0, false, {
      fileName: "app/routes/projects.$project._index/route.tsx",
      lineNumber: 107,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row gap-x-4 items-center", children: [
      project?.siteUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge2.Link, { LeadingIcon: Globe, title: "Project site", href: project?.siteUrl }, void 0, false, {
        fileName: "app/routes/projects.$project._index/route.tsx",
        lineNumber: 116,
        columnNumber: 38
      }, this),
      project?.githubUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge2.Link, { LeadingIcon: Github, title: "GitHub", href: project?.githubUrl }, void 0, false, {
        fileName: "app/routes/projects.$project._index/route.tsx",
        lineNumber: 117,
        columnNumber: 40
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects.$project._index/route.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Component, { components: postComponents }, void 0, false, {
      fileName: "app/routes/projects.$project._index/route.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Typography.Serif, { className: "text-2xl font-bold", children: "Project posts" }, void 0, false, {
        fileName: "app/routes/projects.$project._index/route.tsx",
        lineNumber: 121,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: (projectPosts ?? []).map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SiteItemCard, { title: post.title ?? "[Missing title]", description: post.synopsis ?? "[Missing synopsis]", slug: post.slug, leadImage: post.leadImage ? {
        title: post.leadImage.title ?? void 0,
        url: post.leadImage.url
      } : void 0 }, post.slug, false, {
        fileName: "app/routes/projects.$project._index/route.tsx",
        lineNumber: 123,
        columnNumber: 55
      }, this)) }, void 0, false, {
        fileName: "app/routes/projects.$project._index/route.tsx",
        lineNumber: 122,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/projects.$project._index/route.tsx",
      lineNumber: 120,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/projects.$project._index/route.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
}
_s(Project, "VrdD+ZDb5vhql7MFoQYEQa5lcxo=", false, function() {
  return [useLoaderData];
});
_c3 = Project;
var _c3;
$RefreshReg$(_c3, "Project");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Project as default,
  meta
};
//# sourceMappingURL=/build/routes/projects.$project._index-G3AONZUL.js.map
