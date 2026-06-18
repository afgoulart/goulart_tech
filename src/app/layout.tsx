import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://goulart.tech'),
  title: 'Goulart Consultoria em TI — Tecnologia que move o seu negócio',
  description:
    'Consultoria em tecnologia da informação: desenvolvimento de software, arquitetura de sistemas, cloud e transformação digital para empresas que querem crescer.',
  keywords: [
    'consultoria em TI',
    'desenvolvimento de software',
    'transformação digital',
    'cloud',
    'arquitetura de sistemas',
    'Goulart Consultoria',
  ],
  authors: [{ name: 'Goulart Consultoria em TI LTDA' }],
  openGraph: {
    title: 'Goulart Consultoria em TI',
    description:
      'Tecnologia que move o seu negócio. Software sob medida, cloud e transformação digital.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
