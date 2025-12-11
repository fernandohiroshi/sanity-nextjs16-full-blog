import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

export type SideMenuLink = {
  href: string
  label: string
}

export type SideMenuSocialLink = {
  href: string
  label: string
  icon: typeof Instagram
}

export const mainLinks: SideMenuLink[] = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
]

export const socialLinks: SideMenuSocialLink[] = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'X (Twitter)', icon: Twitter },
  { href: '#', label: 'Facebook', icon: Facebook },
]
