import {defineField, defineType} from 'sanity'

export const partnerType = defineType({
  name: 'partner',
  title: 'Parceiros',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Imagem do parceiro',
      type: 'image',
      options: {hotspot: true},
      description:
        'Logotipo ou imagem do parceiro (idealmente em boa resolução e fundo transparente).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL externa',
      type: 'url',
      description:
        'Endereço do site ou página do parceiro para onde o usuário será redirecionado ao clicar.',
      validation: (Rule) => Rule.uri({allowRelative: false}).required(),
    }),
  ],

  preview: {
    select: {
      url: 'url',
      image: 'image',
    },
    prepare({url, image}) {
      let subtitle = url || ''

      try {
        if (url) {
          const parsed = new URL(url)
          subtitle = parsed.hostname
        }
      } catch {
        // se não for uma URL válida, mantém o valor original
      }

      return {
        title: 'Parceiro',
        subtitle,
        media: image,
      }
    },
  },
})
