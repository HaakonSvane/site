import { defineField, defineType } from "sanity";

export const projectPostSchema = defineType({
    name: "projectPost",
    title: "Project Post",
    description: "A post for a project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: rule => rule.required().error("A title is required"),
        }),
        defineField({
            name: "synopsis",
            title: "Synopsis",
            type: "text",
            validation: rule =>
                rule.required().error("A short description of the post is required"),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: rule => rule.required().error("A slug is required"),
        }),
        defineField({
            name: "project",
            title: "Project",
            type: "reference",
            to: [{ type: "project" }],
            validation: rule => rule.required().error("A project is required"),
        }),
        defineField({
            name: "image",
            title: "Lead image",
            type: "image",
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "markdown",
        }),
    ],
});
