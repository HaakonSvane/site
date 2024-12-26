import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
    name: "default",
    title: "haakonsvane.dev",

    projectId: "t0kmv9vc",
    dataset: "production",

    plugins: [structureTool(), visionTool(), markdownSchema()],

    schema: {
        types: schemaTypes,
    },
});
