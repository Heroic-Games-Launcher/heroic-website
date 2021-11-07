import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import libraryImage from '../assets/heroic_01.png'

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
          An Open Source Epic games launcher alternative for Linux, Windows and MacOSX.
        </p>

        <Image alt="Heroic Library" src={libraryImage} />

        <section className={styles.downloadSection}>
          <a
            className={styles.downloadBtn}
            href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/download/v1.11.0-alpha/Heroic.Portable.1.11.0-alpha.exe"
            target="_blank"
          ><b>Windows</b></a>
          <a
            className={styles.downloadBtn}
            href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/download/v1.11.0-alpha/Heroic-1.11.0-alpha.dmg"
            target="_blank"
          ><b>MacOS</b></a>
          <a
            className={styles.downloadBtn}
            href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/releases/download/v1.11.0-alpha/Heroic-1.11.0-alpha.AppImage"
            target="_blank"
          ><b>Linux</b></a>
        </section>

        <div className={styles.grid}>


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

          <a href="https://hosted.weblate.org/projects/heroic-games-launcher/" className={styles.card}>
            <h2>Translate &rarr;</h2>
            <p>Heroic is localized by volunteers :). It's even translated to non-official languages, like Catalan!</p>
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
