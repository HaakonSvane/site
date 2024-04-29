import { LoaderFunctionArgs, json } from "@remix-run/node";
import { getPost } from "~/lib/server/blogPost.server";
import { JsonErrorResponsePayload } from "~/lib/utility/errorResponse";

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
