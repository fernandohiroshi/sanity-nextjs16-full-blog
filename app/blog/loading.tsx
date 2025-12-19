import HeroSection from '@/components/hero'
import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingBlogPage() {
  return (
    <main className="max py-4 space-y-10">
      <HeroSection />

      <header className="space-y-4 px-4 max-w-7xl mx-auto">
        <div className="space-y-3 text-center md:text-left">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-6 w-28 md:w-32" />
          </div>

          <Skeleton className="h-4 w-full max-w-xl mx-auto md:mx-0" />
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-3 w-32" />
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pt-2">
          <Skeleton className="h-9 w-52" />
          <Skeleton className="h-9 w-full max-w-md md:ml-auto" />
        </div>
      </header>

      <section className="space-y-6 px-4 max-w-7xl mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden p-0 flex h-full flex-col border rounded-lg bg-muted/40"
            >
              <Skeleton className="w-full aspect-16/10" />
              <div className="flex flex-1 flex-col gap-2 pt-2 pb-3 px-3">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
