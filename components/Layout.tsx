import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t('common.skipToContent', 'Skip to content')}
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
