'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export type BlogSearchFormProps = React.ComponentProps<'form'> & {
  defaultValue?: string
}

export const BlogSearchForm: React.FC<BlogSearchFormProps> = ({
  defaultValue,
  className,
  ...formProps
}) => {
  return (
    <form action="/blog" method="get" {...formProps} className={cn(className)}>
      <div className="flex h-9 items-center rounded-md border bg-background px-2">
        <Input
          type="search"
          name="q"
          defaultValue={defaultValue}
          placeholder="Buscar artigos..."
          className="h-7 flex-1 border-0 bg-transparent dark:bg-transparent p-0 text-xs sm:text-sm shadow-none focus-visible:ring-0 focus-visible:outline-none"
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className="ml-1 h-7 w-7 shrink-0 text-muted-foreground hover:text-foreground"
        >
          <Search className="h-4 w-4" />
          <span className="sr-only">Buscar</span>
        </Button>
      </div>
    </form>
  )
}
