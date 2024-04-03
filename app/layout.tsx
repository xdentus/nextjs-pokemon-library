import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon Library',
  description:
    'Pokemon Library made in Next.js using PokeAPI, only 1st gen pokemons',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex min-h-screen flex-col items-center p-24 gap-14">
            <div className="items-center justify-center font-mono text-sm lg:flex">
              <Link href="/">
                <h2 className="text-2xl text-bold">Pokemon Library</h2>
              </Link>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
