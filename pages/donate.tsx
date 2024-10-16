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
          content="An Open Source Epic, GOG and Amazon Prime Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>Support Us</h1>
          <p>Heroic is free! Donations help us keep the project alive.</p>

          <hr className="spacer" />

          <div className="grid">
            <article>
              <h4>Patreon</h4>
              <small>Monthly-sub</small>
              <p>
                Activate a monthly subscription on Patreon to support us and get
                rewards.
              </p>
              <footer>
                <a href="https://patreon.com/heroicgameslauncher">
                  <strong>Go to Patreon</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>Ko-fi</h4>
              <small>One-time</small>
              <p>
                Support the project by offering us a coffee. Just like that,
                fast and simple!
              </p>
              <footer>
                <a href="https://ko-fi.com/heroicgames">
                  <strong>Go to Ko-fi</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>GOG.com</h4>
              <small>One-time</small>
              <p>
                Use our link when making purchases on GOG and support the
                project. Cool right?
              </p>
              <footer>
                <a href="https://af.gog.com?as=1838482841">
                  <strong>Go to GOG</strong>
                </a>
              </footer>
            </article>
            <article>
              <h4>GitHub Sponsor</h4>
              <small>One-time or flexible-sub</small>
              <p>
                Support us with a one-time or recurring donation through GitHub.
              </p>
              <footer>
                <a href="https://github.com/sponsors/Heroic-Games-Launcher">
                  <strong>Go to GitHub</strong>
                </a>
              </footer>
            </article>
          </div>
        </div>
      </header>
    </>
  )
}

export default Donate
