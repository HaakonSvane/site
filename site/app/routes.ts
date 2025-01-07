import { index, prefix, route, type RouteConfig } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    ...prefix("projects", [
        index("routes/projects/index.tsx"),
        route(":project", "routes/projects/project.tsx"),
        route(":project/:slug", "routes/projects/post.tsx"),
    ]),
    ...prefix("blog", [index("routes/blog/index.tsx"), route(":slug", "routes/blog/post.tsx")]),
] satisfies RouteConfig;
