import { Suspense } from "react";
import { Await, MetaFunction, useLoaderData } from "react-router";
import { getProjects } from "~/lib/server/projects.server";
import { Container } from "~/ui/Container";
import { SiteItemCard, SiteItemCardSkeleton } from "~/ui/SiteItem";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Projects | Haakon Svane" },
        { name: "description", content: "Haakon Svane's projects" },
    ];
};

export const loader = async () => {
    return { projects: getProjects() };
};

const Projects = () => {
    const { projects } = useLoaderData<typeof loader>();
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
                    <Await resolve={projects}>
                        {projects =>
                            projects.map(project => (
                                <SiteItemCard
                                    key={project.slug}
                                    title={project.title ?? "[Missing title]"}
                                    description={project.synopsis ?? "[Missing synopsis]"}
                                    slug={project.slug!}
                                    leadImage={
                                        project.image
                                            ? {
                                                  url: project.image.url,
                                                  title: "Project image",
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
