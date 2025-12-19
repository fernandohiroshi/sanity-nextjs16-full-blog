export type ArticleCategory = {
  label: string
  isMain?: boolean
}

export const articleCategories: ArticleCategory[] = [
  { label: 'Notícias', isMain: true },
  { label: 'Turismo', isMain: true },
  { label: 'Hotelaria', isMain: true },
  { label: 'Viagens', isMain: true },
  { label: 'Evento', isMain: true },

  { label: 'Gastronomia' },
  { label: 'Opinião' },
  { label: 'Histórias' },

  { label: 'Destinos' },
  { label: 'Experiências' },

  { label: 'Cultura' },
  { label: 'Entretenimento' },
  { label: 'Esporte' },

  { label: 'Economia' },
  { label: 'Negócios' },
  { label: 'Empreendedorismo' },
  { label: 'Tecnologia' },
  { label: 'Inovação' },

  { label: 'Life Style' },
  { label: 'Moda' },
  { label: 'Saúde' },
  { label: 'Comportamento' },

  { label: 'Sociedade' },
  { label: 'Ação Social' },
  { label: 'Sustentabilidade' },
  { label: 'Natureza' },

  { label: 'Educação' },

  { label: 'Foz do Iguaçu' },
  { label: 'Brasil' },
  { label: 'Argentina' },
  { label: 'Paraguai' },
  { label: 'Internacional' },
]

export const mainArticleCategoryLabels: string[] = articleCategories
  .filter((category) => category.isMain)
  .map((category) => category.label)
