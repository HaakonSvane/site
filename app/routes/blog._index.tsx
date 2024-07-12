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
    const posts = (queryResult.data?.blogPostCollection?.items ?? []).filter(Boolean) as BlogPost[];
    return json(posts);
};

const Blog = () => {
    const posts = useLoaderData<typeof loader>();
    return (
        <Container className="flex flex-1 flex-col gap-y-8">
            <Typography.Serif className="text-4xl font-bold">Blog posts</Typography.Serif>
            <div className="grid grid-cols-1 gap-6">
                {posts.map(post => (
                    <Card.Link to={`${post.slug}`} key={post.slug}>
                        <Card.Header>
                            <Card.Title>{post.title}</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <Card.ContentRow>
                                {post.leadImage?.url && (
                                    <img
                                        src={post.leadImage.url}
                                        alt={post.leadImage.title ?? "Blog post image"}
                                        className="w-12 h-12"
                                    />
                                )}
                                <Card.Description className="text-card-foreground">
                                    {post.synopsis}
                                </Card.Description>
                            </Card.ContentRow>
                        </Card.Content>
                    </Card.Link>
                ))}
            </div>
        </Container>
    );
};

export default Blog;
