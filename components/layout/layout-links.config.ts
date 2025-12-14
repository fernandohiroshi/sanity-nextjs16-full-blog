import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

export type NavLink = {
  href: string
  label: string
}

export type SocialLink = {
  href: string
  label: string
  icon: typeof Instagram
}

export const mainLinks: NavLink[] = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contato', label: 'Contato' },
]

export const categoryLinks: NavLink[] = [
  { href: '/blog?category=Noticias', label: 'Notícias' },
  { href: '/blog?category=Turismo', label: 'Turismo' },
  { href: '/blog?category=Hotelaria', label: 'Hotelaria' },
  { href: '/blog?category=Viagens', label: 'Viagens' },
  { href: '/blog?category=Evento', label: 'Evento' },
  { href: '/blog?category=Gastronomia', label: 'Gastronomia' },
]

export const socialLinks: SocialLink[] = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'X (Twitter)', icon: Twitter },
  { href: '#', label: 'Facebook', icon: Facebook },
]
