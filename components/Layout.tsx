import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  children: ReactNode
  siteLang: string
}

export const Layout = ({ children, siteLang }: Props) => {
  return (
    <>
      <Navbar siteLang={siteLang}/>
      <main>{children}</main>
      <Footer siteLang={siteLang} />
    </>
  )
}
