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
            <article className="secondary">
              <h4>GitHub Sponsor</h4>
              <small>One-time or flexible-sub</small>
              <p>
                Support us with a one-time or recurring donation through GitHub.
              </p>
              <a href="https://github.com/sponsors/Heroic-Games-Launcher">
                Go to GitHub
              </a>
            </article>
            <article>
              <h4>Patreon</h4>
              <small>Monthly-sub</small>
              <p>
                Activate a monthly subscription on Patreon to support us, you
                will have access to special content.
              </p>
              <a href="https://patreon.com/heroicgameslauncher">
                Go to Patreon
              </a>
            </article>
            <article>
              <h4>Ko-fi</h4>
              <small>One-time</small>
              <p>Support the project by offering us a coffee.</p>
              <a href="https://ko-fi.com/heroicgames">Go to Ko-fi</a>
            </article>
          </div>
        </div>
      </header>
    </>
  )
}

export default Donate
