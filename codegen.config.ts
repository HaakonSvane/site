import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./schema.graphql",
    documents: ["app/**/*.{ts,tsx}"],
    generates: {
        "./app/graphql/": {
            preset: "client",
            plugins: [],
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;
