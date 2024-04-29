import { readFile, readdir } from "./fs.server";
import path from "path";

type MetaFile = {
    name: string;
    synopsis: string;
    image?: string;
    startDate: Date;
};

export async function getProjects() {
    const filePath = path.join(process.cwd(), "app", "projects");

    const projectPaths = await readdir(filePath, {
        withFileTypes: true,
    });

    const metas = await Promise.all(
        projectPaths.map(async dirent => {
            const metaPath = path.join(filePath, dirent.name, "_meta.json");
            const metaFile = await readFile(metaPath);
            const metaObj = JSON.parse(metaFile.toString());
            const resolvedImagePath = metaObj.image
                ? path.join(dirent.name, metaObj.image)
                : undefined;
            return {
                ...metaObj,
                startDate: new Date(metaObj.startDate),
                image: resolvedImagePath,
            } as MetaFile;
        }),
    );
    return metas;
}
