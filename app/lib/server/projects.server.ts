import { readFile, readdir } from "./fs.server";
import path from "path";
import { bundleMDX } from "./mdx.server";

type MetaFile = {
    name: string;
    synopsis: string;
    image?: string;
    startDate: Date;
};

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
