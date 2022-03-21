/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heroic Games Launcher</title>
        <meta name="description" content="An Epic Games Launcher alternative" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher">Heroic Games Launcher!</a>
        </h1>

        <p className={styles.description}>
          An Open Source GOG and Epic games launcher for Linux, Windows and MacOSX.
        </p>

        <img alt="Heroic Library" src='https://user-images.githubusercontent.com/26871415/159332062-0e01f2d1-ec79-44ef-8d29-c436e9334023.png' />

        <div className={styles.grid}>

          <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases" className={styles.card}>
            <h2>Download &rarr;</h2>
            <p>Get Heroic Latest Release for your Linux distro, Mac or Windows system!</p>
          </a>

          <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Check our Wiki for information and Troubleshooting guides.</p>
          </a>

          <a
            href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/blob/main/Support.md"
            className={styles.card}
          >
            <h2>Support the Project &rarr;</h2>
            <p>Heroic is free so we need contributions to keep the project alive. :)</p>
          </a>

          <a
            href="https://discord.gg/rHJ2uqdquK"
            className={styles.card}
          >
            <h2>Community &rarr;</h2>
            <p>
              Become part of our community by joining our Discord.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroic Games Launcher @2022
        </a>
      </footer>
    </div>
  )
}

export default Home
