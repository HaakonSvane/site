import { client } from "~/sanity/client.server";
import { bundleMDX } from "./mdx.server";
import {
    GET_PROJECT_POST_QUERY,
    GET_PROJECT_POSTS_QUERY,
    GET_PROJECT_QUERY,
    GET_PROJECTS_QUERY,
} from "~/sanity/queries";
import { sanityImage } from "~/sanity/image.server";

export async function getProject(projectSlug: string) {
    const queryResponse = await client.fetch(GET_PROJECT_QUERY, { projectSlug });
    const [rehypeHighlight, remarkGfm] = await Promise.all([
        import("rehype-highlight").then(mod => mod.default),
        import("remark-gfm").then(mod => mod.default),
    ]);

    const { code } = await bundleMDX({
        source: queryResponse?.intro ?? "",
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
        ...queryResponse,
        description: code,
    };
}

export async function getProjectPost(projectSlug: string, postSlug: string) {
    const queryResponse = await client.fetch(GET_PROJECT_POST_QUERY, {
        projectSlug,
        projectPostSlug: postSlug,
    });

    const [rehypeHighlight, rehypeMathjax, remarkGfm, remarkMath] = await Promise.all([
        import("rehype-highlight").then(mod => mod.default),
        import("rehype-mathjax").then(mod => mod.default),
        import("remark-gfm").then(mod => mod.default),
        import("remark-math").then(mod => mod.default),
    ]);

    const post = await bundleMDX({
        source: queryResponse?.body ?? "",
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
        ...queryResponse,
        image: queryResponse?.image
            ? { url: sanityImage(queryResponse.image).width(400).url() }
            : null,
        content: post.code,
    };
}

export async function getProjects() {
    const queryResponse = await client.fetch(GET_PROJECTS_QUERY);
    return queryResponse.map(project => ({
        ...project,
        image: project.image ? { url: sanityImage(project.image).width(200).url() } : null,
    }));
}

export async function getProjectPosts(projectSlug: string) {
    const queryResponse = await client.fetch(GET_PROJECT_POSTS_QUERY, { projectSlug });
    return queryResponse.map(post => ({
        ...post,
        image: post.image ? { url: sanityImage(post.image).width(200).url() } : null,
    }));
}
