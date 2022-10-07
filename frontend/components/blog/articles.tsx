import React from "react"
import Card from "../common/card"

const Articles = ({ articles }) => {
  return (
    <div className="container">
      <div className="row">
        {(articles || []).map((article, i) => {
          return <Card article={article} key={`${article.attributes.slug}`} />
        })}
      </div>
    </div>
  )
}

export default Articles
