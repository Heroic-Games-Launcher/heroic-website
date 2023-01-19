import i18next from 'i18next'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { getFaqs } from '../api/constants' // import the faqs array from constants.ts

const FAQPage: NextPage = () => {
  let faqs = getFaqs()
  return (
    <>
      <Head>
        <title>{i18next.t('FAQ.title')}</title>
        <meta name="description" content={i18next.t('FAQ.meta_desc')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{i18next.t('FAQ.title')}</h1>
          {faqs.map((faq, i) => (
            <details key={i} open={i === 0}>
              <summary>{faq.question}</summary>
              <ul>
                {faq.answer.map((answer, j) => (
                  <li key={j}>
                    {answer.split(' ').map((word) => {
                      // check if the word is a URL
                      if (word.startsWith('https://')) {
                        return (
                          <a href={word} target="_blank" rel="noreferrer">
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
