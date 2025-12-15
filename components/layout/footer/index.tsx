'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowUp } from 'lucide-react'

import { mainLinks, socialLinks } from '@/components/layout/layout-links.config'
import { BlogSearchForm } from '@/components/blog-search-form'

const Footer = () => {
  return (
    <footer
      id="contato"
      className="mt-10 border-t bg-neutral-100/60 py-10 text-sm dark:bg-neutral-900/60"
    >
      <div className="max space-y-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div className="space-y-4 max-w-xs">
            <h2 className="text-base font-semibold tracking-tight">Contato</h2>
            <p className="text-xs text-muted-foreground">
              Histórias, reflexões e experiências em Foz do Iguaçu para inspirar jornadas mais
              conscientes.
            </p>

            <div className="space-y-1.5 text-xs">
              <p>
                <a href="mailto:silvana@gmail.com" className="hover:underline">
                  silvanacanal@email.com
                </a>
              </p>
              <p>Foz do Iguaçu, Paraná – Brasil</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Navegação
            </p>
            <div className="space-y-1.5 text-xs md:text-sm">
              {mainLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Buscar no blog
            </p>
            <BlogSearchForm className="w-full max-w-xs" />
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Redes sociais
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  asChild
                >
                  <Link href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <>
          <Separator className="my-2" />
          <div className="flex items-center justify-between gap-4 text-[11px] text-muted-foreground">
            <p>© {new Date().getFullYear()} Silvana Canal. Todos os direitos reservados.</p>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full"
              aria-label="Voltar ao topo"
              asChild
            >
              <Link href="/#top">
                <ArrowUp className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </>
      </div>
    </footer>
  )
}

export default Footer
