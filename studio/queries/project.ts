import { defineQuery } from "groq";

export const getProjectsQuery = defineQuery(
    `*[_type == 'project'] | order(_createdAt desc) {title, synopsis, 'image': image.asset->url}`,
);

export const getProjectQuery = defineQuery(
    `*[_type == 'project' && slug.current == $projectSlug][0] | {title, synopsis, description, 'image': image.asset->url, siteUrl, githubUrl }`,
);

export const getProjectBlogPostsQuery = defineQuery(
    `*[_type == 'projectPost' && $projectSlug == project->slug.current] | order(_createdAt desc) {title, synopsis, 'slug': slug.current, 'image': image.asset->url}`,
);

export const getProjectBlogPostQuery = defineQuery(
    `*[_type == 'projectPost' && $projectSlug == project->slug.current && $projectPostSlug == slug.current][0] | {title, synopsis, body, 'image': image.asset->url}`,
);
