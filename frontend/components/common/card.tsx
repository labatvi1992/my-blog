import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  const { name, title, image, slug, category } = article?.attributes || {}
  return (
    <Link href={`/blog/article/${slug}`}>
      <a className={`col-lg-4 article-item filter-${category?.data?.id}`}>
        <NextImage image={image} />
        <div className="text-dark">
          <h2>{name}</h2>
          <p className="text-dark">{title}</p>
        </div>
      </a>
    </Link>
  )
}

export default Card
