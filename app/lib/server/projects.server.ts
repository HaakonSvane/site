import { gql } from "~/graphql";
import { Project, ProjectPost } from "~/graphql/graphql";
import { qlQuery } from "./graphql.server";
import { bundleMDX } from "./mdx.server";

const GET_PROJECT_QUERY = gql(`
    query GetProjectQuery($slug: String!) {
        projectCollection(where: { slug: $slug }) {
            items {
                title
                description
                siteUrl
                githubUrl
                leadImage {
                    url
                    title
                }
            }
        }
    }
`);

const GET_PROJECT_POST_QUERY = gql(`
    query GetProjectPostQuery($projectSlug: String!, $postSlug: String!) {
        projectCollection(where: { slug: $projectSlug }) {
            items {
                postsCollection(where: {slug: $postSlug}) {
                    items {
                        title
                        content
                    }
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

export async function getProjectPost(projectSlug: string, postSlug: string) {
    const queryResponse = await qlQuery(GET_PROJECT_POST_QUERY, { projectSlug, postSlug });
    const rawPost = queryResponse.data?.projectCollection?.items
        .at(0)
        ?.postsCollection?.items.at(0) as ProjectPost | undefined;
    const [rehypeHighlight, remarkGfm] = await Promise.all([
        import("rehype-highlight").then(mod => mod.default),
        import("remark-gfm").then(mod => mod.default),
    ]);
    if (!rawPost) {
        return null;
    }

    const post = await bundleMDX({
        source: rawPost.content ?? "",
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
        ...rawPost,
        content: post.code,
    } satisfies ProjectPost;
}
