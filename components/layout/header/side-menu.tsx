'use client'

import Link from 'next/link'

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

const mainLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
]

const categoryLinks = [
  { href: '#turismo', label: 'Turismo' },
  { href: '#noticias', label: 'Notícias' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#gastronomia', label: 'Gastronomia' },
  { href: '#hoteis', label: 'Hotéis' },
]

export const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-6 px-5 py-6 sm:px-6 sm:py-7">
        <SheetHeader className="items-start text-left space-y-2">
          <SheetTitle className="text-base sm:text-lg font-semibold">Navegar</SheetTitle>
          <SheetDescription className="text-xs text-muted-foreground">
            Explore conteúdos, conheça mais sobre a Silvana e entre em contato.
          </SheetDescription>
        </SheetHeader>

        <nav className="space-y-3.5 text-sm">
          <div className="space-y-2.5">
            {mainLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>

          <div className="space-y-2.5">
            <Separator className="my-2" />
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Categorias
            </p>
            {categoryLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </nav>

        <div className="space-y-2.5 text-sm">
          <p className="text-xs font-semibold text-muted-foreground">Redes sociais</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
              <Link href="#" aria-label="X (Twitter)">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t pt-3 sm:pt-4 text-xs">
          <span className="text-muted-foreground">Tema</span>
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
