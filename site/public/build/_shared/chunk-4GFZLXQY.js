import {
  Typography,
  tw
} from "/build/_shared/chunk-LYOTCKAL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link
} from "/build/_shared/chunk-COYQBUTN.js";
import {
  createHotContext
} from "/build/_shared/chunk-JL6WUFSE.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/lib/server/graphql.server
var require_graphql = __commonJS({
  "empty-module:~/lib/server/graphql.server"(exports, module) {
    module.exports = {};
  }
});

// app/graphql/graphql.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/graphql/graphql.ts"
  );
  import.meta.hot.lastModified = "1730096519288.4243";
}
var GetPostQueryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetPostQuery" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "slug" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "blogPostCollection" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "slug" } } }] } }, { "kind": "Argument", "name": { "kind": "Name", "value": "limit" }, "value": { "kind": "IntValue", "value": "1" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "items" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "content" } }] } }] } }] } }] };
var GetProjectQueryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetProjectQuery" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "slug" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "projectCollection" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "slug" } } }] } }, { "kind": "Argument", "name": { "kind": "Name", "value": "limit" }, "value": { "kind": "IntValue", "value": "1" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "items" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "description" } }, { "kind": "Field", "name": { "kind": "Name", "value": "siteUrl" } }, { "kind": "Field", "name": { "kind": "Name", "value": "githubUrl" } }, { "kind": "Field", "name": { "kind": "Name", "value": "leadImage" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }] } }] } }] } }] } }] };
var GetProjectPostQueryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetProjectPostQuery" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "projectSlug" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "postSlug" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "projectCollection" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "projectSlug" } } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "items" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "postsCollection" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "postSlug" } } }] } }, { "kind": "Argument", "name": { "kind": "Name", "value": "limit" }, "value": { "kind": "IntValue", "value": "1" } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "items" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "content" } }] } }] } }] } }] } }] } }] };
var GetPostsQueryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetPostsQuery" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "blogPostCollection" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "items" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "synopsis" } }, { "kind": "Field", "name": { "kind": "Name", "value": "leadImage" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "url" } }] } }] } }] } }] } }] };
var GetProjectPostsQueryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetProjectPostsQuery" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "projectSlug" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "projectPostCollection" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "project" }, "value": { "kind": "ObjectValue", "fields": [{ "kind": "ObjectField", "name": { "kind": "Name", "value": "slug" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "projectSlug" } } }] } }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "items" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "synopsis" } }, { "kind": "Field", "name": { "kind": "Name", "value": "leadImage" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "url" } }] } }] } }] } }] } }] };
var GetProjectsQueryDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "GetProjectsQuery" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "projectCollection" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "items" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }, { "kind": "Field", "name": { "kind": "Name", "value": "synopsis" } }, { "kind": "Field", "name": { "kind": "Name", "value": "leadImage" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "url" } }, { "kind": "Field", "name": { "kind": "Name", "value": "title" } }] } }] } }] } }] } }] };

// app/graphql/gql.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/graphql/gql.ts"
  );
  import.meta.hot.lastModified = "1730096519289.2751";
}
var documents = {
  "\n    query GetPostQuery($slug: String!) {\n        blogPostCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                content\n            }\n        }\n    }\n": GetPostQueryDocument,
  "\n    query GetProjectQuery($slug: String!) {\n        projectCollection(where: { slug: $slug }, limit: 1) {\n            items {\n                title\n                description\n                siteUrl\n                githubUrl\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n": GetProjectQueryDocument,
  "\n    query GetProjectPostQuery($projectSlug: String!, $postSlug: String!) {\n        projectCollection(where: { slug: $projectSlug }) {\n            items {\n                postsCollection(where: {slug: $postSlug}, limit: 1) {\n                    items {\n                        title\n                        content\n                    }\n                }\n            }\n        }\n    }\n\n": GetProjectPostQueryDocument,
  "\n    query GetPostsQuery {\n        blogPostCollection {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n": GetPostsQueryDocument,
  "\n    query GetProjectPostsQuery($projectSlug: String!) {\n        projectPostCollection(where: { project: { slug: $projectSlug } }) {\n            items {\n                title\n                slug\n                synopsis\n                leadImage {\n                    title\n                    url\n                }\n            }\n        }\n    }\n": GetProjectPostsQueryDocument,
  "\n    query GetProjectsQuery {\n        projectCollection {\n            items {\n                title\n                slug\n                title\n                synopsis\n                leadImage {\n                    url\n                    title\n                }\n            }\n        }\n    }\n": GetProjectsQueryDocument
};
function gql(source) {
  return documents[source] ?? {};
}

