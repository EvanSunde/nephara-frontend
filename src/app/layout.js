import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import { TextProvider } from '@/app/edit/designComponents/ContextEditing/TextContext'
import { ImageProvider } from '@/app/edit/designComponents/ContextEditing/ImageContext'
import { CanvasProvider } from '@/app/edit/designComponents/ContextEditing/CanvasContext'
import { SidebarContextProvider } from '@/app/edit/designComponents/ContextEditing/SidebarContext'
import { AccountContextProvider } from './account/components/contexts/AccountSidebarContexts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nephara',
  description: 'Clothes Customization web app in nepal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Head>
      <body className={inter.className}>
        <ImageProvider>
          <CanvasProvider>
            <TextProvider>
              <SidebarContextProvider>
                <AccountContextProvider>
                  {children}
                </AccountContextProvider>
              </SidebarContextProvider>
            </TextProvider>
          </CanvasProvider>
        </ImageProvider>
      </body>
    </html>
  )
}
