import React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import Section from "./section"
import Carousel from "./carousel"

const EcommerceAds = () => {
  const { t } = useTranslation("common", { useSuspense: false })
  return (
    <>
      <Section
        header={{
          title: (
            <span className="badge bg-light text-dark">
              <i className="fas fa-magic me-1" aria-hidden="true" />{" "}
              {t("Featured products")}
            </span>
          ),
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
              />
            </div>
            <div className="col-md-4 p-1">
              <Carousel
                id={"ecommerceProductAds"}
                height={300}
                showIndicators
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default EcommerceAds
