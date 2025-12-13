export type ArticleCategory = {
  label: string
  isMain?: boolean
}

export const articleCategories: ArticleCategory[] = [
  { label: 'Noticias', isMain: true },
  { label: 'Turismo', isMain: true },
  { label: 'Hotelaria', isMain: true },
  { label: 'Viagens', isMain: true },
  { label: 'Evento', isMain: true },
  { label: 'Gastronomia', isMain: true },
  { label: 'Historias' },
  { label: 'Tecnologia' },
  { label: 'Economia' },
  { label: 'Life Style' },
  { label: 'Paraguai' },
  { label: 'Argentina' },
  { label: 'Saude' },
  { label: 'Moda' },
  { label: 'Acao Social' },
]

export const mainArticleCategoryLabels: string[] = articleCategories
  .filter((category) => category.isMain)
  .map((category) => category.label)
