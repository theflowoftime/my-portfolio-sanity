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
            {name: 'title', title: 'Link Title', type: 'string'},
            {name: 'path', title: 'Path', type: 'string'},
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
