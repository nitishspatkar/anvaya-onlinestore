import type { Metadata } from 'next'
import { Noto_Serif, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { BottomNav } from '@/components/bottom-nav'
import { Footer } from '@/components/footer'
import { PreLaunchFab } from '@/components/pre-launch-fab'
import { QuickAddToast } from '@/components/quick-add-toast'
import './globals.css'

const notoSerif = Noto_Serif({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Anvaya — Botanical essences from India',
  description:
    'A quiet store for roots, oils, and botanicals—sourced with care from growers and small makers across India.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-surface font-body text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navigation />
        <div className="pb-28 pt-20 md:pb-0 md:pt-24">{children}</div>
        <Footer />
        <BottomNav />
        <PreLaunchFab />
        <QuickAddToast />
        <Analytics />
      </body>
    </html>
  )
}
