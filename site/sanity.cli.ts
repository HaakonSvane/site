import { defineCliConfig } from "@sanity/cli";

export default defineCliConfig({
    typegen: {
        schema: "node_modules/@haakonsvane/site-studio/schema.json",
        path: "./app/sanity/**/*.{ts,tsx,js,jsx}",
        generates: "./app/sanity/sanity-types.ts",
    },
});
