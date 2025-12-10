'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import Link from 'next/link'
import Image from 'next/image'
import { adsArticles } from './data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const HeroSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  return (
    // HERO SECTION ROOT WRAPPER
    <section className="w-full flex justify-center">
      <div className="w-full max-w-5xl space-y-4">
        {/* HERO EYEBROW / TAGLINE TEXT */}
        <div className="px-4 pt-4 sm:px-0 sm:pt-6 text-center">
          <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Marketing e assessoria de imprensa
          </p>
        </div>

        {/* HERO CAROUSEL WRAPPER */}
        <div className="overflow-hidden rounded-xl">
          <Carousel
            className="relative w-full"
            plugins={[plugin.current]}
            onMouseLeave={plugin.current.reset}
          >
            {/* HERO CAROUSEL ITEMS FROM adsArticles (ONLY href & image USED) */}
            <CarouselContent>
              {adsArticles.map((ad, index) => (
                <CarouselItem key={index} className="cursor-pointer">
                  <Link href={ad.href} target="_blank" rel="noreferrer noopener">
                    <div className="relative aspect-16/6">
                      <Image
                        src={ad.image}
                        alt="Clique para ver mais"
                        fill
                        className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                        sizes="(min-width: 1024px) 900px, 100vw"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* CAROUSEL NAVIGATION BUTTONS */}
            <CarouselPrevious className="hidden sm:inline-flex absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="hidden sm:inline-flex absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
