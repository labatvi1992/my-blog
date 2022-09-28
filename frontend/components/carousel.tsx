import React from "react"
import { TCarouselProp } from "@/common/types/TCarousel"

const Carousel = (prop: TCarouselProp) => {
  const { id, height, showIndicators, showArrows } = prop || {}
  return (
    <div
      id={id}
      className="carousel slide"
      style={{ height }}
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      {showIndicators && (
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
      )}
      <div className="carousel-inner border-radius-sm">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            height={height}
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            height={height}
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            height={height}
            src="https://images.unsplash.com/photo-1552793494-111afe03d0ca?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"
            alt="Third slide"
          />
        </div>
      </div>
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
