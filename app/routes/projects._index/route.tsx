import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "~/graphql";
import { Project } from "~/graphql/graphql";
import { qlQuery } from "~/lib/server/graphql.server";
import { Card } from "~/ui/Card";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Projects | Haakon Svane" },
        { name: "description", content: "Haakon Svane's projects" },
    ];
};

const GET_PROJECTS_QUERY = gql(`
    query GetProjectsQuery {
        projectCollection {
            items {
                title
                slug
                title
                synopsis
                leadImage {
                    url
                    title
                }
            }
        }
    }
`);

export const loader = async () => {
    const queryResponse = await qlQuery(GET_PROJECTS_QUERY, {});
    const posts = (queryResponse.data?.projectCollection?.items ?? []).filter(Boolean) as Project[];
    return json(posts);
};

const Projects = () => {
    const projects = useLoaderData<typeof loader>();

    return (
        <Container className="flex flex-1 flex-col gap-y-8">
            <Typography.Serif className="text-4xl font-bold">Projects</Typography.Serif>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map(project => (
                    <Card.Link to={`${project.slug}`} key={project.slug}>
                        <Card.Header className="flex gap-2">
                            <Card.Title>{project.title}</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <Card.ContentRow>
                                {project.leadImage?.url && (
                                    <img
                                        src={project.leadImage.url}
                                        alt={project.leadImage.title ?? "Project image"}
                                        className="w-12 h-12"
                                    />
                                )}
                                <Card.Description className="text-card-foreground">
                                    {project.synopsis}
                                </Card.Description>
                            </Card.ContentRow>
                        </Card.Content>
                    </Card.Link>
                ))}
            </div>
        </Container>
    );
};

export default Projects;
