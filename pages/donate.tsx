import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Donate: NextPage = () => {
  return (
    <>
      <Head>
        <title>Support Heroic Development</title>
        <meta
          name="description"
          content="An Open Source GOG and Epic Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>Support Us</h1>
          <p>Heroic is free! Donations help us keep the project alive.</p>

          <hr className="spacer" />

          <div className="grid">
            <SuppotUsPageArticleCard
              className="secondary"
              articleTitle="GitHub Sponsor"
              articleSubTitle="One-time or flexible-sub"
              articleContent="Support us with a one-time or recurring donation through GitHub."
              articleLink="https://github.com/sponsors/Heroic-Games-Launcher"
              articleLinkText="Go to GitHub"
            />
            <SuppotUsPageArticleCard
              articleTitle="Patreon"
              articleSubTitle="Monthly-sub"
              articleContent="Activate a monthly subscription on Patreon to support us and get
              rewards."
              articleLink="https://patreon.com/heroicgameslauncher"
              articleLinkText="Go to Patreon"
            />
            <SuppotUsPageArticleCard
              articleTitle="Ko-fi"
              articleSubTitle="One-time"
              articleContent="Support the project by offering us a coffee. Just like that,
              fast and simple!"
              articleLink="https://ko-fi.com/heroicgames"
              articleLinkText="Go to Ko-fi"
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Donate
