import React, { useMemo } from "react"
import { TFeaturedGalleryProp } from "@/common/types/TFeaturedGallery"
import Section from "../../common/section"
import Carousel, { CarouselItem } from "../../common/carousel"
import Swiper from "../../common/swiper"
import AnimatedText from "../../common/animatedText"
import { getStrapiMedia } from "@/common/helpers/media"

const GALLERY_ROW_HEIGHT = 320

const FeaturedGallery = (prop: TFeaturedGalleryProp) => {
  const { data } = prop || {}
  const { title, description, gallery, articles } = data?.attributes || {}

  const component = useMemo(
    () => (
      <>
        <Section
          header={{
            title: (
              <>
                <h3 className="text-dark">{title}</h3>
                <div className="text-dark">
                  <AnimatedText text={`${description}`.split(".")} loop />
                </div>
              </>
            ),
          }}
        >
          <div className="container mb-4 px-3">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-6 p-1">
                <Carousel
                  id={"galleryAds"}
                  height={GALLERY_ROW_HEIGHT}
                  showIndicators
                  showArrows
                >
                  {(gallery.data || []).map((item, itemIndex) => {
                    const url = item?.attributes?.url
                    return (
                      <CarouselItem
                        key={`item-${itemIndex}`}
                        active={itemIndex === 0}
                      >
                        <img
                          src={url}
                          className="d-block w-100"
                          style={{ objectFit: "fill" }}
                          height={GALLERY_ROW_HEIGHT}
                          alt=""
                        />
                      </CarouselItem>
                    )
                  })}
                </Carousel>
              </div>
              <div className="col-lg-4 col-md-6 p-1">
                <Swiper id={"productAds"} height={GALLERY_ROW_HEIGHT} vertical>
                  {(articles.data || []).map((item) => {
                    const { title, slug, description, image } =
                      item.attributes || {}
                    return (
                      <div
                        key={slug}
                        className="swiper-slide page-header border-radius-xl"
                      >
                        <div
                          className="page-header border-radius-xl"
                          style={{
                            height: GALLERY_ROW_HEIGHT,
                            backgroundImage: `url('${getStrapiMedia(image)}')`,
                          }}
                        >
                          <span className="mask bg-gradient-dark opacity-1" />
                          <div className="d-flex flex-column justify-content-end p-4 h-100">
                            <h4 className="text-white text-bold text-shadow">
                              {title}
                            </h4>
                            <p className="text-white text-shadow">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </Section>
      </>
    ),
    [data]
  )
  return component
}

export default FeaturedGallery
