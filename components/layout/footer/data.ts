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
  { href: '#sobre', label: 'Sobre' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
]

export const categoryLinks: FooterLink[] = [
  { href: '#turismo', label: 'Turismo' },
  { href: '#hoteis', label: 'Hotéis' },
  { href: '#noticias', label: 'Notícias' },
  { href: '#eventos', label: 'Eventos' },
]

export const socialLinks: FooterSocialLink[] = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'X (Twitter)', icon: Twitter },
  { href: '#', label: 'Facebook', icon: Facebook },
]
