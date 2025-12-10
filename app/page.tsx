import HeroSection from '@/components/sections/hero/hero'
import TicketSection from '@/components/sections/ticket/ticket'
import AboutSection from '@/components/sections/about/about'
import ArticlesSection from '@/components/sections/articles/articles'

export default function Home() {
  return (
    <main className="max">
      <HeroSection />
      <ArticlesSection />
      <TicketSection />
      <AboutSection />
    </main>
  )
}
