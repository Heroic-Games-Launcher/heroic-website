import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

const Cla: NextPage = () => {
  const { t } = useTranslation('cla')

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
        <meta
          name="description"
          content="An Open Source Epic, GOG and Amazon Prime Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{t('title')}</h1>
          <p>
            <Trans i18nKey="intro1" t={t}>
              This Contribution License Agreement (the <strong>"CLA"</strong>) is
              between the individual set forth in the signature block (
              <strong>"You"</strong>) and Heroic Labs, Inc. (
              <strong>"Heroic"</strong>), effective as of the date of Your
              signature and sets forth the terms pursuant to which You may provide
              Contributions to Heroic.
            </Trans>
          </p>
          <p>{t('intro2')}</p>
        </div>
      </header>
      <div className="container">
        <ol>
          <li>
            <u>{t('definitions.title')}</u>{' '}
            <Trans i18nKey="definitions.contribution" t={t}>
              <strong>"Contribution"</strong> means any original work of authorship...
            </Trans>{' '}
            <Trans i18nKey="definitions.submit" t={t}>
              <strong>"Submit"</strong> means any form of electronic...
            </Trans>
          </li>
          <li>
            <u>{t('copyrightLicense.title')}</u> {t('copyrightLicense.content')}
          </li>
          <li>
            <u>{t('patentLicense.title')}</u> {t('patentLicense.content')}
          </li>
          <li>
            <u>{t('representations.title')}</u> {t('representations.intro')}
            <ul>
              <li>{t('representations.item1')}</li>
              <li>{t('representations.item2')}</li>
              <li>{t('representations.item3')}</li>
            </ul>
          </li>
          <li>
            <u>{t('support.title')}</u> {t('support.content')}
          </li>
          <li>
            <u>{t('thirdParty.title')}</u> {t('thirdParty.content')}
          </li>
          <li>
            <u>{t('notice.title')}</u> {t('notice.content')}
          </li>
          <li>
            <u>{t('general.title')}</u> {t('general.content')}
          </li>
        </ol>
      </div>
      <footer className="footer">
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>
            <p>
              <strong>{t('signature.yourName')} __________________________________</strong>
              <br />
            </p>
            <p>
              <strong>{t('signature.by')} __________________________________</strong>
              <br />
            </p>
            <p>
              <strong>{t('signature.date')} ____/____/____</strong>
              <br />
            </p>
            <p>
              <strong>{t('signature.email')} __________________________________</strong>
              <br />
            </p>
          </div>
          <div>
            <p>
              <strong>{t('signature.heroicLabs')}</strong>
            </p>
            <p>
              <strong>{t('signature.by')} __________________________________</strong>
              <br />
            </p>
            <p>
              <strong>{t('signature.date')} ____/____/____</strong>
              <br />
            </p>
          </div>
        </div>
      </footer>
      <div className="container">
        <button onClick={() => window.print()}>{t('printButton')}</button>
      </div>
    </>
  )
}

export default Cla
