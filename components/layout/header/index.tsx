import { ThemeToggle } from '@/components/theme-toggle'
import { SideMenu } from '@/components/layout/header/side-menu'
import Link from 'next/link'
import { AuroraText } from '@/components/ui/aurora-text'

const Header = () => {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 py-4 bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-3xl"
    >
      <div className="max flex items-center justify-between">
        <Link
          href="/#top"
          className="group relative transition-all duration-300 focus-visible:outline-none 
             focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
        >
          <AuroraText className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
            Silvana Canal
          </AuroraText>

          <span
            className="absolute left-0 -bottom-1 h-[2px] w-0 bg-linear-to-r 
               from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"
          ></span>
        </Link>

        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <SideMenu />
        </nav>
      </div>
    </header>
  )
}

export default Header
