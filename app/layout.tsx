import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atualíssima • Perfumes Importados Lattafa',
  description: 'Loja de perfumes importados Lattafa no Brasil.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
