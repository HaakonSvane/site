import { readFile, readdir } from "./fs.server";
import path from "path";
import { bundleMDX } from "./mdx.server";
import { gql } from "urql";
import { qlQuery } from "./graphql.server";
import { Project } from "~/graphql/graphql";

const GET_PROJECT_QUERY = gql(`
    query GetProjectQuery($slug: String!) {
        projectCollection(where: { slug: $slug }) {
            items {
                title
                description
                leadImage {
                    url
                    title
                }
            }
        }
    }
`);

export async function getProject(projectSlug: string) {
    const queryResponse = await qlQuery(GET_PROJECT_QUERY, { slug: projectSlug });
    const rawProject = queryResponse.data?.projectCollection?.items.at(0) as Project | undefined;
    if (!rawProject) {
        return null;
    }
    const [rehypeHighlight, remarkGfm] = await Promise.all([
        import("rehype-highlight").then(mod => mod.default),
        import("remark-gfm").then(mod => mod.default),
    ]);

    const { code } = await bundleMDX({
        source: rawProject.description ?? "",
        cwd: process.cwd(),
        esbuildOptions: options => {
            options.loader = {
                ...options.loader,
                ".png": "dataurl",
                ".gif": "dataurl",
            };

            return options;
        },
        mdxOptions: options => {
            options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
            options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeHighlight];
            return options;
        },
    });

    return {
        ...rawProject,
        description: code,
    } satisfies Project;
}
