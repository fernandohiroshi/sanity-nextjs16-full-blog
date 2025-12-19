'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import type { HeroAd } from '@/lib/hero'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export type HeroCarouselProps = {
  ads: HeroAd[]
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ ads }) => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  if (!ads.length) return null

  return (
    <section className="w-full flex justify-center">
      <div className="max space-y-4 w-full">
        <div className="overflow-hidden rounded-xl mt-4">
          <Carousel
            className="relative w-full"
            plugins={[plugin.current]}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {ads.map((ad, index) => (
                <CarouselItem key={index} className="cursor-pointer">
                  <a href={ad.href} target="_blank" rel="noreferrer noopener">
                    <div className="relative aspect-16/4">
                      <Image
                        src={ad.image}
                        alt="Clique para ver mais"
                        fill
                        className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                        sizes="(min-width: 1024px) 900px, 100vw"
                        quality={100}
                        priority
                      />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="hidden sm:inline-flex absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
