import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinyl',
  description: 'Shop your favorite records with Vinyl'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main-bg text-text-clr flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
