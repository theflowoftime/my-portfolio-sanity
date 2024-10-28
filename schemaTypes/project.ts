import {defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'description', type: 'text', title: 'Description'},
    {name: 'link', type: 'url', title: 'Project Link'},
    {name: 'image', type: 'image', title: 'Image'},
  ],
})
