import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingPostPage() {
  return (
    <main className="py-10">
      <div className="max-w-7xl mx-auto">
        <article className="max-w-3xl mx-auto px-4 space-y-6">
          <header className="space-y-3">
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-40" />
          </header>

          <div className="relative w-full aspect-video overflow-hidden rounded-lg border bg-muted">
            <Skeleton className="w-full h-full" />
          </div>

          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-full" />
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}
