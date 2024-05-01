import { LoaderFunctionArgs, json } from "@remix-run/node";
import { getProject } from "~/lib/server/projects.server";
import { JsonErrorResponsePayload } from "~/lib/utility/errorResponse";

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
        const post = await getProject(projectSlug);
        if (!post) {
            throw json<JsonErrorResponsePayload>(
                {
                    message: "Project not found",
                    details:
                        "The project you are looking for does not exist, but maybe it will in the future?",
                },
                { status: 404 },
            );
        }
        const { frontmatter, code } = post;
        return json({ frontmatter, code });
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
