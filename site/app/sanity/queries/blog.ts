import { defineQuery } from "groq";

export const GET_BLOG_POSTS_QUERY = defineQuery(
    `*[_type == 'blogPost'] | order(_createdAt desc) {title, synopsis, 'slug': slug.current, image}`,
);

export const GET_BLOG_POST_QUERY = defineQuery(
    `*[_type == 'blogPost' && slug.current == $blogPostSlug][0] | {title, synopsis, body, image}`,
);
