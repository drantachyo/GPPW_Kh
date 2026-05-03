import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Atyrau Eco-Hub',
  description: 'Building a culture of civic responsibility through environmental action',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-eco-dark">{children}</body>
    </html>
  )
}
