import { MetaFunction, defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { getBlogPosts } from "~/lib/server/blogPost.server";
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
    return defer({ posts: getBlogPosts() });
};

const Blog = () => {
    const { posts } = useLoaderData<typeof loader>();
    return (
        <Container className="flex flex-1 flex-col gap-y-8">
            <Typography.Serif className="text-4xl font-bold">Blog posts</Typography.Serif>
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
                                        post.leadImage
                                            ? {
                                                  url: post.leadImage.url!,
                                                  title: post.leadImage.title ?? undefined,
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
