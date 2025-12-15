'use client'

import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
      <Select value={currentCategory || undefined} onValueChange={(value) => applyCategory(value)}>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Todas as categorias" />
        </SelectTrigger>
        <SelectContent>
          {categoryNames.map((name) => (
            <SelectItem key={name} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="button" variant="ghost" size="sm" className="text-xs" onClick={handleClear}>
        Limpar
      </Button>
    </div>
  )
}
