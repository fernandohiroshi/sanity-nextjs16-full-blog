'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Menu } from 'lucide-react'
import { GiButterfly } from 'react-icons/gi'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet'
import { mainLinks, socialLinks } from '@/components/layout-links.config'
import { BlogSearchForm } from '@/components/blog-search-form'

export const SideMenu = () => {
  const [open, setOpen] = useState(false)

  const handleNavigate = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col gap-6 px-5 py-6 sm:px-6 sm:py-7">
        <SheetHeader className="items-start text-left space-y-2">
          <SheetTitle className="text-base sm:text-lg font-semibold">Navegar</SheetTitle>
          <SheetDescription className="text-xs text-muted-foreground">
            Explore conteúdos do Blog, descubra novas histórias e encontre maneiras de entrar em
            contato.
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
                onClick={handleNavigate}
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>

          <div className="space-y-2.5">
            <Separator className="my-2" />
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Buscar no blog
            </p>
            <BlogSearchForm className="w-full" onSubmit={handleNavigate} />
          </div>
        </nav>

        <div className="space-y-2.5 text-sm">
          <p className="text-xs font-semibold text-muted-foreground">Redes sociais</p>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={handleNavigate}
                asChild
              >
                <Link href={social.href} aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-auto space-y-3 pt-3 sm:pt-4 text-xs">
          <div className="flex justify-center">
            <Link
              href="http://localhost:3333"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir painel CMS"
            >
              <GiButterfly className="h-6 w-6 text-primary" />
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
