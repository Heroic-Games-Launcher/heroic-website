import React from 'react'
import { motion } from 'framer-motion'
import { Supporter } from '../lib/supporters'
import { faGithub, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import styles from './SupportersMarquee.module.css'

interface SupportersMarqueeProps {
  github: Supporter[]
  patreon: Supporter[]
  kofi: Supporter[]
}

const getRoleStyle = (role?: string): React.CSSProperties => {
  if (!role) return { opacity: 0.8 }

  const normalizedRole = role.toLowerCase()

  if (normalizedRole.includes('mega supporter')) {
    return {
      color: '#FFD700', // Gold
      fontWeight: 800,
      textShadow: '0 0 12px rgba(255, 215, 0, 0.6)',
      transform: 'scale(1.1)',
    }
  }
  if (normalizedRole.includes('hero supporter')) {
    return {
      color: '#FF4081', // Pink/Magenta
      fontWeight: 700,
      textShadow: '0 0 10px rgba(255, 64, 129, 0.4)',
    }
  }
  if (normalizedRole.includes('supporter plus')) {
    return {
      color: '#00E5FF', // Cyan
      fontWeight: 600,
    }
  }
  // Default 'supporter' or others
  return {
    opacity: 0.9,
    fontWeight: 500,
  }
}

const MarqueeRow = ({
  supporters,
  direction = 'left',
  label,
  link,
  icon
}: {
  supporters: Supporter[],
  direction?: 'left' | 'right',
  label: string,
  link: string,
  icon: IconDefinition
}) => {
  if (!supporters || supporters.length === 0) return null

  // Duplicate the list to ensure smooth infinite scroll
  const repeatedSupporters = [...supporters, ...supporters, ...supporters]
  const duration = Math.max(supporters.length * 4, 30)

  return (
    <div className={styles.marqueeRow}>
      <p className={styles.marqueeLabel}>
        <FontAwesomeIcon icon={icon} size="sm" />
        {label}
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.marqueeLink}>
        <div className={styles.marqueeContainer}>
          <motion.div
            initial={{ x: direction === 'left' ? '0%' : '-33.33%' }}
            animate={{
              x: direction === 'left' ? '-33.33%' : '0%'
            }}
            transition={{
              duration: duration,
              ease: 'linear',
              repeat: Infinity
            }}
            className={styles.marqueeContent}
          >
            {repeatedSupporters.map((s, i) => {
              const roleStyle = getRoleStyle(s.role)
              return (
                <span key={i} className={styles.marqueeName} style={roleStyle}>
                  {s.name}
                </span>
              )
            })}
          </motion.div>
        </div>
      </a>
    </div>
  )
}

const SupportersMarquee: React.FC<SupportersMarqueeProps> = ({ github, patreon, kofi }) => {
  const { t } = useTranslation()

  return (
    <section className={styles.marqueeSection}>
      <h4 className={styles.marqueeTitle}>
        🗡️ {t('common.supportersMarquee.title', 'A heartfelt thank you to our incredible supporters!')}
      </h4>
      <MarqueeRow
        supporters={patreon}
        direction="left"
        label="Patreon"
        link="https://patreon.com/heroicgameslauncher"
        icon={faPatreon}
      />
      <MarqueeRow
        supporters={github}
        direction="right"
        label="GitHub Sponsors"
        link="https://github.com/sponsors/Heroic-Games-Launcher"
        icon={faGithub}
      />
      <MarqueeRow
        supporters={kofi}
        direction="left"
        label="Ko-fi (monthly supporters)"
        link="https://ko-fi.com/heroicgames"
        icon={faCoffee}
      />
      <div className={styles.marqueeLegend}>
        {['Mega Supporter', 'Hero Supporter', 'Supporter Plus', 'Supporter'].map((role) => {
          const style = getRoleStyle(role);
          return (
            <span key={role} className={styles.legendItem} style={{ ...style, transform: 'none', scale: 1 }}>
              {role}
            </span>
          );
        })}
      </div>
    </section>
  )
}

export default SupportersMarquee