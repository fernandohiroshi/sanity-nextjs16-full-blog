import {defineField, defineType} from 'sanity'

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
        list: [
          {title: 'Noticias', value: 'Noticias'},
          {title: 'Turismo', value: 'Turismo'},
          {title: 'Hotelaria', value: 'Hotelaria'},
          {title: 'Viagens', value: 'Viagens'},
          {title: 'Evento', value: 'Evento'},
          {title: 'Gastronomia', value: 'Gastronomia'},
          {title: 'Historias', value: 'Historias'},
          {title: 'Tecnologia', value: 'Tecnologia'},
          {title: 'Economia', value: 'Economia'},
          {title: 'Life Style', value: 'Life Style'},
          {title: 'Paraguai', value: 'Paraguai'},
          {title: 'Argentina', value: 'Argentina'},
          {title: 'Saude', value: 'Saude'},
          {title: 'Moda', value: 'Moda'},
          {title: 'Acao Social', value: 'Acao Social'},
        ],
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
