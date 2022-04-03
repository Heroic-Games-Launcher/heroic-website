/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const libraryImage = require('../assets/heroic_01.png')

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Heroic Games Launcher</title>
        <meta name="description" content="An Open Source GOG and Epic Games Launcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="hero center">
        <div className="container">
          <h1>Play like a Hero</h1>
          <p>An Open Source GOG and Epic games launcher for Linux, Windows and MacOS.</p>
            <p className={styles.buttonContainer}>
              <Link href="/downloads"><span role="button" className="secondary">Download</span></Link>
              <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki" role="button" className="contrast outline">Documentation</a>
            </p>
          <img src={libraryImage}
            alt="Heroic Games Launcher preview" />
        </div>
      </header>

{/*       <section className="container">
        <div className="hero">
          <div className="grid center">
            <div>
              <h2>Feature 1#</h2>
              <p>Ehi dude, this feature is awesome. You will absolutely love it and never came back, trust me!</p>
            </div>
            <div>
              <img
                src="https://user-images.githubusercontent.com/26871415/157914736-469d3f69-ddfc-4b63-af0b-4d8600f5744d.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="hero">
          <div className="grid center">
            <div>
              <img
                src="https://user-images.githubusercontent.com/26871415/157914736-469d3f69-ddfc-4b63-af0b-4d8600f5744d.png" />
            </div>
            <div>
              <h2>Feature 2#</h2>
              <p>Ehi dude, this feature is awesome. You will absolutely love it and never came back, trust me!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="hero">
          <div className="grid center">
            <div>
              <h2>Feature 3#</h2>
              <p>Ehi dude, this feature is awesome. You will absolutely love it and never came back, trust me!</p>
            </div>
            <div>
              <img
                src="https://user-images.githubusercontent.com/26871415/157914736-469d3f69-ddfc-4b63-af0b-4d8600f5744d.png" />
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Home
