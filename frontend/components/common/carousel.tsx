import React, { useEffect, useRef } from "react"
import { TCarouselItemProp, TCarouselProp } from "@/common/types/TCarousel"

declare var bootstrap: any

const CarouselItem = (prop: TCarouselItemProp) => {
  const { active, children } = prop || {}
  return (
    <div className={`carousel-item ${active ? "active" : ""}`}>{children}</div>
  )
}

const Carousel = (prop: TCarouselProp) => {
  const { id, height, showIndicators, showArrows, children } = prop || {}
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    var carousel = new bootstrap.Carousel(ref.current, {
      interval: 3000,
      ride: "carousel",
      wrap: true,
    })
    return () => {
      carousel.pause()
      setTimeout(() => {
        carousel.dispose()
      }, 100)
    }
  }, [])

  return (
    <div id={id} className="carousel slide" style={{ height }} ref={ref}>
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

export { CarouselItem }
export default Carousel
