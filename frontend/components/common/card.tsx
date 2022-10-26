import React from "react"
import Link from "next/link"
import { getStrapiMedia } from "@/common/helpers/media"

const Card = ({ article }) => {
  const { title, image, slug, category, description } =
    article?.attributes || {}
  return (
    <Link href={`/blog/article/${slug}`}>
      <a className={`col-lg-4 article-item filter-${category?.data?.id}`}>
        <img
          className="rounded w-100"
          style={{ height: 200, objectFit: "cover" }}
          src={getStrapiMedia(image)}
          alt=""
        />
        <div className="text-dark mt-2">
          <h4 className="m-0">{title}</h4>
          <p className="text-dark">{description}</p>
        </div>
      </a>
    </Link>
  )
}

export default Card
