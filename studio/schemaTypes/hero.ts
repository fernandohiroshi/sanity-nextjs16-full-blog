import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Anúncio',
  type: 'document',
  fields: [
    defineField({
      name: 'kind',
      title: 'Tipo de conteúdo',
      type: 'string',
      options: {
        list: [{title: 'Anúncio', value: 'ad'}],
        layout: 'radio',
        direction: 'horizontal',
      },
      description:
        'Escolha o tipo de conteúdo exibido na área de destaque (atualmente apenas anúncios externos).',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'adImage',
      title: 'Imagem do anúncio',
      type: 'image',
      options: {hotspot: true},
      hidden: ({document}) => document?.kind !== 'ad',
      description: 'Imagem usada quando a capa é um anúncio (máximo 2MB).',
      validation: (Rule) =>
        Rule.custom(async (value, context) => {
          if (context.document?.kind !== 'ad') return true

          if (!value) {
            return 'Imagem é obrigatória para anúncios'
          }

          const ref = (value as any)?.asset?._ref
          if (!ref) return 'Imagem é obrigatória para anúncios'

          const client = context.getClient({apiVersion: '2023-08-01'})
          const asset = await client.fetch('*[_id == $id][0]{size}', {id: ref})

          if (!asset?.size) return true

          const maxBytes = 2 * 1024 * 1024 // 2MB
          return asset.size <= maxBytes || 'A imagem do anúncio deve ter no máximo 2MB.'
        }),
    }),
    defineField({
      name: 'adUrl',
      title: 'URL externa do anúncio',
      type: 'url',
      hidden: ({document}) => document?.kind !== 'ad',
      description: 'Endereço para onde o usuário será levado ao clicar no anúncio.',
      validation: (Rule) =>
        Rule.uri({allowRelative: false}).custom((value, context) => {
          if (context.document?.kind === 'ad' && !value) {
            return 'URL é obrigatória para anúncios'
          }
          return true
        }),
    }),
  ],

  preview: {
    select: {
      kind: 'kind',
      adTitle: 'adUrl',
      adImage: 'adImage',
    },
    prepare(selection) {
      const {kind, adTitle, adImage} = selection

      return {
        title: kind === 'ad' ? 'Anúncio' : 'Destaque',
        subtitle: adTitle || '',
        media: adImage,
      }
    },
  },
})
