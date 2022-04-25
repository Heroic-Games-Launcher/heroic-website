import React, { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
import WebsiteHead from './WebsiteHead'
import { pageview } from '../pages/api/ga'

type Props = {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();

  // Proper check of router changings
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <>
      <WebsiteHead />
        <Navbar />
            <main>{children}</main>
        <Footer />
    </>
  )
}
