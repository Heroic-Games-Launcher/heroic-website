import { NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'
import enTranslations from '../public/locales/en/translations.json'

interface FAQ {
  question: string
  answers: string[]
}

// Built from the static English source so the FAQ structured data is present
// in the pre-rendered HTML (the live translations are loaded on the client).
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: (enTranslations.faq.questions as FAQ[]).map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answers.join(' ')
    }
  }))
}

const FAQPage: NextPage = () => {
  const { t } = useTranslation()
  const questions = t('faq.questions', { returnObjects: true }) as FAQ[]

  return (
    <>
      <Seo
        title="Heroic Games Launcher FAQ — Frequently Asked Questions"
        description="Answers to common questions about Heroic Games Launcher: what it is, privacy and safety, installation, Wine and Proton, supported stores, and platforms."
        jsonLd={faqLd}
      />
      <header className="hero">
      <div className="container">
        <h1>{t('faq.title')}</h1>
        {Array.isArray(questions) && questions.map((faq, i) => (
          <details key={i} open={i === 0}>
            <summary>{faq.question}</summary>
            <ul>
              {faq.answers.map((answer, j) => (
                <li key={j}>
                  {answer.split(' ').map((word, k) => {
                    // check if the word is a URL
                    if (word.startsWith('https://')) {
                      return (
                        <a key={k} href={word} target="_blank" rel="noreferrer">
                          {word}
                        </a>
                      )
                    }
                    return word + ' '
                  })}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
      </header>
    </>
  )
}

export default FAQPage
