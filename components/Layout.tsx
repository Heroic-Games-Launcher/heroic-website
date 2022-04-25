import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import WebsiteHead from './WebsiteHead'

type Props = {
    children: ReactNode
}

export const Layout = ({children}: Props) => {
  return (
    <>
      <WebsiteHead />
        <Navbar />
            <main>{children}</main>
        <Footer />
    </>
  )
}
