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
            <article>
                <Component
                    components={{
                        h1: props => (
                            <Typography.Heading
                                className="[&:not(:first-child)]:mt-6 scroll-m-20 border-b pb-2 mb-6 text-4xl font-bold tracking-tight lg:text-5xl"
                                {...props}
                            />
                        ),
                        h2: props => (
                            <Typography.Heading
                                className="[&:not(:first-child)]:mt-6 scroll-m-20 pb-0 mb-0 text-3xl font-extrabold tracking-tight first:mt-0"
                                {...props}
                            />
                        ),
                        h3: props => (
                            <Typography.Heading
                                className="[&:not(:first-child)]:mt-6 scroll-m-20 text-2xl font-semibold tracking-tight"
                                {...props}
                            />
                        ),
                        h4: props => (
                            <Typography.Heading
                                className="[&:not(:first-child)]:mt-6 leading-7"
                                {...props}
                            />
                        ),
                        blockquote: props => (
                            <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
                        ),
                        p: props => <Typography.Paragraph className="leading-7" {...props} />,
                        table: props => <table className="w-full" {...props} />,
                        tr: props => <tr className="odd:bg-gray-100" {...props} />,
                        th: props => <th className="m-0 border-t p-0 even:bg-muted" {...props} />,
                        li: props => <li className="my-4 ml-6 list-disc [&>li]:mt-2" {...props} />,
                        code: props => (
                            <code
                                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
                                {...props}
                            />
                        ),
                        small: props => (
                            <small className="text-sm font-medium leading-none" {...props} />
                        ),
                    }}
                />
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
        errorDescription = "An error occurred somewhere in the blog post page";
    }
    return (
        <Container className="flex h-full gap-x-4 flex-row justify-center align-center">
            <div className="flex flex-col justify-center">
                <Typography.Heading className="text-6xl font-bold whitespace-nowrap">
                    {":("}
                </Typography.Heading>
            </div>

            <div className="flex flex-col gap-2 justify-center">
                <Typography.Heading className="text-3xl font-bold">{errorTitle}</Typography.Heading>
                <Typography.Paragraph>{errorDescription}</Typography.Paragraph>
            </div>

            <div className="flex flex-col justify-center whitespace-nowrap">
                <Typography.Heading className="text-6xl font-bold">{"):"}</Typography.Heading>
            </div>
        </Container>
    );
};

export default BlogPost;
