/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const logo = require('../assets/logo.png?webp')
import {
  faTwitter,
  faGithub,
  faDiscord,
  faMastodon
} from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const closeSidebar = () => setSidebarOpen(false)

  const socialLinks = (
    <ul className="social-links">
      <li>
        <a
          rel="me"
          title="Heroic Mastodon Page"
          href="https://mastodon.social/@heroiclauncher"
        >
          <FontAwesomeIcon
            icon={faMastodon}
            height={22}
            width={22}
            color={'#00000'}
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/HeroicLauncher"
          title="Heroic Twitter Page"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            height={22}
            width={22}
            color={'#00000'}
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Heroic-Games-Launcher"
          title="Heroic GitHub Page"
        >
          <FontAwesomeIcon
            icon={faGithub}
            height={22}
            width={22}
            color={'#00000'}
          />
        </a>
      </li>
      <li>
        <a
          href="https://discord.com/invite/rHJ2uqdquK"
          title="Heroic Discord Server"
        >
          <FontAwesomeIcon
            icon={faDiscord}
            height={22}
            width={22}
            color={'#00000'}
          />
        </a>
      </li>
    </ul>
  )

  const navLinks = (
    <ul className="nav-links">
      <li>
        <Link href="/downloads" onClick={toggleSidebar}>Downloads</Link>
      </li>
      <li>
        <Link href="/faq" onClick={closeSidebar}>FAQ</Link>
      </li>
      <li>
        <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki" onClick={closeSidebar}>
          Documentation
        </a>
      </li>
      <li>
        <Link href="/donate" onClick={closeSidebar}>Support Us</Link>
      </li>
      <li>
        <Link href="/cla" onClick={closeSidebar}>CLA</Link>
      </li>
    </ul>
  )

  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <Link href="/" passHref>
              <span className="contrast link">
                <img
                  src={logo}
                  title="Heroic Games Launcher"
                  alt="Heroic Games Launcher"
                  height="32px"
                  width="32px"
                />
                <strong>Heroic Games Launcher</strong>
              </span>
            </Link>
          </li>
        </ul>

        {/* Hamburger menu button - visible only on mobile */}
        <button
          className="hamburger-menu"
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={faBars} height={24} width={24} />
        </button>

        {/* Desktop navigation - hidden on mobile */}
        <div className="desktop-nav">
          {socialLinks}
          {navLinks}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeSidebar}
            />

            {/* Sidebar */}
            <motion.aside
              className="mobile-sidebar"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="sidebar-header">
                <Link href="/" passHref onClick={closeSidebar}>
                  <span className="contrast link">
                    <img
                      src={logo}
                      title="Heroic Games Launcher"
                      alt="Heroic Games Launcher"
                      height="32px"
                      width="32px"
                    />
                    <strong>Heroic Games Launcher</strong>
                  </span>
                </Link>
                <button
                  className="close-sidebar"
                  onClick={closeSidebar}
                  aria-label="Close navigation menu"
                >
                  <FontAwesomeIcon icon={faTimes} height={24} width={24} />
                </button>
              </div>

              <div className="sidebar-content">
                {navLinks}
                {socialLinks}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
