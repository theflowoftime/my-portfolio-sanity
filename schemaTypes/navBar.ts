import {defineType, defineField} from 'sanity'

export const navBar = defineType({
  name: 'navBar',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
      description: 'Title to identify this navigation document in the CMS',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Navigation Title',
              type: 'string',
              description: 'The text shown for this link in the navigation.',
            }),
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'string',
              description: 'Unique identifier for the section (e.g., "home", "works")',
            }),
            defineField({
              name: 'path',
              title: 'Path',
              type: 'string',
              description: 'URL or in-page hash for the link target',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'path',
            },
          },
        },
      ],
      description: 'Add, edit, or reorder navigation links',
    }),
  ],
})
