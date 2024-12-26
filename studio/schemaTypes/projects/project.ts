import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
    name: "project",
    title: "Project",
    description: "A project that I have worked on",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: rule => rule.required().error("A title is required"),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: rule => rule.required().error("A slug is required"),
        }),
        defineField({
            name: "synopsis",
            title: "Synopsis",
            type: "text",
            validation: rule =>
                rule.required().error("A short description of the project is required"),
        }),
        defineField({
            name: "intro",
            title: "Introduction text",
            type: "markdown",
        }),
        defineField({
            name: "image",
            title: "Lead image",
            type: "image",
        }),
        defineField({
            name: "siteUrl",
            title: "Project site URL",
            type: "url",
        }),
        defineField({
            name: "githubUrl",
            title: "GitHub URL",
            type: "url",
        }),
    ],
});
