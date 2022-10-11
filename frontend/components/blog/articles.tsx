import React from "react"
import Card from "../common/card"

const Articles = ({ articles }) => {
  return (
    <>
      {(articles || []).map((article, i) => {
        return <Card article={article} key={`${article.attributes.slug}`} />
      })}
    </>
  )
}

export default Articles
