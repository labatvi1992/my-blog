import React from "react"
import { TCarouselProp } from "@/common/types/TCarousel"

const Carousel = (prop: TCarouselProp) => {
  const { id, height, showIndicators, showArrows, children } = prop || {}
  return (
    <div
      id={id}
      className="carousel slide"
      style={{ height }}
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {showIndicators && (
        <div className="carousel-indicators">
          {(children || []).map((item, itemIndex) => {
            return (
              <button
                key={itemIndex}
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide-to={itemIndex}
                className={itemIndex == 0 ? "active" : ""}
                aria-current="true"
                aria-label={`${itemIndex}`}
              />
            )
          })}
        </div>
      )}
      <div className="carousel-inner border-radius-sm">{children}</div>
      {showArrows && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  )
}

export default Carousel
