import { Suspense } from "react";
import { Await, MetaFunction, useLoaderData } from "react-router";
import { getBlogPosts } from "~/lib/server/blog.server";
import { Container } from "~/ui/Container";
import { SiteItemCard, SiteItemCardSkeleton } from "~/ui/SiteItem";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Blog posts | Haakon Svane" },
        { name: "description", content: "Haakon Svane's blog posts" },
    ];
};

export const loader = async () => {
    return { posts: getBlogPosts() };
};

const Blog = () => {
    const { posts } = useLoaderData<typeof loader>();
    return (
        <Container className="flex flex-1 flex-col gap-y-8 py-12 md:py-16">
            <div className="flex flex-col gap-2">
                <Typography.Serif className="text-4xl font-bold">Blog posts</Typography.Serif>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <Suspense
                    fallback={
                        <>
                            {Array(3)
                                .fill(0)
                                .map((_, index) => (
                                    <SiteItemCardSkeleton key={index} />
                                ))}
                        </>
                    }
                >
                    <Await resolve={posts}>
                        {posts =>
                            posts.map(post => (
                                <SiteItemCard
                                    key={post.slug}
                                    title={post.title ?? "[Missing title]"}
                                    description={post.synopsis ?? "[Missing synopsis]"}
                                    slug={post.slug!}
                                    leadImage={
                                        post.image
                                            ? {
                                                  title: "Blog post image",
                                                  url: post.image.url,
                                              }
                                            : undefined
                                    }
                                />
                            ))
                        }
                    </Await>
                </Suspense>
            </div>
        </Container>
    );
};

export default Blog;
