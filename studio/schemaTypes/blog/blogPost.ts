import { defineField, defineType } from "sanity";

export const blogPostSchema = defineType({
    name: "blogPost",
    title: "Blog Post",
    description: "A post for a blog",
    type: "document",
    fields: [
        defineField({
            name: "title",
            description: "Text to display as the title of the post",
            title: "Title",
            type: "string",
            validation: rule => rule.required().error("A title is required"),
        }),
        defineField({
            name: "synopsis",
            description: "A short description of the post",
            title: "Synopsis",
            type: "text",
            validation: rule =>
                rule.required().error("A short description of the post is required"),
        }),
        defineField({
            name: "slug",
            description: "The URL slug for the post",
            title: "Slug",
            type: "slug",
            validation: rule => rule.required().error("A slug is required"),
        }),
        defineField({
            name: "image",
            description: "The image to display as the lead image",
            title: "Lead image",
            type: "image",
        }),
        defineField({
            name: "body",
            description: "The main content of the post",
            title: "Body",
            type: "markdown",
        }),
    ],
});
