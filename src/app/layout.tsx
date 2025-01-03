import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { cn } from '@/lib/utils'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'AWS DVA-C02 Mind Maps',
  description:
    'Mind maps for AWS Certified Developer - Associate (DVA-C02) based on Cantrill course, AWS marketing page, AWS official documentation, and many other sources.',
  other: {
    env: process.env.BUILD_ENV || process.env.GIT_BRANCH || '',
    version: [
      process.env.GIT_COMMIT_TAG,
      process.env.GIT_COMMIT_HASH,
      process.env.GIT_COMMIT_DATE,
    ]
      .filter(Boolean)
      .join(' - '),
    'deployed-at': process.env.BUILD_DATE || '',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'h-full bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
