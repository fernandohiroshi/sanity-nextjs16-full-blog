import {defineField, defineType} from 'sanity'
import {articleCategories} from '../../components/articles/articles.config'

export const articleType = defineType({
  name: 'post',
  title: 'Postagens',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Título principal do artigo, como ele será exibido no site.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description:
        'Endereço amigável do artigo (URL). Normalmente é gerado automaticamente a partir do título.',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document?.title,
    }),

    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      description: 'Imagem de destaque do artigo (máximo 3MB). Será usada na capa e nas listagens.',
      validation: (Rule) =>
        Rule.required().custom(async (image, context) => {
          const ref = (image as any)?.asset?._ref
          if (!ref) return true

          const client = context.getClient({apiVersion: '2023-08-01'})
          const asset = await client.fetch('*[_id == $id][0]{size}', {id: ref})

          if (!asset?.size) return true

          const maxBytes = 3 * 1024 * 1024 // 3MB
          return asset.size <= maxBytes || 'A imagem deve ter no máximo 3MB.'
        }),
    }),

    defineField({
      name: 'excerpt',
      title: 'Conteúdo',
      type: 'array',
      description:
        'Conteúdo principal do artigo. Você pode adicionar texto, imagens e vídeos incorporados.',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
        {
          type: 'file',
          title: 'Vídeo',
          options: {accept: 'video/*'},
        },
        {
          type: 'object',
          name: 'videoEmbed',
          title: 'Vídeo Incorporado',
          fields: [{name: 'url', type: 'url', title: 'URL do vídeo'}],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      title: 'Data',
      type: 'datetime',
      description: 'Data de publicação do artigo. Usada para ordenação e exibição no site.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: articleCategories.map((category) => ({
          title: category.label,
          value: category.label,
        })),
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
    },
    prepare({title, date, media}) {
      let formatted = ''

      if (date) {
        const d = new Date(date)
        formatted = d.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      }

      return {
        title,
        subtitle: formatted,
        media,
      }
    },
  },
})
