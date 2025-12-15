import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'
import { mainArticleCategoryLabels } from '@/components/sections/articles/articles.config'

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
  { href: '/', label: 'Home' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contato', label: 'Contato' },
]

export const categoryLinks: NavLink[] = mainArticleCategoryLabels.map((label) => ({
  href: `/blog?category=${encodeURIComponent(label)}`,
  label,
}))

export const socialLinks: SocialLink[] = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'X (Twitter)', icon: Twitter },
  { href: '#', label: 'Facebook', icon: Facebook },
]
