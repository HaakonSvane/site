import { MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { getPosts } from "~/lib/server/blogPost.server";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Haakon Svane - Blog posts" },
        { name: "description", content: "Haakon Svane's blog posts" },
    ];
};

export const loader = async () => {
    const posts = await getPosts();
    return json(posts);
};

const Blog = () => {
    const posts = useLoaderData<typeof loader>();
    const navigate = useNavigate();

    return (
        <Container className="flex flex-1 flex-col gap-y-4">
            <Typography.Heading className="text-3xl font-bold">Blog posts</Typography.Heading>
            {posts.map(post => (
                <div
                    role="link"
                    key={post.slug}
                    tabIndex={0}
                    onKeyUp={e =>
                        (e.key === "Enter" || e.key === " ") && navigate(`/blog/${post.slug}`)
                    }
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    className="flex flex-col cursor-pointer hover:brightness-200 dark:hover:brightness-50 gap-y-2 p-4 rounded-xl border border-text-light dark:border-text-dark transition-colors focus-visible:ring-offset-2"
                >
                    <Typography.Heading className="text-2xl font-semibold">
                        {post.frontmatter.title}
                    </Typography.Heading>
                    <Typography.Paragraph>{post.frontmatter.description}</Typography.Paragraph>
                </div>
            ))}
        </Container>
    );
};

export default Blog;
