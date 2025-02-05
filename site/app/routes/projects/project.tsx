import { Github, Globe } from "lucide-react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import { useMemo } from "react";
import { LoaderFunctionArgs, MetaFunction, data, useLoaderData } from "react-router";
import { postComponents } from "~/lib/postComponents";
import { getProject, getProjectPosts } from "~/lib/server/projects.server";
import { JsonErrorResponsePayload } from "~/lib/utility/errorResponse";
import { Badge } from "~/ui/Badge";
import { Container } from "~/ui/Container";
import { SiteItemCard } from "~/ui/SiteItem";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [
        { title: `${data?.project?.title ?? "Project"} | Haakon Svane` },
        {
            name: "description",
            content: `The ${data?.project?.title ?? "UNNAMED"} project of Haakon Svane`,
        },
    ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const projectSlug = params.project;
    if (!projectSlug)
        throw data<JsonErrorResponsePayload>(
            {
                message: "Bad request",
                details: "The server could not parse the provided URL parameters as a slug",
            },
            { status: 400 },
        );
    try {
        const projectPromise = getProject(projectSlug);
        const projectPostsPromise = getProjectPosts(projectSlug);
        const [project, projectPosts] = await Promise.allSettled([
            projectPromise,
            projectPostsPromise,
        ]);

        if (
            !project ||
            project.status === "rejected" ||
            !projectPosts ||
            projectPosts.status === "rejected"
        ) {
            throw data<JsonErrorResponsePayload>(
                {
                    message: "Project not found",
                    details:
                        "The project you are looking for does not exist, but maybe it will in the future?",
                },
                { status: 404 },
            );
        }
        return {
            project: project.value,
            projectPosts: projectPosts.value,
        };
    } catch (error) {
        throw data<JsonErrorResponsePayload>(
            {
                message: "Server error",
                details: "An error occurred while trying to retrieve the project",
                error: error instanceof Error ? error : undefined,
            },
            { status: 500 },
        );
    }
};

export default function Project() {
    const { project, projectPosts } = useLoaderData<typeof loader>();
    // const navigation = useNavigation(); // TODO: use this to tap in to the loading state of the page / next page
    const Component = useMemo(
        () => getMDXComponent(project?.description ?? ""),
        [project?.description],
    );

    return (
        <Container className="flex flex-1 flex-col gap-y-8">
            <Typography.Serif className="text-4xl font-bold">{project?.title}</Typography.Serif>
            <div className="flex flex-row gap-x-4 items-center">
                {/* {project.leadImage?.url && (
                    <img
                        src={project.leadImage.url}
                        alt={project.leadImage?.title ?? "Project image"}
                        className="w-16 h-16"
                    />
                )} */}
                {project?.siteUrl && (
                    <Badge.Link LeadingIcon={Globe} title="Project site" href={project?.siteUrl} />
                )}
                {project?.githubUrl && (
                    <Badge.Link LeadingIcon={Github} title="GitHub" href={project?.githubUrl} />
                )}
            </div>
            <Component components={postComponents} />
            <div className="flex flex-col gap-y-4">
                <Typography.Serif className="text-2xl font-bold">Project posts</Typography.Serif>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectPosts.map(post => (
                        <SiteItemCard
                            key={post.slug}
                            title={post.title ?? "[Missing title]"}
                            description={post.synopsis ?? "[Missing synopsis]"}
                            slug={post.slug!}
                            leadImage={
                                post.image
                                    ? {
                                          url: post.image.url,
                                          title: "Project post image",
                                      }
                                    : undefined
                            }
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}
