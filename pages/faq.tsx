import { NextPage } from 'next'
import React from 'react'
import { faqs } from './api/constants' // import the faqs array from constants.ts

const FAQPage: NextPage = () => {
  return (
    <header className="hero">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <details key={index} open={index === 0}>
            <summary>{faq.question}</summary>
            <ul>
              {faq.answer.map((answer, index) => (
                <li key={index}>
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
  )
}

export default FAQPage
