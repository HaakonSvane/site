import { MetaFunction } from "@remix-run/node";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Haakon Svane - Blog" },
        { name: "description", content: "Haakon Svane's blog posts" },
    ];
};

const Blog = () => {
    return (
        <div>
            <Typography.Paragraph>Blog</Typography.Paragraph>
        </div>
    );
};

export default Blog;
