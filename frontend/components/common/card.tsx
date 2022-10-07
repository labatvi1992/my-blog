import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ article }) => {
  const { name, title, image, slug } = article?.attributes || {}
  return (
    <Link href={`/blog/article/${slug}`}>
      <a className="col-lg-4">
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
