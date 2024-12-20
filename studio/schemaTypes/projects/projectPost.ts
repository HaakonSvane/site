import {defineField, defineType} from 'sanity'

export const projectPostSchema = defineType({
  name: 'projectPost',
  title: 'Project Post',
  description: 'A post for a project',
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
      name: 'image',
      title: 'Lead image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{type: 'project'}],
    }),
  ],
})
