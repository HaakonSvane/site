import { MetaFunction, defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { gql } from "~/graphql";
import { Project } from "~/graphql/graphql";
import { qlQuery } from "~/lib/server/graphql.server";
import { Container } from "~/ui/Container";
import { SiteItemCard, SiteItemCardSkeleton } from "~/ui/SiteItem";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Projects | Haakon Svane" },
        { name: "description", content: "Haakon Svane's projects" },
    ];
};

const GET_PROJECTS_QUERY = gql(`
    query GetProjectsQuery {
        projectCollection {
            items {
                title
                slug
                title
                synopsis
                leadImage {
                    url
                    title
                }
            }
        }
    }
`);

export const loader = async () => {
    const getPosts = async () => {
        const queryResponse = await qlQuery(GET_PROJECTS_QUERY, {});
        const posts = (queryResponse.data?.projectCollection?.items ?? []).filter(
            Boolean,
        ) as Project[];
        return posts;
    };

    return defer({ posts: getPosts() });
};

const Projects = () => {
    const { posts } = useLoaderData<typeof loader>();

    return (
        <Container className="flex flex-1 flex-col gap-y-8">
            <Typography.Serif className="text-4xl font-bold">Projects</Typography.Serif>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Suspense
                    fallback={Array(3)
                        .fill(0)
                        .map(index => (
                            <SiteItemCardSkeleton key={index} />
                        ))}
                >
                    <Await resolve={posts}>
                        {posts =>
                            posts.map(project => (
                                <SiteItemCard
                                    key={project.slug}
                                    title={project.title ?? "[Missing title]"}
                                    description={project.synopsis ?? "[Missing synopsis]"}
                                    slug={project.slug!}
                                    leadImage={
                                        project.leadImage
                                            ? {
                                                  url: project.leadImage.url!,
                                                  title: project.leadImage.title ?? undefined,
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

export default Projects;
