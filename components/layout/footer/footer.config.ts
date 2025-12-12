import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

export type FooterLink = {
  href: string
  label: string
}

export type FooterSocialLink = {
  href: string
  label: string
  icon: typeof Instagram
}

export const mainLinks: FooterLink[] = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contato', label: 'Contato' },
]

export const categoryLinks: FooterLink[] = [
  { href: '/blog?category=Turismo', label: 'Turismo' },
  { href: '/blog?category=Hotelaria', label: 'Hotéis' },
  { href: '/blog?category=Noticias', label: 'Notícias' },
  { href: '/blog?category=Evento', label: 'Eventos' },
]

export const socialLinks: FooterSocialLink[] = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'X (Twitter)', icon: Twitter },
  { href: '#', label: 'Facebook', icon: Facebook },
]
