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
        {id: 'fr', title: 'French'},
        {id: 'en', title: 'English'},
        {id: 'ar', title: 'Arabic'},
      ],
      schemaTypes: ['lesson'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
