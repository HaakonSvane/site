import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import { useMemo } from "react";
import { postComponents } from "~/lib/postComponents";
import { getProjectPost } from "~/lib/server/projects.server";
import { JsonErrorResponsePayload, isJsonErrorResponse } from "~/lib/utility/errorResponse";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { slug, project } = params;
    if (!slug || !project)
        throw json<JsonErrorResponsePayload>(
            {
                message: "Bad request",
                details: "The server could not parse the provided URL parameters as a slug",
            },
            { status: 400 },
        );
    try {
        const post = await getProjectPost(project, slug);
        if (!post) {
            throw json<JsonErrorResponsePayload>(
                {
                    message: "Post not found",
                    details: "The post you are looking for does not exist",
                },
                { status: 404 },
            );
        }
        return json(post);
    } catch (error) {
        throw json<JsonErrorResponsePayload>(
            {
                message: "Server error",
                details: "An error occurred while trying to retrieve the post",
                error: error instanceof Error ? error : undefined,
            },
            { status: 500 },
        );
    }
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [
        { title: `${data?.title ?? "Project post"} | Haakon Svane` },
        { name: "description", content: "Personal site for Haakon Svane" },
    ];
};

const ProjectPost = () => {
    const { content } = useLoaderData<typeof loader>();
    const Component = useMemo(() => getMDXComponent(content), [content]);

    console.log("GOT HERE");
    return (
        <Container>
            <article>
                <Component components={postComponents} />
            </article>
        </Container>
    );
};

export const ErrorBoundary = () => {
    const error = useRouteError();
    let errorTitle: string;
    let errorDescription: string | undefined;
    if (isJsonErrorResponse(error)) {
        errorTitle = error.data.message;
        errorDescription = error.data.details;
        if (error.data.error?.message) {
            errorDescription += `\n: ${error.data.error.message}`;
        }
    } else {
        errorTitle = "An error occurred";
        errorDescription = "An error occurred somewhere in the project post page";
    }
    return (
        <Container className="flex h-full gap-x-4 flex-row justify-center align-center">
            <div className="flex flex-col justify-center">
                <Typography.Serif className="text-6xl font-bold whitespace-nowrap">
                    {":("}
                </Typography.Serif>
            </div>

            <div className="flex flex-col gap-2 justify-center">
                <Typography.Serif className="text-3xl font-bold">{errorTitle}</Typography.Serif>
                <Typography.Sans>{errorDescription}</Typography.Sans>
            </div>

            <div className="flex flex-col justify-center whitespace-nowrap">
                <Typography.Serif className="text-6xl font-bold">{"):"}</Typography.Serif>
            </div>
        </Container>
    );
};

export default ProjectPost;
