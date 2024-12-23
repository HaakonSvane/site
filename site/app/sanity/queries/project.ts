import { defineQuery } from "groq";

export const GET_PROJECTS_QUERY = defineQuery(
    `*[_type == 'project'] | order(_createdAt desc) {'slug': slug.current, title, synopsis, 'image': image.asset->url}`,
);

export const GET_PROJECT_QUERY = defineQuery(
    `*[_type == 'project' && slug.current == $projectSlug][0] | {title, synopsis, description, 'image': image.asset->url, siteUrl, githubUrl }`,
);

export const GET_PROJECT_POSTS_QUERY = defineQuery(
    `*[_type == 'projectPost' && $projectSlug == project->slug.current] | order(_createdAt desc) {title, synopsis, 'slug': slug.current, 'image': image.asset->url}`,
);

export const GET_PROJECT_POST_QUERY = defineQuery(
    `*[_type == 'projectPost' && $projectSlug == project->slug.current && $projectPostSlug == slug.current][0] | {title, synopsis, body, 'image': image.asset->url}`,
);
