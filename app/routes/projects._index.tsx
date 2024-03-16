import { MetaFunction } from "@remix-run/node";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Haakon Svane - Projects" },
        { name: "description", content: "Haakon Svane's projects" },
    ];
};

const Projects = () => {
    return (
        <Container>
            <Typography.Paragraph>Projects</Typography.Paragraph>
        </Container>
    );
};

export default Projects;
