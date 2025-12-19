'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Check, ChevronDown } from 'lucide-react'

import { SideMenu } from '@/components/header/side-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import { AuroraText } from '@/components/ui/aurora-text'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const categoryGroups: { title: string; items: string[] }[] = [
  {
    title: 'Destaques',
    items: ['Notícias', 'Evento'],
  },
  {
    title: 'Viagens & Turismo',
    items: ['Turismo', 'Viagens', 'Hotelaria', 'Destinos', 'Experiências'],
  },
  {
    title: 'Gastronomia',
    items: ['Gastronomia'],
  },
  {
    title: 'Cultura & Lazer',
    items: ['Cultura', 'Entretenimento', 'Esporte'],
  },
  {
    title: 'Negócios & Inovação',
    items: ['Economia', 'Negócios', 'Empreendedorismo', 'Tecnologia', 'Inovação'],
  },
  {
    title: 'Vida & Estilo',
    items: ['Life Style', 'Moda', 'Saúde', 'Comportamento'],
  },
  {
    title: 'Sociedade & Meio Ambiente',
    items: ['Sociedade', 'Ação Social', 'Sustentabilidade', 'Natureza'],
  },
  {
    title: 'Educação',
    items: ['Educação'],
  },
  {
    title: 'Regiões',
    items: ['Foz do Iguaçu', 'Brasil', 'Argentina', 'Paraguai', 'Internacional'],
  },
  {
    title: 'Opinião & Histórias',
    items: ['Opinião', 'Histórias'],
  },
]

const getCategoryHref = (label: string) => `/blog?category=${encodeURIComponent(label)}`

const Header = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string | null>(null)

  const handleSelectCategory = (label: string) => {
    setValue(null)
    setOpen(false)
    router.push(getCategoryHref(label))
  }

  return (
    <header
      id="top"
      className="sticky top-0 z-50 py-4 bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-3xl"
    >
      <div className="max flex items-center gap-4">
        <Link
          href="/#top"
          className="group relative transition-all duration-300 focus-visible:outline-none 
             focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        >
          <AuroraText className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
            Blog
          </AuroraText>

          <span
            className="absolute left-0 -bottom-1 h-[2px] w-0 bg-linear-to-r 
               from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:flex">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="min-w-[120px] justify-between"
                >
                  {value ?? 'Explorar Blog'}
                  <ChevronDown
                    className={cn(
                      'ml-2 h-4 w-4 opacity-70 transition-transform duration-200',
                      open ? 'rotate-180' : 'rotate-0',
                    )}
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[260px] p-0" align="end">
                <Command>
                  <CommandInput placeholder="Buscar categorias..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>Nenhuma categoria encontrada.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem
                        value="ver-todas"
                        onSelect={() => {
                          setValue(null)
                          setOpen(false)
                          router.push('/blog')
                        }}
                      >
                        Ver todas
                      </CommandItem>
                    </CommandGroup>
                    {categoryGroups.map((group) => (
                      <CommandGroup key={group.title} heading={group.title}>
                        {group.items.map((label) => (
                          <CommandItem
                            key={label}
                            value={label}
                            onSelect={() => handleSelectCategory(label)}
                          >
                            {label}
                            <Check
                              className={cn(
                                'ml-auto h-4 w-4',
                                value === label ? 'opacity-100' : 'opacity-0',
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <ThemeToggle />
          <SideMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
