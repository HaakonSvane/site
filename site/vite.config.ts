import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        remix({
            basename: "/",
            buildDirectory: "build",
            ignoredRouteFiles: ["**/.css"],
        }),
        tsConfigPaths(),
    ],
});

// /** @type {import('@remix-run/dev').AppConfig} */
// export default {
//     tailwind: true,
//     postcss: true,
//     ignoredRouteFiles: ["**/.*"],
//     serverDependenciesToBundle: ["@radix-ui/themes"],
//     // appDirectory: "app",
//     // assetsBuildDirectory: "public/build",
//     // publicPath: "/build/",
//     // serverBuildPath: "build/index.js",
// };
