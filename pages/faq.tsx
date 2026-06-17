import { NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Seo from '../components/Seo'

interface FAQ {
  question: string
  answers: string[]
}

const FAQPage: NextPage = () => {
  const { t } = useTranslation()
  const questions = t('faq.questions', { returnObjects: true }) as FAQ[]

  return (
    <>
      <Seo
        title="Heroic Games Launcher FAQ — Frequently Asked Questions"
        description="Answers to common questions about Heroic Games Launcher: what it is, privacy and safety, installation, Wine and Proton, supported stores, and platforms."
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
