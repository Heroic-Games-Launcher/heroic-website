import React from 'react'
import { motion } from 'framer-motion'
import { Supporter } from '../lib/supporters'
import { faGithub, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { t } from 'i18next'

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
      scale: 1.1,
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
  link
}: {
  supporters: Supporter[],
  direction?: 'left' | 'right',
  label: string,
  link: string,
  icon: IconDefinition
}) => {
  // Duplicate the list to ensure smooth infinite scroll
  const repeatedSupporters = [...supporters, ...supporters]
  const duration = Math.max(supporters.length * 3, 20)

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
            initial={{ x: direction === 'left' ? '0%' : '-50%' }}
            animate={{
              x: direction === 'left' ? '-50%' : '0%'
            }}
            transition={{
              duration: duration,
              ease: 'linear',
              repeat: Infinity
            }}
            style={{ display: 'inline-flex', gap: '3rem' }}
          >
            {repeatedSupporters.map((s, i) => {
              const roleStyle = getRoleStyle(s.role)
              return (
                <span key={i} style={{
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  ...roleStyle
                }}>
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
  console.log({ github, patreon, kofi })
  return (
    <section className="container" style={{
      marginTop: '4rem',
      marginBottom: '4rem',
      padding: '0.5rem 1rem',
      border: '1px solid rgba(142, 36, 170, 0.15)',
      borderRadius: '12px',
      background: 'rgba(142, 36, 170, 0.02)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)'
    }}>
      <h4 style={{
        textAlign: 'center',
        marginBottom: '1rem',
        fontSize: '1rem',
        fontWeight: 600,
        background: 'linear-gradient(135deg, #8E24AA 0%, #BA68C8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        {t('supportersMarquee.title', 'Thanks our great supporters!')}
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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '2rem',
        flexWrap: 'wrap',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(142, 36, 170, 0.1)'
      }}>
        {['Mega Supporter', 'Hero Supporter', 'Supporter Plus', 'Supporter'].map((role) => {
          const style = getRoleStyle(role);
          return (
            <span key={role} style={{
              fontSize: '0.6rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              ...style,
              scale: 1 // Reset scale for the legend to keep it tidy
            }}>
              {role}
            </span>
          );
        })}
      </div>
    </section>
  )
}

export default SupportersMarquee
