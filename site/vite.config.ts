import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [reactRouter(), tsConfigPaths()],
});
