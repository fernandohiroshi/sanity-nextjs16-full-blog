import {defineField, defineType} from 'sanity'
import {articleCategories} from '../../components/sections/articles/articles.config'

export const articleType = defineType({
  name: 'post',
  title: 'Postagens',
  type: 'document',
  fields: [
    // TITLE
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // SLUG
    defineField({
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document?.title,
    }),

    // IMAGE
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),

    // EXCERPT
    defineField({
      name: 'excerpt',
      title: 'Conteúdo',
      type: 'array',
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

    // DATE
    defineField({
      name: 'date',
      title: 'Data',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    // CATEGORY
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
