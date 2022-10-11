import React from "react"
import Link from "next/link"
import { getStrapiMedia } from "@/common/helpers/media"

const Card = ({ article }) => {
  const { name, title, image, slug, category } = article?.attributes || {}
  return (
    <Link href={`/blog/article/${slug}`}>
      <a className={`col-lg-4 article-item filter-${category?.data?.id}`}>
        <img
          className="rounded w-100"
          style={{ height: 200, objectFit: "cover" }}
          src={getStrapiMedia(image)}
          alt=""
        />
        <div className="text-dark">
          <h2>{name}</h2>
          <p className="text-dark">{title}</p>
        </div>
      </a>
    </Link>
  )
}

export default Card
