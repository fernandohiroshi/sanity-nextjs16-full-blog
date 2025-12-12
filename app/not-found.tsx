import Link from 'next/link'
import { GiButterfly } from 'react-icons/gi'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max text-center space-y-4">
        <div className="flex justify-center">
          <GiButterfly className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          Página não encontrada
        </h1>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          A página que você tentou acessar não existe ou foi movida. Volte para a página inicial
          para continuar navegando.
        </p>
        <div className="pt-2">
          <Button asChild>
            <Link href="/">Voltar para a home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