// app/ui/Card/Card.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Card/Card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Card/Card.tsx"
  );
  import.meta.hot.lastModified = "1714417614828.9272";
}
var Card = (0, import_react.forwardRef)(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: tw("rounded-sm border bg-card text-card-foreground shadow-sm", className), ...props }, void 0, false, {
  fileName: "app/ui/Card/Card.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c2 = Card;
Card.displayName = "Card";
var _c;
var _c2;
$RefreshReg$(_c, "Card$forwardRef");
$RefreshReg$(_c2, "Card");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Card/CardContent.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Card/CardContent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Card/CardContent.tsx"
  );
  import.meta.hot.lastModified = "1720800961827.8833";
}
var CardContent = (0, import_react2.forwardRef)(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref, className: tw("px-6 py-4 pt-0", className), ...props }, void 0, false, {
  fileName: "app/ui/Card/CardContent.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c22 = CardContent;
CardContent.displayName = "CardContent";
var _c3;
var _c22;
$RefreshReg$(_c3, "CardContent$forwardRef");
$RefreshReg$(_c22, "CardContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Card/CardContentRow.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Card/CardContentRow.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Card/CardContentRow.tsx"
  );
  import.meta.hot.lastModified = "1720800684881.7637";
}
var CardContentRow = (0, import_react3.forwardRef)(_c4 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { ...props, className: tw("flex flex-row gap-x-4 items-center", className), ref }, void 0, false, {
  fileName: "app/ui/Card/CardContentRow.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c23 = CardContentRow;
CardContentRow.displayName = "CardContentRow";
var _c4;
var _c23;
$RefreshReg$(_c4, "CardContentRow$forwardRef");
$RefreshReg$(_c23, "CardContentRow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Card/CardDescription.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Card/CardDescription.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Card/CardDescription.tsx"
  );
  import.meta.hot.lastModified = "1714300885458.1685";
}
var CardDescription = (0, import_react4.forwardRef)(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { ref, className: tw("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/ui/Card/CardDescription.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c24 = CardDescription;
CardDescription.displayName = "Card.Description";
var _c5;
var _c24;
$RefreshReg$(_c5, "CardDescription$forwardRef");
$RefreshReg$(_c24, "CardDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Card/CardFooter.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Card/CardFooter.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Card/CardFooter.tsx"
  );
  import.meta.hot.lastModified = "1714300791621.0713";
}
var CardFooter = (0, import_react5.forwardRef)(_c6 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref, className: tw("flex items-center p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "app/ui/Card/CardFooter.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c25 = CardFooter;
CardFooter.displayName = "Card.Footer";
var _c6;
var _c25;
$RefreshReg$(_c6, "CardFooter$forwardRef");
$RefreshReg$(_c25, "CardFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Card/CardHeader.tsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Card/CardHeader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Card/CardHeader.tsx"
  );
  import.meta.hot.lastModified = "1720800899947.194";
}
var CardHeader = (0, import_react6.forwardRef)(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref, className: tw("flex flex-col gap-2 px-6 py-4", className), ...props }, void 0, false, {
  fileName: "app/ui/Card/CardHeader.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c26 = CardHeader;
CardHeader.displayName = "Card.Header";
var _c7;
var _c26;
$RefreshReg$(_c7, "CardHeader$forwardRef");
$RefreshReg$(_c26, "CardHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Card/CardLink.tsx
var import_react8 = __toESM(require_react(), 1);
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Card/CardLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Card/CardLink.tsx"
  );
  import.meta.hot.lastModified = "1717344647198.3533";
}
var CardLink = (0, import_react8.forwardRef)(_c8 = ({
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { ref, ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "transition-colors hover:bg-foreground/5", children }, void 0, false, {
  fileName: "app/ui/Card/CardLink.tsx",
  lineNumber: 28,
  columnNumber: 9
}, this) }, void 0, false, {
  fileName: "app/ui/Card/CardLink.tsx",
  lineNumber: 27,
  columnNumber: 12
}, this));
_c27 = CardLink;
CardLink.displayName = "Card.Link";
var _c8;
var _c27;
$RefreshReg$(_c8, "CardLink$forwardRef");
$RefreshReg$(_c27, "CardLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Card/CardTitle.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/Card/CardTitle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Card/CardTitle.tsx"
  );
  import.meta.hot.lastModified = "1717354326001.7112";
}
var CardTitle = ({
  className,
  children,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Typography.Serif, { className: tw("text-2xl font-semibold leading-none tracking-tight", className), ...props, children }, void 0, false, {
  fileName: "app/ui/Card/CardTitle.tsx",
  lineNumber: 27,
  columnNumber: 7
}, this);
_c9 = CardTitle;
CardTitle.displayName = "Card.Title";
var _c9;
$RefreshReg$(_c9, "CardTitle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/ui/Card/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/Card/index.ts"
  );
  import.meta.hot.lastModified = "1720800710941.4487";
}
var Card2 = Card;
Card2.Content = CardContent;
Card2.ContentRow = CardContentRow;
Card2.Description = CardDescription;
Card2.Footer = CardFooter;
Card2.Header = CardHeader;
Card2.Title = CardTitle;
Card2.Link = CardLink;

// app/ui/SiteItem/SiteItemCard.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/ui/SiteItem/SiteItemCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/ui/SiteItem/SiteItemCard.tsx"
  );
  import.meta.hot.lastModified = "1723319882885.034";
}
var SiteItemCard = ({
  title,
  slug,
  leadImage,
  description
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card2.Link, { to: slug, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card2.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card2.Title, { children: title }, void 0, false, {
      fileName: "app/ui/SiteItem/SiteItemCard.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/SiteItem/SiteItemCard.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card2.Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card2.ContentRow, { children: [
      leadImage?.url && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: leadImage.url, alt: leadImage.title ?? "Post image", className: "w-12 h-12" }, void 0, false, {
        fileName: "app/ui/SiteItem/SiteItemCard.tsx",
        lineNumber: 34,
        columnNumber: 40
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Card2.Description, { className: "text-card-foreground", children: description }, void 0, false, {
        fileName: "app/ui/SiteItem/SiteItemCard.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/ui/SiteItem/SiteItemCard.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/ui/SiteItem/SiteItemCard.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/ui/SiteItem/SiteItemCard.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c10 = SiteItemCard;
var _c10;
$RefreshReg$(_c10, "SiteItemCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  gql,
  require_graphql,
  Card2 as Card,
  SiteItemCard
};
//# sourceMappingURL=/build/_shared/chunk-4GFZLXQY.js.map
