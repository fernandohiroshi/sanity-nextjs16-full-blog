import {FileText, Megaphone, Users} from 'lucide-react'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {ptBRLocale} from '@sanity/locale-pt-br'

export default defineConfig({
  name: 'default',
  title: 'Silvana Canal',

  projectId: 'v0cenb9f',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Dashboard')
          .items([
            S.documentTypeListItem('post').title('Postagens').icon(FileText),
            S.documentTypeListItem('hero').title('Anúncio').icon(Megaphone),
            S.documentTypeListItem('partner').title('Parceiros').icon(Users),
          ]),
    }),
    ptBRLocale(),
  ],

  schema: {
    types: schemaTypes,
  },
})
