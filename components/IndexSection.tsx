import { motion } from 'framer-motion'
import { ReactElement } from 'react'

interface IndexSection {
  sectionInitial:object
  sectionTransition:object
  sectionWhileInView:object
  sectionWhileHover:object
  sectionImage:string
  sectionImageAlt:string
  sectionTitle:string
  sectionContent:ReactElement
}

const IndexSection = ({
  sectionInitial,
  sectionTransition,
  sectionWhileInView,
  sectionWhileHover,
  sectionImage,
  sectionImageAlt,
  sectionTitle,
  sectionContent
}: IndexSection) => {
  return (
    <motion.section
      initial={sectionInitial}
      transition={sectionTransition}
      whileInView={sectionWhileInView}
      viewport={{ once: true }}
      whileHover={sectionWhileHover}
      className="container feature"
    >
      <div className="hero">
        <div className="grid center">
          <div>
            <a href={sectionImage}>
              <img
                src={sectionImage}
                alt={sectionImageAlt}
                aria-label={sectionImageAlt}
                loading="lazy"
              />
            </a>
          </div>
          <div className="description">
            <h2>{sectionTitle}</h2>
            <p>{sectionContent}</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default IndexSection
