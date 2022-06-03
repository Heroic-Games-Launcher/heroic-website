import React, { useEffect, useState } from 'react'
import { CookiesState } from '../../pages/api/ga'

export default function useCookies() {
  const cookies = global?.localStorage?.getItem('cookies') as CookiesState
  const [cookiesState, setCookiesState] = useState<CookiesState>(cookies)

  useEffect(() => {
    global?.localStorage?.setItem('cookies', cookiesState ?? '')
  }, [cookiesState, global.localStorage])

  return {
    cookiesState,
    setCookiesState
  }
}
