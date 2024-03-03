import { readFile, readdir } from "./fs.server";
import path from "path";
import { bundleMDX } from "./mdx.server";

// The frontmatter can be any set of key values
// But that's not especially useful to use
// So we'll declare our own set of properties that we are going to expect to exist
type Frontmatter = {
    title?: string;
    description?: string;
};

/**
 * Get the React component, and frontmatter JSON for a given slug
 * @param slug
 * @returns
 */
export async function getPost(slug: string) {
    const filePath = path.join(process.cwd(), "app", "blog-posts", slug + ".mdx");
    const [source] = await Promise.all([readFile(filePath, "utf-8")]);
    const [rehypeHighlight, remarkGfm] = await Promise.all([
        import("rehype-highlight").then(mod => mod.default),
        import("remark-gfm").then(mod => mod.default),
    ]);
    const post = await bundleMDX<Frontmatter>({
        source,
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
        ...post,
        frontmatter: {
            ...post.frontmatter,
        },
    };
}

/**
 * Get all frontmatter for all posts
 * @returns
 */
export async function getPosts() {
    const filePath = path.join(process.cwd(), "app", "blog-posts");

    const postsPath = await readdir(filePath, {
        withFileTypes: true,
    });

    const posts = await Promise.all(
        postsPath.map(async dirent => {
            const postPath = path.join(filePath, dirent.name);
            const [file] = await Promise.all([readFile(postPath)]);
            const { frontmatter } = await bundleMDX<Frontmatter>({
                source: file.toString(),
                cwd: process.cwd(),
            });

            return {
                slug: dirent.name.replace(/\.mdx/, ""),
                frontmatter,
            };
        }),
    );
    return posts;
}
