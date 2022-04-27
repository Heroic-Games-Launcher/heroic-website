import React from 'react'
import { CookiesState } from '../pages/api/utils'
import useCookies from './hooks/useCookies'

export default function CookieBanner() {
  const { setCookiesState, cookiesState } = useCookies()

  function handleClick(value: CookiesState) {
    setCookiesState(value)
  }

  if (Boolean(cookiesState)) {
    return null
  }

  return (
    <div className="cookieBanner">
      <span className="grid">
        <span>
          This website uses cookies to ensure you get the best experience on our
          website.
        </span>
        <span className="buttons">
          <button onClick={() => handleClick('accepted')} className="primary">
            Accept
          </button>
          <button onClick={() => handleClick('denied')} className="outline">
            Decline
          </button>
        </span>
      </span>
    </div>
  )
}
