import React from "react"
import { useTranslation } from "react-i18next"
import { TProductAdsProp } from "@/common/types/TProductAds"
import Section from "./section"
import Carousel from "./carousel/carousel"
import CarouselItem from "./carousel/carouselItem"
import Swiper from "./swiper"
import { getStrapiMedia } from "@/common/helpers/media"

const ProductAds = (prop: TProductAdsProp) => {
  const { title, galleryAds, productAds } = prop.attributes || {}
  const { t } = useTranslation("common", { useSuspense: false })
  return (
    <>
      <Section
        header={{
          title: <h3 className="text-dark">{title}</h3>,
        }}
      >
        <div className="container mb-3 px-3">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 p-1">
              <Carousel
                id={"galleryAds"}
                height={400}
                showIndicators
                showArrows
              >
                {(galleryAds.data || []).map((item, itemIndex) => {
                  return (
                    <CarouselItem key={itemIndex} active={itemIndex === 0}>
                      <img
                        src={item?.attributes?.url}
                        className="d-block w-100"
                        style={{ objectFit: "cover" }}
                        height={400}
                        alt=""
                      />
                    </CarouselItem>
                  )
                })}
              </Carousel>
            </div>
            <div className="col-lg-4 col-md-6 p-1">
              <Swiper id={"productAds"} height={400}>
                {(productAds.data || []).map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className="swiper-slide">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={getStrapiMedia(item?.attributes.image)}
                          className="d-block"
                          style={{ width: 300, objectFit: "cover" }}
                          height={300}
                          alt=""
                        />
                        <div
                          className="d-flex flex-column justify-content-end"
                          style={{ height: 100 }}
                        >
                          <div className="text-bold">
                            {item?.attributes?.name}
                          </div>
                          <div>{item?.attributes?.price}</div>
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
  )
}

export default ProductAds
