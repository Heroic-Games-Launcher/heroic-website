import React, { ReactNode, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import CookieBanner from './CookieBanner'
import useCookies from './hooks/useCookies'
import { init } from '@socialgouv/matomo-next'

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { cookiesState } = useCookies()
  // Proper check of router changings
  useEffect(() => {
    if (cookiesState === 'accepted') {
      init({ url: MATOMO_URL || '', siteId: MATOMO_SITE_ID || '' })
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CookieBanner />
      <Footer />
    </>
  )
}
