'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowUp, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

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

const Footer = () => {
  return (
    <footer className="mt-10 border-t bg-neutral-100/60 py-8 text-sm dark:bg-neutral-900/60">
      <div className="max flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3 max-w-xs">
          <h2 className="text-base font-semibold tracking-tight">Silvana Canal</h2>
          <p className="text-xs text-muted-foreground">
            Histórias, reflexões e experiências em Foz do Iguaçu para inspirar jornadas mais
            conscientes.
          </p>

          <div className="space-y-1 text-xs">
            <p>
              <span className="font-medium">E-mail: </span>
              <a href="mailto:silvana@gmail.com" className="hover:underline">
                silvana@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">Endereço: </span>
              Foz do Iguaçu, Paraná – Brasil
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Navegação
            </p>
            <div className="space-y-1.5">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-xs hover:underline md:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Categorias
            </p>
            <div className="space-y-1.5">
              {categoryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-xs hover:underline md:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Redes sociais
            </p>
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
        </div>
      </div>

      <Separator className="my-6" />

      <div className="max flex items-center justify-between gap-4 text-[11px] text-muted-foreground">
        <p>© {new Date().getFullYear()} Silvana Canal. Todos os direitos reservados.</p>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  )
}

export default Footer
