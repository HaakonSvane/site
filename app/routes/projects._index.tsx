import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProjects } from "~/lib/server/projects.server";
import { Card } from "~/ui/Card";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Projects | Haakon Svane" },
        { name: "description", content: "Haakon Svane's projects" },
    ];
};

export const loader = async () => {
    const posts = await getProjects();
    return json(posts);
};

const Projects = () => {
    const projects = useLoaderData<typeof loader>();
    return (
        <Container>
            <Typography.Paragraph>Projects</Typography.Paragraph>
            <div className="grid grid-cols-2 gap-6">
                {projects.map(project => (
                    <Card.Link key={project.name}>
                        <Card.Header>
                            <Card.Title>{project.name}</Card.Title>
                            <div className="flex flex-row gap-x-4">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-10 h-10"
                                    />
                                )}
                                <Card.Description>{project.synopsis}</Card.Description>
                            </div>
                        </Card.Header>
                    </Card.Link>
                ))}
            </div>
        </Container>
    );
};

export default Projects;
