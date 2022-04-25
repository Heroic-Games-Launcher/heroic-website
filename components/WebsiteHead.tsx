import React from 'react'
import Script from 'next/script'

const WebsiteHead = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ME54JLB24H"
      ></Script>
      <Script
        strategy="afterInteractive"
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ME54JLB24H');`
        }}
      />
    </>
  )
}

export default WebsiteHead
