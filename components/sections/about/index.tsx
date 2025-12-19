'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const AboutSection = () => {
  return (
    <section id="sobre" className="w-full flex justify-center scroll-mt-32">
      <div className="max grid gap-8 lg:grid-cols-2 items-center">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800">
          <Image
            src="/about-img.webp"
            alt="Silhueta de uma pessoa sorrindo, representando a equipe do Blog"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </div>

        <div className="space-y-4 md:space-y-5">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-foreground uppercase">
            Sobre
          </p>
          <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify">
            <p>
              O Blog é uma agência de notícias independente baseada em Foz do Iguaçu, dedicada a
              contar as histórias que movem a Tríplice Fronteira. Aqui você encontra reportagens,
              bastidores e análises sobre turismo, cultura, economia local e o dia a dia de quem
              vive e visita a região.
            </p>
            <p>
              Nosso time reúne jornalistas e comunicadores apaixonados por informação de qualidade.
              Acompanhamos de perto o setor de turismo, hotelaria, gastronomia, eventos e os
              principais temas que influenciam a rotina de moradores e viajantes que passam por Foz
              do Iguaçu.
            </p>
            <p>
              Entre uma pauta e outra, buscamos destacar projetos, pessoas e iniciativas que
              transformam a cidade, sempre com olhar atento às boas histórias que merecem ser
              registradas. Das cataratas às periferias, dos grandes eventos às pequenas conquistas
              do cotidiano.
            </p>
            <p>
              A cada nova publicação, queremos aproximar você do que acontece aqui — seja por meio
              de artigos, coberturas especiais ou dicas para aproveitar melhor tudo o que a região
              oferece.
            </p>
          </div>

          <div className="flex justify-end">
            <Button
              asChild
              variant="outline"
              className="rounded-full px-5 py-2 text-xs sm:text-sm font-medium hover:bg-muted"
              size="sm"
            >
              <Link href="/blog">Ver notícias</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
