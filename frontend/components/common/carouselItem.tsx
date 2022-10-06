import { TCarouselItemProp } from "@/common/types/TCarousel"

const CarouselItem = (prop: TCarouselItemProp) => {
  const { active, children } = prop || {}
  return (
    <div className={`carousel-item ${active ? "active" : ""}`}>{children}</div>
  )
}

export default CarouselItem
