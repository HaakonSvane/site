import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import { useMemo } from "react";
import { getPost } from "~/lib/server/blogPost.server";
import { JsonErrorResponsePayload, isJsonErrorResponse } from "~/lib/utility/errorResponse";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const slug = params.slug;
    if (!slug)
        throw json<JsonErrorResponsePayload>(
            {
                message: "Bad request",
                details: "The server could not parse the provided URL parameters as a slug",
            },
            { status: 400 },
        );
    try {
        const post = await getPost(slug);
        if (!post) {
            throw json<JsonErrorResponsePayload>(
                {
                    message: "Post not found",
                    details: "The post you are looking for does not exist",
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
                details: "An error occurred while trying to retrieve the post",
                error: error instanceof Error ? error : undefined,
            },
            { status: 500 },
        );
    }
};

const BlogPost = () => {
    const { frontmatter, code } = useLoaderData<typeof loader>();
    const Component = useMemo(() => getMDXComponent(code), [code]);
    return (
        <Container>
            <Component
                components={{
                    h1: props => <Typography.Heading className="text-3xl font-bold" {...props} />,
                    h2: props => <Typography.Heading className="text-2xl font-bold" {...props} />,
                    h3: props => <Typography.Heading className="text-xl font-bold" {...props} />,
                    p: props => <Typography.Paragraph {...props} />,
                }}
            />
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
    } else {
        errorTitle = "An error occurred";
        errorDescription = "An error occurred somewhere in the blog post page";
    }
    return (
        <Container className="flex gap-x-4 flex-row justify-center align-center">
            <div className="flex flex-col justify-center">
                <Typography.Heading className="text-6xl font-bold">{":("}</Typography.Heading>
            </div>

            <div className="flex flex-col gap-2">
                <Typography.Heading className="text-3xl font-bold">{errorTitle}</Typography.Heading>
                <Typography.Paragraph>{errorDescription}</Typography.Paragraph>
            </div>

            <div className="flex flex-col justify-center">
                <Typography.Heading className="text-6xl font-bold">{"):"}</Typography.Heading>
            </div>
        </Container>
    );
};

export default BlogPost;
