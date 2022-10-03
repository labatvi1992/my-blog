import { useEffect } from "react"
import { TSwiperProp } from "@/common/types/TSwiper"

declare var Swiper: any

const SwiperSlider = (prop: TSwiperProp) => {
  const { id, width, height, slidesPerView, showNavigation, children } =
    prop || {}

  useEffect(() => {
    const options = {
      // Optional parameters
      slidesPerView: slidesPerView || 1,
      loop: true,
      autoplay: {
        delay: 3000,
      },

      // If we need pagination
      pagination: {
        el: `.swiper-pagination-${id}`,
      },
    }
    if (showNavigation) {
      options["navigation"] = {
        nextEl: `.swiper-button-next-${id}`,
        prevEl: `.swiper-button-prev-${id}`,
      }
    }
    const swiper = new Swiper(`.${id}`, options)
    return () => {
      swiper.destroy()
    }
  }, [])

  return (
    <div className={`swiper ${id}`} style={{ width: width, height: height }}>
      <div className="swiper-wrapper">{children}</div>

      <div className={`swiper-pagination swiper-pagination-${id}`}></div>
      {showNavigation && (
        <>
          <div className={`swiper-button-prev swiper-button-prev-${id}`}></div>
          <div className={`swiper-button-next swiper-button-next-${id}`}></div>
        </>
      )}
    </div>
  )
}

export default SwiperSlider
