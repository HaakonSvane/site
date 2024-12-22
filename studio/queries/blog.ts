import { defineQuery } from "groq";

export const getBlogPostsQuery = defineQuery(
    `*[_type == 'blogPost'] | order(_createdAt desc) {title, synopsis, slug, 'image': image.asset->}`,
);

export const getBlogPostQuery = defineQuery(
    `*[_type == 'blogPost' && slug.current == $blogPostSlug][0] | {title, synopsis, body, 'image': image.asset->}`,
);
