import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {ptBRLocale} from '@sanity/locale-pt-br'

export default defineConfig({
  name: 'default',
  title: 'blog',

  projectId: 'v0cenb9f',
  dataset: 'production',

  plugins: [structureTool(), visionTool({defaultApiVersion: 'v2025-12-12'}), ptBRLocale()],

  schema: {
    types: schemaTypes,
  },
})
