import React, { ReactNode, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import CookieBanner from './CookieBanner'
import useCookies from './hooks/useCookies'
import { init } from '@socialgouv/matomo-next'
import { NEXT_PUBLIC_MATOMO_URL } from '../pages/api/utils'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { cookiesState } = useCookies()
  // Proper check of router changings
  useEffect(() => {
    if (cookiesState === 'accepted') {
      init({ url: NEXT_PUBLIC_MATOMO_URL || '', siteId: '1' })
    }
  }, [cookiesState])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <CookieBanner />
      <Footer />
    </>
  )
}
