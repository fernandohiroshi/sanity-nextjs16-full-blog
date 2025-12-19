import { Instagram, Twitter, Facebook } from 'lucide-react'
import { mainArticleCategoryLabels } from '@/components/articles/articles.config'

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
  { href: '#', label: 'X (Twitter)', icon: Twitter },
  { href: '#', label: 'Facebook', icon: Facebook },
]
