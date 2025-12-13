import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Capa',
  type: 'document',
  fields: [
    defineField({
      name: 'kind',
      title: 'Tipo de capa',
      type: 'string',
      options: {
        list: [
          {title: 'Artigo', value: 'article'},
          {title: 'Anúncio', value: 'ad'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    }),

    // Campos para anúncio
    defineField({
      name: 'adImage',
      title: 'Imagem do anúncio',
      type: 'image',
      options: {hotspot: true},
      hidden: ({document}) => document?.kind !== 'ad',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.kind === 'ad' && !value) {
            return 'Imagem é obrigatória para anúncios'
          }
          return true
        }),
    }),
    defineField({
      name: 'adUrl',
      title: 'URL externa do anúncio',
      type: 'url',
      hidden: ({document}) => document?.kind !== 'ad',
      validation: (Rule) =>
        Rule.uri({allowRelative: false}).custom((value, context) => {
          if (context.document?.kind === 'ad' && !value) {
            return 'URL é obrigatória para anúncios'
          }
          return true
        }),
    }),

    // Campo para artigo (post existente)
    defineField({
      name: 'post',
      title: 'Artigo em destaque',
      type: 'reference',
      to: [{type: 'post'}],
      hidden: ({document}) => document?.kind !== 'article',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.kind === 'article' && !value) {
            return 'Selecione um artigo para a capa'
          }
          return true
        }),
    }),
  ],

  preview: {
    select: {
      kind: 'kind',
      title: 'post.title',
      media: 'post.image',
      adTitle: 'adUrl',
      adImage: 'adImage',
    },
    prepare(selection) {
      const {kind, title, media, adTitle, adImage} = selection

      if (kind === 'ad') {
        return {
          title: 'Anúncio',
          subtitle: adTitle || '',
          media: adImage,
        }
      }

      return {
        title: title || 'Artigo em destaque',
        subtitle: 'Artigo',
        media,
      }
    },
  },
})
