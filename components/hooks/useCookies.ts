import React, { useEffect, useState } from 'react'
import { CookiesState } from '../../pages/api/ga'

const storage = global.window?.localStorage

export default function useCookies() {
  const cookies = storage?.getItem('cookies') as CookiesState

  const [cookiesState, setCookiesState] = useState<CookiesState>(cookies)

  useEffect(() => {
    storage.setItem('cookies', cookiesState ?? '')
  }, [cookiesState])

  return {
    cookiesState,
    setCookiesState
  }
}
