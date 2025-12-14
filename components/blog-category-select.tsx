'use client'

import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

export type BlogCategorySelectProps = {
  categoryNames: string[]
  currentCategory: string
}

export const BlogCategorySelect: React.FC<BlogCategorySelectProps> = ({
  categoryNames,
  currentCategory,
}) => {
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

    const qs = params.toString()
    router.push(qs ? `/blog?${qs}` : '/blog')
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    applyCategory(event.target.value)
  }

  const handleClear = () => {
    const params = new URLSearchParams(searchParams.toString())

    params.delete('category')
    params.delete('q')
    params.delete('page')

    const qs = params.toString()
    router.push(qs ? `/blog?${qs}` : '/blog')
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
