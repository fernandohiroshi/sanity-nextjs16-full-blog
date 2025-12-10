import { ThemeToggle } from '@/components/theme-toggle'
import { SideMenu } from '@/components/layout/header/side-menu'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 bg-neutral-100/5 dark:bg-neutral-900/5 backdrop-blur-3xl">
      <div className="max flex items-center justify-between">
        <Link
          href="/"
          className="h-8 w-8 rounded-full bg-linear-to-r from-emerald-400 to-sky-500 
             opacity-80 shadow-sm
             transition-all duration-300 ease-out
             hover:opacity-100 hover:shadow hover:scale-110 hover:-rotate-6
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        />
        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <SideMenu />
        </nav>
      </div>
    </header>
  )
}

export default Header
