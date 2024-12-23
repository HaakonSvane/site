import { client } from "~/sanity/client";
import { bundleMDX } from "./mdx.server";
import {
    GET_PROJECT_POST_QUERY,
    GET_PROJECT_POSTS_QUERY,
    GET_PROJECT_QUERY,
    GET_PROJECTS_QUERY,
} from "~/sanity/queries";

export async function getProject(projectSlug: string) {
    const queryResponse = await client.fetch(GET_PROJECT_QUERY, { projectSlug });
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
    const queryResponse = await client.fetch(GET_PROJECT_POST_QUERY, {
        projectSlug,
        projectPostSlug: postSlug,
    });
    const rawPost = queryResponse.data?.projectCollection?.items
        .at(0)
        ?.postsCollection?.items.at(0) as ProjectPost | undefined;
    const [rehypeHighlight, rehypeMathjax, remarkGfm, remarkMath] = await Promise.all([
        import("rehype-highlight").then(mod => mod.default),
        import("rehype-mathjax").then(mod => mod.default),
        import("remark-gfm").then(mod => mod.default),
        import("remark-math").then(mod => mod.default),
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
            options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm, remarkMath];
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypeHighlight,
                rehypeMathjax,
            ];
            return options;
        },
    });

    return {
        ...rawPost,
        content: post.code,
    } satisfies ProjectPost;
}

export async function getProjects() {
    const queryResponse = await client.fetch(GET_PROJECTS_QUERY);
    console.log("GOT QUERY RESPONSE", queryResponse, "FROM", GET_PROJECTS_QUERY);
    return queryResponse;
}

export async function getProjectPosts(projectSlug: string) {
    const queryResponse = await client.fetch(GET_PROJECT_POSTS_QUERY, { projectSlug });
    return queryResponse;
}
