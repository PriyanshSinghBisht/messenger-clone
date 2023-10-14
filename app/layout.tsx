import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ToasterContext from './(site)/components/context/ToasterContext'
import AuthContext from './(site)/components/context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Messenger Clone',
  description: 'Messenger Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthContext>
            <ToasterContext />
            <ActiveStatus/>
            {children}
           </AuthContext>
        </body>
    </html>
  )
}
