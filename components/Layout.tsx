import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
import { pageview } from '../pages/api/ga'
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
