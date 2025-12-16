import { Suspense } from 'react'

import HeroSection from '@/components/sections/hero'
import TicketSection from '@/components/sections/ticket'
import AboutSection from '@/components/sections/about'
import ArticlesSection from '@/components/sections/articles'
import { Skeleton } from '@/components/ui/skeleton'

export default function Home() {
  return (
    <main className="max">
      <HeroSection />
      <Suspense
        fallback={
          <section className="py-8 space-y-6">
            <div className="space-y-2 max-w-4xl mx-auto px-4">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-8 w-64" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-7xl mx-auto">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden p-0 flex h-full flex-col border rounded-lg bg-muted/40"
                >
                  <Skeleton className="w-full aspect-16/10" />
                  <div className="flex flex-1 flex-col gap-2 p-3">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-4 w-44" />
                    <Skeleton className="h-3 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        }
      >
        <ArticlesSection />
      </Suspense>
      <TicketSection />
      <AboutSection />
    </main>
  )
}
