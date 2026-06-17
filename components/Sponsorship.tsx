import React from 'react'
import styles from './Sponsorship.module.css'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'

const getSponsors = (t: TFunction) => [
  {
    name: 'Weblate',
    logo: 'https://s.weblate.org/cdn/Logo-Darktext-borders.png',
    url: 'https://weblate.org/en/',
    description: t('home.sponsors.weblateDescription', 'Hosting our translations')
  },
  {
    name: 'Signpath',
    logo: 'https://user-images.githubusercontent.com/26871415/182468471-6ef4aac6-a4e2-4ae8-93ef-d638cd01627d.png',
    url: 'https://signpath.io/?utm_source=foundation&utm_medium=github&utm_campaign=heroicgameslauncher',
    description: t('home.sponsors.signpathDescription', 'Providing free signing of Windows binaries')
  }
]

const Sponsorship: React.FC = () => {
  const { t } = useTranslation()
  const sponsors = getSponsors(t)

  return (
    <section className={`${styles.sponsorshipSection} container`}>
      <h2 className={styles.title}>{t('home.sponsors.title', 'Our Sponsors')}</h2>
      <div className={styles.sponsorsGrid}>
        {sponsors.map((sponsor) => (
          <motion.a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sponsorCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.logoWrapper}>
              <img src={sponsor.logo} alt={sponsor.name} className={styles.logo} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.sponsorName}>{sponsor.name}</h3>
              <p className={styles.sponsorDescription}>{sponsor.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Sponsorship
