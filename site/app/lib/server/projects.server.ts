import { client } from "~/sanity/client.server";
import {
    GET_PROJECT_POST_QUERY,
    GET_PROJECT_POSTS_QUERY,
    GET_PROJECT_QUERY,
    GET_PROJECTS_QUERY,
} from "~/sanity/queries";
import { sanityImage } from "~/sanity/image.server";

export async function getProject(projectSlug: string) {
    const queryResponse = await client.fetch(GET_PROJECT_QUERY, { projectSlug });
    return queryResponse ? { ...queryResponse } : null;
}

export async function getProjectPost(projectSlug: string, postSlug: string) {
    const queryResponse = await client.fetch(GET_PROJECT_POST_QUERY, {
        projectSlug,
        projectPostSlug: postSlug,
    });
    return queryResponse
        ? {
              ...queryResponse,
              image: queryResponse.image
                  ? { url: sanityImage(queryResponse.image).width(400).url() }
                  : null,
          }
        : null;
}

export async function getProjects() {
    const queryResponse = await client.fetch(GET_PROJECTS_QUERY);
    return queryResponse.map(project => ({
        ...project,
        image: project.image ? { url: sanityImage(project.image).width(200).url() } : null,
    }));
}

export async function getProjectPosts(projectSlug: string) {
    const queryResponse = await client.fetch(GET_PROJECT_POSTS_QUERY, { projectSlug });
    return queryResponse.map(post => ({
        ...post,
        image: post.image ? { url: sanityImage(post.image).width(200).url() } : null,
    }));
}
