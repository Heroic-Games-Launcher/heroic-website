import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <footer className="container">
      <small>{t('copyright')} &copy; {new Date().getFullYear()}</small>
    </footer>
  )
}

export default Footer
