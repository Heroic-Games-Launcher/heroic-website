import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
