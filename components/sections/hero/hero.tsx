'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import Link from 'next/link'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { AuroraText } from '@/components/ui/aurora-text'

const images = [
  {
    href: 'https://unsplash.com/photos/aerial-view-of-buildings-during-daytime-3ewkNkfJj2k',
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Cidade vista de cima',
  },
  {
    href: 'https://unsplash.com/photos/mountain-covered-snow-under-star-digital-wallpaper-Jztmx9yqjBw',
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Montanhas à noite',
  },
  {
    href: 'https://unsplash.com/photos/two-person-standing-on-field-while-looking-at-mountain-1Z2niiBPg5A',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    alt: 'Campo e montanhas',
  },
  {
    href: 'https://unsplash.com/photos/gray-concrete-building-near-body-of-water-during-daytime-WgGJjGN4_ck',
    src: 'https://images.unsplash.com/photo-1438109491414-7198515b166b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Cidade à beira mar',
  },
]

const HeroSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-5xl space-y-4">
        <div className="px-4 pt-4 sm:px-0 sm:pt-6 space-y-1 text-center">
          <AuroraText className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Silvana Canal
          </AuroraText>
          <p className="text-[11px] sm:text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Marketing e assessoria de imprensa
          </p>
        </div>

        <div className="overflow-hidden rounded-xl">
          <Carousel
            className="relative w-full"
            plugins={[plugin.current]}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="cursor-pointer">
                  <Link href={image.href} target="_blank" rel="noreferrer noopener">
                    <div className="relative aspect-16/6">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                        sizes="(min-width: 1024px) 900px, 100vw"
                      />
                    </div>
                  </Link>
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

export default HeroSection
