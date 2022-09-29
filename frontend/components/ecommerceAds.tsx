import React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { TEcommerceAdsProp } from "@/common/types/TEcommerceAds"
import Section from "./section"
import Carousel from "./carousel/carousel"
import CarouselItem from "./carousel/carouselItem"
import { getStrapiMedia } from "@/common/helpers/media"

const EcommerceAds = (prop: TEcommerceAdsProp) => {
  const { galleryAds, productAds } = prop.attributes || {}
  const { t } = useTranslation("common", { useSuspense: false })
  return (
    <>
      <Section
        header={{
          title: <h3 className="text-dark">{t("Featured Products")}</h3>,
          right: (
            <Link href={t("StoreUrl", "/")}>
              <a className="text-info icon-move-right">
                More
                <i
                  className="fas fa-arrow-right text-sm ms-1"
                  aria-hidden="true"
                />
              </a>
            </Link>
          ),
        }}
      >
        <div className="container mb-3 px-3">
          <div className="row align-items-center">
            <div className="col-md-8 p-1">
              <Carousel
                id={"ecommerceGalleryAds"}
                height={300}
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
                        height={300}
                        alt=""
                      />
                    </CarouselItem>
                  )
                })}
              </Carousel>
            </div>
            <div className="col-md-4 p-1">
              <Carousel id={"ecommerceProductAds"} height={300} showIndicators>
                {(productAds.data || []).map((item, itemIndex) => {
                  return (
                    <CarouselItem key={itemIndex} active={itemIndex === 0}>
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={getStrapiMedia(item?.attributes.image)}
                          className="d-block"
                          style={{ width: 220, objectFit: "cover" }}
                          height={220}
                          alt=""
                        />
                        <div
                          className="d-flex flex-column justify-content-end"
                          style={{ height: 80 }}
                        >
                          <div className="text-bold">
                            {item?.attributes?.name}
                          </div>
                          <div>{item?.attributes?.price}</div>
                        </div>
                      </div>
                    </CarouselItem>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default EcommerceAds
