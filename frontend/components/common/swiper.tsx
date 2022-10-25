import { useEffect, useMemo } from "react"
import { TSwiperProp } from "@/common/types/TSwiper"

declare var Swiper: any

const SwiperSlider = (prop: TSwiperProp) => {
  const {
    id,
    width,
    height,
    slidesPerView,
    showNavigation,
    vertical,
    children,
  } = prop || {}

  const options = useMemo(
    () => ({
      direction: vertical ? "vertical" : "horizontal",
      slidesPerView: slidesPerView || 1,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: slidesPerView || 1,
        },
      },
      navigation: showNavigation
        ? {
            nextEl: `.swiper-button-next-${id}`,
            prevEl: `.swiper-button-prev-${id}`,
          }
        : false,
      pagination: {
        el: `.swiper-pagination-${id}`,
      },
    }),
    [id]
  )
  let swiper = undefined

  useEffect(() => {
    swiper = new Swiper(`#${id}`, options)
    return () => {
      swiper?.destroy(false, false)
    }
  }, [children])

  const component = useMemo(
    () => (
      <>
        <div className="swiper-wrapper">{children}</div>
        <div className={`swiper-pagination swiper-pagination-${id}`} />
      </>
    ),
    [children]
  )

  return (
    <div id={id} className="swiper" style={{ width: width, height: height }}>
      {component}
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
