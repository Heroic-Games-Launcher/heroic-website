import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

const Cla: NextPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('cla.pageTitle')}</title>
        <meta
          name="description"
          content="An Open Source Epic, GOG and Amazon Prime Games Launcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="hero">
        <div className="container">
          <h1>{t('cla.title')}</h1>
          <p>
            <Trans i18nKey="cla.intro1" t={t}>
              This Contribution License Agreement (the <strong>"CLA"</strong>) is
              between the individual set forth in the signature block (
              <strong>"You"</strong>) and Heroic Labs, Inc. (
              <strong>"Heroic"</strong>), effective as of the date of Your
              signature and sets forth the terms pursuant to which You may provide
              Contributions to Heroic.
            </Trans>
          </p>
          <p>{t('cla.intro2')}</p>
        </div>
      </header>
      <div className="container">
        <ol>
          <li>
            <u>{t('cla.definitions.title')}</u>{' '}
            <Trans i18nKey="cla.definitions.contribution" t={t}>
              <strong>"Contribution"</strong> means any original work of authorship...
            </Trans>{' '}
            <Trans i18nKey="cla.definitions.submit" t={t}>
              <strong>"Submit"</strong> means any form of electronic...
            </Trans>
          </li>
          <li>
            <u>{t('cla.copyrightLicense.title')}</u> {t('cla.copyrightLicense.content')}
          </li>
          <li>
            <u>{t('cla.patentLicense.title')}</u> {t('cla.patentLicense.content')}
          </li>
          <li>
            <u>{t('cla.representations.title')}</u> {t('cla.representations.intro')}
            <ul>
              <li>{t('cla.representations.item1')}</li>
              <li>{t('cla.representations.item2')}</li>
              <li>{t('cla.representations.item3')}</li>
            </ul>
          </li>
          <li>
            <u>{t('cla.support.title')}</u> {t('cla.support.content')}
          </li>
          <li>
            <u>{t('cla.thirdParty.title')}</u> {t('cla.thirdParty.content')}
          </li>
          <li>
            <u>{t('cla.notice.title')}</u> {t('cla.notice.content')}
          </li>
          <li>
            <u>{t('cla.general.title')}</u> {t('cla.general.content')}
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
              <strong>{t('cla.signature.yourName')} __________________________________</strong>
              <br />
            </p>
            <p>
              <strong>{t('cla.signature.by')} __________________________________</strong>
              <br />
            </p>
            <p>
              <strong>{t('cla.signature.date')} ____/____/____</strong>
              <br />
            </p>
            <p>
              <strong>{t('cla.signature.email')} __________________________________</strong>
              <br />
            </p>
          </div>
          <div>
            <p>
              <strong>{t('cla.signature.heroicLabs')}</strong>
            </p>
            <p>
              <strong>{t('cla.signature.by')} __________________________________</strong>
              <br />
            </p>
            <p>
              <strong>{t('cla.signature.date')} ____/____/____</strong>
              <br />
            </p>
          </div>
        </div>
      </footer>
      <div className="container">
        <button onClick={() => window.print()}>{t('cla.printButton')}</button>
      </div>
    </>
  )
}

export default Cla
