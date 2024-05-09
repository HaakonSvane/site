import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import { useMemo } from "react";
import { postComponents } from "~/lib/postComponents";
import { getProject } from "~/lib/server/projects.server";
import { JsonErrorResponsePayload } from "~/lib/utility/errorResponse";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const projectSlug = params.project;
    if (!projectSlug)
        throw json<JsonErrorResponsePayload>(
            {
                message: "Bad request",
                details: "The server could not parse the provided URL parameters as a slug",
            },
            { status: 400 },
        );
    try {
        const project = await getProject(projectSlug);
        if (!project) {
            throw json<JsonErrorResponsePayload>(
                {
                    message: "Project not found",
                    details:
                        "The project you are looking for does not exist, but maybe it will in the future?",
                },
                { status: 404 },
            );
        }
        return json(project);
    } catch (error) {
        throw json<JsonErrorResponsePayload>(
            {
                message: "Server error",
                details: "An error occurred while trying to retrieve the project",
                error: error instanceof Error ? error : undefined,
            },
            { status: 500 },
        );
    }
};

export default function Project() {
    const project = useLoaderData<typeof loader>();
    const Component = useMemo(() => getMDXComponent(project.description), [project.description]);
    return (
        <Container className="flex flex-1 flex-col gap-y-8">
            <div className="flex flex-row gap-x-4 items-center">
                {project.leadImage?.url && (
                    <img
                        src={project.leadImage.url}
                        alt={project.leadImage?.title ?? "Project image"}
                        className="w-16 h-16"
                    />
                )}
                <Typography.Heading className="text-4xl font-bold">
                    {project.title}
                </Typography.Heading>
            </div>
            <Component components={postComponents} />
        </Container>
    );
}
