'use client'

import { useSearchParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export type BlogCategoryFilterProps = {
  categoryNames: string[]
  currentCategory: string
}

export const BlogCategoryFilter = ({ categoryNames, currentCategory }: BlogCategoryFilterProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const applyCategory = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set('category', value)
    } else {
      params.delete('category')
    }

    params.delete('page')

    const queryString = params.toString()
    router.push(queryString ? `/blog?${queryString}` : '/blog')
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    applyCategory(event.target.value)
  }

  const handleClear = () => {
    applyCategory('')
  }

  return (
    <div className="flex items-center gap-2">
      <select
        name="category"
        defaultValue={currentCategory}
        onChange={handleChange}
        className="h-9 rounded-md border bg-background px-3 text-xs sm:text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <option value="">Todas as categorias</option>
        {categoryNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <Button type="button" variant="ghost" size="sm" className="text-xs" onClick={handleClear}>
        Limpar
      </Button>
    </div>
  )
}
