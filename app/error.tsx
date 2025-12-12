'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import { Button } from '@/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="pt-BR">
      <body>
        <main className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max text-center space-y-4">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Ocorreu um erro
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Algo deu errado por aqui
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
              Tente novamente ou volte para a página inicial enquanto trabalhamos para resolver o
              problema.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  reset()
                }}
              >
                Tentar novamente
              </Button>
              <Button asChild>
                <Link href="/">Voltar para a home</Link>
              </Button>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
