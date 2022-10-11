import React from "react"
import Card from "../../common/card"

const Articles = ({ articles }) => {
  return (
    <>
      {(articles || []).map((article) => {
        return <Card article={article} key={`${article.attributes.slug}`} />
      })}
    </>
  )
}

export default Articles
