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
          Welcome to <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher">Heroic!</a>
        </h1>

        <p className={styles.description}>
          An Open Source Epic games launcher alternative for Linux, Windows and MacOSX.
        </p>

        <div className={styles.grid}>

          <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases" className={styles.card}>
            <h2>Download &rarr;</h2>
            <p>Download Heroic Latest Release!</p>
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
            <p>Help the Project keeping alive buying us a Coffee.</p>
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
          Heroic Games Launcher @2021
        </a>
      </footer>
    </div>
  )
}

export default Home
