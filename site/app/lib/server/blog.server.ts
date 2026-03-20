import { client } from "~/sanity/client.server";
import { GET_BLOG_POST_QUERY, GET_BLOG_POSTS_QUERY } from "~/sanity/queries";
import { sanityImage } from "~/sanity/image.server";

export async function getBlogPost(slug: string) {
    const post = await client.fetch(GET_BLOG_POST_QUERY, { blogPostSlug: slug });
    return post
        ? {
              ...post,
              image: post.image ? { url: sanityImage(post.image).width(800).url() } : null,
          }
        : null;
}

export async function getBlogPosts() {
    const queryResponse = await client.fetch(GET_BLOG_POSTS_QUERY);
    return queryResponse.map(post => ({
        ...post,
        image: post.image ? { url: sanityImage(post.image).width(200).url() } : null,
    }));
}
