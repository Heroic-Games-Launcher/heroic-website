import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslation } from 'react-i18next'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ScreenshotsCarousel.module.css'

export interface Slide {
  src: string
  title: string
  description: string
}

interface Props {
  slides: Slide[]
}

export default function ScreenshotsCarousel({ slides }: Props) {
  const { t } = useTranslation()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  return (
    <section
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label={t('home.screenshots.ariaLabel') as string}
    >
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((slide, i) => (
            <figure
              className={styles.slide}
              key={slide.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slides.length}`}
            >
              <img
                className={styles.image}
                src={slide.src}
                alt={slide.title}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <figcaption className={styles.caption}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <button
        className={`${styles.nav} ${styles.prev}`}
        onClick={scrollPrev}
        aria-label={t('home.screenshots.previous') as string}
      >
        <FontAwesomeIcon icon={faChevronLeft} height={20} width={20} />
      </button>
      <button
        className={`${styles.nav} ${styles.next}`}
        onClick={scrollNext}
        aria-label={t('home.screenshots.next') as string}
      >
        <FontAwesomeIcon icon={faChevronRight} height={20} width={20} />
      </button>

      <div className={styles.dots} role="tablist" aria-label={t('home.screenshots.ariaLabel') as string}>
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ''}`}
            onClick={() => scrollTo(i)}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`${t('home.screenshots.goToSlide')} ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
