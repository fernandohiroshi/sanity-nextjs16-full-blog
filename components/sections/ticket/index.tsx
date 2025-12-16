'use client'

import { Button } from '@/components/ui/button'

const TicketSection = () => {
  return (
    <section className="w-full pb-16">
      <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl">
        <div className="relative aspect-16/6 w-full">
          <video
            className="h-full w-full object-cover opacity-80"
            src="/ticket.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/20" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 py-6 sm:px-6 sm:py-10">
          <div className="pointer-events-auto max-w-2xl text-center text-background space-y-3 sm:space-y-4 md:space-y-6">
            <p className="hidden md:block text-sm font-medium tracking-[0.3em] uppercase text-white/90">
              Foz do Iguaçu • experiências
            </p>
            <h2 className="text-sm sm:text-base md:text-2xl lg:text-3xl font-semibold leading-snug text-white">
              Ingressos para as aventuras em <br /> Foz do Iguaçu?
            </h2>
            <div className="flex justify-center pt-1 sm:pt-2">
              <Button
                asChild
                size="sm"
                className="rounded-full px-4 sm:px-6 md:px-8 text-xs sm:text-sm"
              >
                <a target="_blank" href="https://ingressos.parquedasaves.com.br/">
                  Saiba mais
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TicketSection
