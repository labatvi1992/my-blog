import React from "react"
import { useTranslation } from "next-i18next"
import { TFeaturedGalleryProp } from "@/common/types/TFeaturedGallery"
import Section from "../../common/section"
import Carousel, { CarouselItem } from "../../common/carousel"
import Swiper from "../../common/swiper"
import AnimatedText from "../../common/animatedText"

const GALLERY_ROW_HEIGHT = 320

const FeaturedGallery = (prop: TFeaturedGalleryProp) => {
  const { data } = prop || {}
  const { title, description, gallery, categories } = data?.attributes || {}
  const { t, i18n } = useTranslation("common", { useSuspense: false })
  return (
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
                  return (
                    <CarouselItem key={itemIndex} active={itemIndex === 0}>
                      <img
                        src={item?.attributes?.url}
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
                {(categories.data || []).map((item, itemIndex) => {
                  const { name, description } = item.attributes || {}
                  return (
                    <div key={itemIndex} className="swiper-slide">
                      <div className="info-horizontal bg-gray-100 border-radius-xl p-5 h-100">
                        <h4 className="text-gradient text-primary text-bold">
                          {name}
                        </h4>
                        <p className="text-dark">{description}</p>
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
  )
}

export default FeaturedGallery
