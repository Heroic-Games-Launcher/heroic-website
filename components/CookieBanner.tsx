import React from 'react'

interface Props {
  handleClick: () => void
}

export default function CookieBanner({ handleClick }: Props) {
  return (
    <div className="cookieBanner">
      <span className="grid">
        <span>
          This website uses cookies to ensure you get the best experience on our
          website.
        </span>
        <span className="buttons">
          <button onClick={() => handleClick()} className="primary">
            Accept
          </button>
          <button onClick={() => handleClick()} className="outline">
            Decline
          </button>
        </span>
      </span>
    </div>
  )
}
