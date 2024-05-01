import { readFile, readdir } from "./fs.server";
import path from "path";
import { bundleMDX } from "./mdx.server";

type MetaFile = {
    name: string;
    synopsis: string;
    image?: string;
    startDate: Date;
};

type ProjectPostFrontmatter = {
    tags: string[];
    title: string[];
}

export async function getProjects() {
    const dirPath = path.join(process.cwd(), "app", "projects");

    const allProjectPaths = await readdir(dirPath, {
        withFileTypes: true,
    });

    const projects = await Promise.all(
        allProjectPaths.map(async dirent => {
            const metaPath = path.join(dirPath, dirent.name, "_meta.mdx");
            const [file] = await Promise.all([readFile(metaPath)]);
            const { frontmatter } = await bundleMDX<MetaFile>({
                source: file.toString(),
                cwd: process.cwd(),
            });
            const resolvedImagePath = frontmatter.image
                ? path.join(dirent.name, frontmatter.image)
                : undefined;

            return {
                slug: dirent.name,
                meta: { ...frontmatter, image: resolvedImagePath },
            };
        }),
    );
    return projects;
}

export async function getProject(projectSlug: string) {
    const projectPath = path.join(process.cwd(), "app", "projects", projectSlug);
    const metaPath = path.join(projectPath, "_meta.mdx");
    const allDirents = await readdir(projectPath, {withFileTypes: true});
    const [source] = await Promise.all([readFile(metaPath, "utf-8")]);
    const [rehypeHighlight, remarkGfm] = await Promise.all([
        import("rehype-highlight").then(mod => mod.default),
        import("remark-gfm").then(mod => mod.default),
    ]);
    const { code, frontmatter } = await bundleMDX<MetaFile>({
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
    const resolvedImagePath = frontmatter.image
        ? path.join(projectPath, frontmatter.image)
        : undefined;
    return {
        code,
        frontmatter: {
            ...frontmatter,
            image: resolvedImagePath,
        } satisfies MetaFile,
    };
}

export async function getProjectPost(projectSlug: string, postSlug: string) {
    const filePath = path.join(process.cwd(), "app", "projects", projectSlug, postSlug);

    const [source] = await Promise.all([readFile(filePath, "utf-8")]);
    const [rehypeHighlight, remarkGfm] = await Promise.all([
        import("rehype-highlight").then(mod => mod.default),
        import("remark-gfm").then(mod => mod.default),
    ]);
    const { code, frontmatter } = await bundleMDX<ProjectPostFrontmatter>({
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
    const resolvedImagePath = frontmatter.image
        ? path.join(projectPath, frontmatter.image)
        : undefined;
    return {
        code,
        frontmatter: {
            ...frontmatter,
        } satisfies MetaFile,
        metaFile:
    };
}
