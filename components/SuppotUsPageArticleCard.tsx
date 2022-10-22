interface Article {
  className?: string,
  articleTitle: string,
  articleSubTitle: string,
  articleContent: string,
  articleLink: string,
  articleLinkText: string,
}

const SuppotUsPageArticleCard = ({className, articleTitle, articleSubTitle, articleContent, articleLink, articleLinkText}:Article) => {
  return (
    <article className={className}>
      <h4>{articleTitle}</h4>
      <small>{articleSubTitle}</small>
      <p>
        {articleContent}
      </p>
      <footer>
        <a href={articleLink}>
          <strong>{articleLinkText}</strong>
        </a>
      </footer>
    </article>
  )
}

export default SuppotUsPageArticleCard