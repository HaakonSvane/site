import { MetaFunction } from "@remix-run/node";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Haakon Svane - Blog posts" },
        { name: "description", content: "Haakon Svane's blog posts" },
    ];
};

const Blog = () => {
    return (
        <Container className="flex flex-1">
            <Typography.Heading className="text-3xl font-bold">Blog posts</Typography.Heading>
        </Container>
    );
};

export default Blog;
