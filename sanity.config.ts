import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {dataset, projectId} from './environment'
import {documentInternationalization} from '@sanity/document-internationalization'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'FR', title: 'French'},
        {id: 'EN', title: 'English'},
        {id: 'AR', title: 'Arabic'},
      ],
      schemaTypes: ['navBar', 'project', 'contact'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
