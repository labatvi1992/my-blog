import React from "react"
import { useTranslation } from "react-i18next"
import { TProductAdsProp } from "@/common/types/TProductAds"
import Section from "../common/section"
import Carousel, { CarouselItem } from "../common/carousel"
import Swiper from "../common/swiper"
import AnimatedText from "../common/animatedText"
import { getStrapiMedia } from "@/common/helpers/media"
import { formatNumber } from "@/common/helpers/format"

const ProductAds = (prop: TProductAdsProp) => {
  const { title, description, galleryAds, productAds, saleProducts } =
    prop.attributes || {}
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
              <Swiper id={"productAds"} height={400} vertical>
                {(productAds.data || []).map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className="swiper-slide">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={getStrapiMedia(item?.attributes.image)}
                          className="d-block p-3"
                          style={{ width: 300, objectFit: "cover" }}
                          height={300}
                          alt=""
                        />
                        <div
                          className="d-flex flex-column justify-content-end w-100 px-3"
                          style={{ height: 100 }}
                        >
                          <div className="text-gradient text-primary text-truncate">
                            {item?.attributes?.name}
                          </div>
                          <div className="text-bold text-dark">
                            {formatNumber(
                              item?.attributes?.price,
                              0,
                              i18n.language
                            )}
                            đ
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 p-1">
              <Swiper id={"saleProducts"} height={300} slidesPerView={4}>
                {(saleProducts.data || []).map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className="swiper-slide">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={getStrapiMedia(item?.attributes.image)}
                          className="d-block"
                          style={{ width: 180, objectFit: "cover" }}
                          height={180}
                          alt=""
                        />
                        <div
                          className="d-flex flex-column justify-content-end w-100 px-3"
                          style={{ height: 80 }}
                        >
                          <div className="text-dark text-truncate">
                            {item?.attributes?.name}
                          </div>
                          <div className="text-bold text-danger">
                            {formatNumber(
                              item?.attributes?.price,
                              0,
                              i18n.language
                            )}
                            đ
                          </div>
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
