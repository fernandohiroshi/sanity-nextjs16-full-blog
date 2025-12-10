'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowUp } from 'lucide-react'

import { mainLinks, categoryLinks, socialLinks } from './data'

const Footer = () => {
  return (
    <footer className="mt-10 border-t bg-neutral-100/60 py-9 text-sm dark:bg-neutral-900/60">
      <div className="max flex flex-col gap-9 md:flex-row md:items-start md:justify-between">
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

        <div className="flex flex-1 flex-col gap-7 md:flex-row md:justify-between">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Navegação
            </p>
            <div className="space-y-2">
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
            <div className="space-y-2">
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
      </div>

      <Separator className="my-6" />

      <div className="max flex items-center justify-between gap-4 text-[11px] text-muted-foreground">
        <p>© {new Date().getFullYear()} Silvana Canal. Todos os direitos reservados.</p>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          asChild
          aria-label="Voltar ao topo"
        >
          <Link href="#top">
            <ArrowUp className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
