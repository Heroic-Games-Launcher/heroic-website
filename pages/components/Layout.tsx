import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
    children: ReactNode
}

export const Layout = ({children}: Props) => {
  return (
    <>
        <Header />
            <main>{children}</main>
        <Footer />
    </>
  )
}
