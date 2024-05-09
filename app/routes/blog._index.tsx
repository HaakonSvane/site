import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "~/graphql";
import { BlogPost } from "~/graphql/graphql";
import { qlQuery } from "~/lib/server/graphql.server";
import { Card } from "~/ui/Card";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Blog posts | Haakon Svane" },
        { name: "description", content: "Haakon Svane's blog posts" },
    ];
};

const GET_POSTS_QUERY = gql(`
    query GetPostsQuery {
        blogPostCollection {
            items {
                title
                slug
                synopsis
                leadImage {
                    title
                    url
                }
            }
        }
    }
`);

export const loader = async () => {
    const queryResult = await qlQuery(GET_POSTS_QUERY, {});
    const posts = (queryResult.data?.blogPostCollection?.items ?? []) as BlogPost[];
    return json(posts);
};

const Blog = () => {
    const posts = useLoaderData<typeof loader>();
    return (
        <Container className="flex flex-1 flex-col gap-y-4">
            <Typography.Heading className="text-3xl font-bold">Blog posts</Typography.Heading>
            {posts.map(post => (
                <Card.Link to={`${post.slug}`} key={post.slug}>
                    <Card.Header>
                        <Card.Title>{post.title}</Card.Title>
                        <div className="flex flex-row gap-x-4">
                            {post.leadImage?.url && (
                                <img
                                    src={post.leadImage.url}
                                    alt={post.leadImage.title ?? "Blog post image"}
                                    className="w-12 h-12"
                                />
                            )}
                            <Card.Description>{post.synopsis}</Card.Description>
                        </div>
                    </Card.Header>
                </Card.Link>
            ))}
        </Container>
    );
};

export default Blog;
