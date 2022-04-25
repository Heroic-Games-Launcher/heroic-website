import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
import WebsiteHead from './WebsiteHead'
import { pageview } from '../pages/api/ga'
import CookieBanner from './CookieBanner'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const router = useRouter()
  const storage = global.window?.localStorage
  const bannerState = Boolean(storage?.getItem('cookieBanner'))
  const [showCookieBanner, setShowCookieBanner] = useState(!bannerState)

  // Proper check of router changings
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  function handleClick() {
    setShowCookieBanner(false)
    storage.setItem('cookieBanner', 'true')
  }

  return (
    <>
      <WebsiteHead />
      <Navbar />
      <main>{children}</main>
      {showCookieBanner && <CookieBanner handleClick={() => handleClick()} />}
      <Footer />
    </>
  )
}
