import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
import WebsiteHead from './WebsiteHead'
import { pageview } from '../pages/api/ga'
import CookieBanner from './CookieBanner'
import useCookies from './hooks/useCookies'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const router = useRouter()
  const { cookiesState } = useCookies()
  // Proper check of router changings
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (cookiesState === 'accepted') {
        pageview(url)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {cookiesState === 'accepted' && <WebsiteHead />}
      <Navbar />
      <main>{children}</main>
      <CookieBanner />
      <Footer />
    </>
  )
}
