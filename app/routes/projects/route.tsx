import { MetaFunction } from "@remix-run/node";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Haakon Svane - Projects" },
        { name: "description", content: "Haakon Svane's projects" },
    ];
};

const Projects = () => {
    return (
        <div>
            <Typography.Paragraph>Projects</Typography.Paragraph>
        </div>
    );
};

export default Projects;
