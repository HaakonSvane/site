import { gql } from "~/graphql";
import { BlogPost } from "~/graphql/graphql";
import { qlQuery } from "./graphql.server";
import { bundleMDX } from "./mdx.server";

const GET_POST_QUERY = gql(`
    query GetPostQuery($slug: String!) {
        blogPostCollection(where: { slug: $slug }) {
            items {
                title
                content
            }
        }
    }
`);

/**
 * Get the React component, and frontmatter JSON for a given slug
 * @param slug
 * @returns
 */
export async function getPost(slug: string) {
    const queryResponse = await qlQuery(GET_POST_QUERY, { slug: slug });
    const rawPost = queryResponse.data?.blogPostCollection?.items.at(0) as BlogPost | undefined;
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
    } satisfies BlogPost;
}
