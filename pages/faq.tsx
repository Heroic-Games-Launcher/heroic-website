import { NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface FAQ {
  question: string
  answers: string[]
}

const FAQPage: NextPage = () => {
  const { t } = useTranslation('faq')
  const questions = t('questions', { returnObjects: true }) as FAQ[]

  return (
    <header className="hero">
      <div className="container">
        <h1>{t('title')}</h1>
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
  )
}

export default FAQPage
