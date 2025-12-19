import React from 'react'
import { motion } from 'framer-motion'
import { Supporter } from '../lib/supporters'
import { faGithub, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface SupportersMarqueeProps {
  github: Supporter[]
  patreon: Supporter[]
  kofi: Supporter[]
}

const MarqueeRow = ({
  supporters,
  direction = 'left',
  label,
  link
}: {
  supporters: Supporter[],
  direction?: 'left' | 'right',
  label: string,
  link: string,
  icon: IconDefinition
}) => {
  // Duplicate the list to ensure smooth infinite scroll
  const repeatedSupporters = [...supporters, ...supporters, ...supporters, ...supporters]

  return (
    <div style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
      <p style={{
        textAlign: 'center',
        fontSize: '0.7rem',
        opacity: 0.6,
        marginBottom: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        {label}
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ position: 'relative', width: '100%', whiteSpace: 'nowrap' }}>
          <motion.div
            animate={{
              x: direction === 'left' ? [0, -1000] : [-1000, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 20,
                ease: 'linear'
              }
            }}
            style={{ display: 'inline-flex', gap: '3rem' }}
          >
            {repeatedSupporters.map((s, i) => (
              <span key={i} style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: 0.8
              }}>
                {s.name}
              </span>
            ))}
          </motion.div>
        </div>
      </a>
    </div>
  )
}

const SupportersMarquee: React.FC<SupportersMarqueeProps> = ({ github, patreon, kofi }) => {
  return (
    <section className="container" style={{
      marginTop: '4rem',
      marginBottom: '4rem',
      padding: '2.5rem 1rem',
      border: '1px solid rgba(142, 36, 170, 0.15)',
      borderRadius: '24px',
      background: 'rgba(142, 36, 170, 0.02)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)'
    }}>
      <MarqueeRow
        supporters={patreon}
        direction="right"
        label="Patreon"
        link="https://patreon.com/heroicgameslauncher"
        icon={faPatreon}
      />
      <MarqueeRow
        supporters={github}
        direction="left"
        label="GitHub Sponsors"
        link="https://github.com/sponsors/Heroic-Games-Launcher"
        icon={faGithub}
      />
      <MarqueeRow
        supporters={kofi}
        direction="right"
        label="Ko-fi (monthly supporters)"
        link="https://ko-fi.com/heroicgames"
        icon={faCoffee}
      />
    </section>
  )
}

export default SupportersMarquee
