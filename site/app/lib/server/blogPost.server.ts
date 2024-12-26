import { client } from "~/sanity/client";
import { GET_BLOG_POST_QUERY, GET_BLOG_POSTS_QUERY } from "~/sanity/queries";
import { bundleMDX } from "./mdx.server";

/**
 * Get the React component, and frontmatter JSON for a given slug
 * @param slug
 * @returns
 */
export async function getBlogPost(slug: string) {
    const queryResponse = await client.fetch(GET_BLOG_POST_QUERY, { blogPostSlug: slug });
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
        content: post.code,
    };
}

export async function getBlogPosts() {
    const queryResponse = await client.fetch(GET_BLOG_POSTS_QUERY);
    return queryResponse;
}
