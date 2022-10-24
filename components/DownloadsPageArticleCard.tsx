import { JSXElementConstructor, ReactElement } from "react"

interface Article {
  className: string,
  articleTitle: string,
  articleDescription: string,
  children:ReactElement
}

const DownloadsPageArticleCard = ({className, articleTitle, articleDescription, children}:Article) => {
  return (
    <article className={className}>
      <h4>{articleTitle}</h4>
      <p>
        {articleDescription}
      </p>
      <footer>
        {children}
      </footer>
    </article>
  )
}

export default DownloadsPageArticleCard