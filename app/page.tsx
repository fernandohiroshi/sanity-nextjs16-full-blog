import HeroSection from '@/components/sections/hero'
import TicketSection from '@/components/sections/ticket'
import AboutSection from '@/components/sections/about'
import ArticlesSection from '@/components/sections/articles'

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
