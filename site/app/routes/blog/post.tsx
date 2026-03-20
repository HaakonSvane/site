import { LoaderFunctionArgs, MetaFunction, data, useLoaderData } from "react-router";
import ReactMarkdown from "react-markdown";
import { markdownComponents } from "~/lib/mdx/components";
import { remarkPlugins, rehypePlugins } from "~/lib/mdx/plugins";
import { getBlogPost } from "~/lib/server/blog.server";
import { JsonErrorResponsePayload } from "~/lib/utility/errorResponse";
import { PostErrorBoundary } from "~/ui/PostErrorBoundary";
import { Container } from "~/ui/Container";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const slug = params.slug;
    if (!slug)
        throw data<JsonErrorResponsePayload>(
            {
                message: "Bad request",
                details: "The server could not parse the provided URL parameters as a slug",
            },
            { status: 400 },
        );
    try {
        const post = await getBlogPost(slug);
        if (!post) {
            throw data<JsonErrorResponsePayload>(
                {
                    message: "Post not found",
                    details: "The post you are looking for does not exist",
                },
                { status: 404 },
            );
        }
        return post;
    } catch (error) {
        throw data<JsonErrorResponsePayload>(
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
        { title: `${data?.title ?? "Post"} | Haakon Svane` },
        { name: "description", content: "Personal site for Haakon Svane" },
    ];
};

const BlogPost = () => {
    const { body } = useLoaderData<typeof loader>();
    return (
        <Container className="py-12 md:py-16">
            <article className="mx-auto max-w-prose">
                <ReactMarkdown
                    components={markdownComponents}
                    remarkPlugins={remarkPlugins}
                    rehypePlugins={rehypePlugins}
                >
                    {body ?? ""}
                </ReactMarkdown>
            </article>
        </Container>
    );
};

export const ErrorBoundary = PostErrorBoundary;

export default BlogPost;
