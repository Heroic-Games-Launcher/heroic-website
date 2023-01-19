import { JSXElementConstructor, ReactElement } from 'react'

interface Article {
  className: string
  articleTitle: string
  articleDescription: string
  sampleCode?: string
  children: ReactElement
}

const DownloadsPageArticleCard = ({
  className,
  articleTitle,
  articleDescription,
  sampleCode,
  children
}: Article) => {
  let sampleCodeInDescription = sampleCode === undefined ? <></> : <code>{sampleCode}</code>
  return (
    <article className={className}>
      <h4>{articleTitle}</h4>
      <p>
        {articleDescription}
        {sampleCodeInDescription}
      </p>
      <footer>{children}</footer>
    </article>
  )
}

export default DownloadsPageArticleCard
