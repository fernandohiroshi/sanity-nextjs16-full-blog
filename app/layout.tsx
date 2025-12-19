import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import WhatsAppFloatButton from '@/components/whatsapp-button'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Montserrat } from 'next/font/google'

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
