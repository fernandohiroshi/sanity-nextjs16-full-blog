import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import WhatsAppFloatButton from '@/components/whatsapp-button'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Blog - Agência de Notícias de Foz do Iguaçu',
  description:
    'Cobertura de notícias, turismo, cultura e cotidiano na região de Foz do Iguaçu e Tríplice Fronteira.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ScrollToTop />
          {children}
          <Footer />
          <WhatsAppFloatButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
