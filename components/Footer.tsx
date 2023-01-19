import i18next from 'i18next'
import { useRouter } from 'next/router'
import React from 'react'


const Footer = () => {
  const router = useRouter()

  function changeLanguage(lang: { target: { value: string } }) {
    router.push(`/${lang.target.value}`)
  }

  return (
    <footer className="container">
      <small>
        Heroic Games Launcher &copy; {new Date().getFullYear()}
        <p>
          <select
            name="language"
            id="language"
            onChange={changeLanguage}
            value={i18next.language}
          >
            <option value="en">English</option>
            <option value="hu">Magyar</option>
          </select>
        </p>
      </small>
    </footer>
  )
}

export default Footer
