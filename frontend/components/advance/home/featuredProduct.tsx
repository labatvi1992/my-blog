import React from "react"
import { useTranslation } from "react-i18next"
import { TFeaturedProductProp } from "@/common/types/TFeaturedProduct"
import Section from "../../common/section"
import Carousel, { CarouselItem } from "../../common/carousel"
import Swiper from "../../common/swiper"
import AnimatedText from "../../common/animatedText"
import { getStrapiMedia } from "@/common/helpers/media"
import { formatNumber } from "@/common/helpers/format"

const GALLERY_ROW_HEIGHT = 300
const GALLERY_TEXT_ROW_HEIGHT = 80
const SALE_ROW_HEIGHT = 300
const SALE_IMAGE_ROW_HEIGHT = 180
const SALE_TEXT_ROW_HEIGHT = 80

const FeaturedProduct = (prop: TFeaturedProductProp) => {
  const { data } = prop || {}
  const { title, description, galleryAds, productAds, saleProducts } =
    data?.attributes || {}
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
                height={GALLERY_ROW_HEIGHT}
                showIndicators
                showArrows
              >
                {(galleryAds.data || []).map((item, itemIndex) => {
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
                {(productAds.data || []).map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className="swiper-slide">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={getStrapiMedia(item?.attributes.image)}
                          className="d-block p-3"
                          style={{
                            width: GALLERY_ROW_HEIGHT - GALLERY_TEXT_ROW_HEIGHT,
                            objectFit: "cover",
                          }}
                          height={GALLERY_ROW_HEIGHT - GALLERY_TEXT_ROW_HEIGHT}
                          alt=""
                        />
                        <div
                          className="d-flex flex-column justify-content-end w-100 px-3"
                          style={{ height: GALLERY_TEXT_ROW_HEIGHT }}
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
              <Swiper
                id={"saleProducts"}
                height={SALE_ROW_HEIGHT}
                slidesPerView={4}
              >
                {(saleProducts.data || []).map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className="swiper-slide">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={getStrapiMedia(item?.attributes.image)}
                          className="d-block"
                          style={{
                            width: SALE_IMAGE_ROW_HEIGHT,
                            objectFit: "cover",
                          }}
                          height={SALE_IMAGE_ROW_HEIGHT}
                          alt=""
                        />
                        <div
                          className="d-flex flex-column justify-content-end w-100 px-3"
                          style={{ height: SALE_TEXT_ROW_HEIGHT }}
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

export default FeaturedProduct
