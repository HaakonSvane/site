import {defineField, defineType} from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Project',
  description: 'A project that I have worked on',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'synopsis',
      title: 'Synopsis',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Lead image',
      type: 'image',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Project site URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
  ],
})
