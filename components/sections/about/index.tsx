'use client'

import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="sobre" className="w-full flex justify-center md:py-14 px-4 sm:px-6 lg:px-0">
      <div className="w-full max-w-5xl grid gap-8 lg:grid-cols-2 items-center">
        <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800">
          <Image
            src="https://plus.unsplash.com/premium_photo-1664297951506-135f601fefbb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Silhueta de uma mulher sorrindo, representando Silvana Canal"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 460px, 100vw"
          />
        </div>

        <div className="space-y-4 md:space-y-5">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-foreground uppercase">
            Sobre
          </p>
          <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <p>
              Eu garanto que você tem uma história pra contar. Sobre a sua vida, dos seus filhos ou
              aquela viagem incrível que nunca mais irá esquecer. Então, também quero ter a honra:
              deixa eu te contar um pouco da minha história.
            </p>
            <p>
              Sou jornalista de formação e há mais de três décadas atuo em comunicação e marketing.
              Passei pelo jornalismo diário impresso, rádio e televisão. Nos últimos 15 anos,
              mergulhei de vez na assessoria de imprensa para o setor de turismo e hotelaria em Foz
              do Iguaçu.
            </p>
            <p>
              Essa bagagem me levou por empresas públicas e privadas, como Secretaria Municipal de
              Turismo, Iguassu Convention &amp; Visitors Bureau, hotéis, restaurantes e diferentes
              ministérios de governos do Brasil e Paraguai. Na Tríplice Fronteira, o leque se abriu
              ainda mais, com projetos também na Argentina e no Paraguai.
            </p>
            <p>
              Dentro dessa experiência, ajudei executivos do turismo a desenvolver marketing pessoal
              nas mídias tradicionais e digitais, organizei eventos em diversas áreas e, mais
              recentemente, navego pelo marketing comercial.
            </p>
            <p>
              Viu só quantas mudanças ao longo de uma vida? E você, o que tem de bom para me contar?
              Estou à disposição para ouvir. Vamos tomar um café?
            </p>
          </div>

          <p className="text-xs sm:text-sm font-medium">Silvana Canal</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
