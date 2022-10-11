import React from "react"
import { TBlogAdsProp } from "@/common/types/TBlogAds"
import Carousel, { CarouselItem } from "../../common/carousel"
import IncreaseNumber from "../../common/increaseNumber"
import Swiper from "../../common/swiper"
import AnimatedText from "../../common/animatedText"
import { getStrapiMedia } from "@/common/helpers/media"

const BlogAds = (prop: TBlogAdsProp) => {
  const {
    title,
    description,
    articles,
    banner,
    postNumber,
    visiterNumber,
    categories,
  } = prop?.attributes ?? {}
  return (
    <>
      <section className="pt-sm-8 pb-5 position-relative bg-gradient-dark">
        <div className="position-absolute w-100 z-inde-1 top-0 mt-n3">
          <svg
            width="100%"
            viewBox="0 -2 1920 157"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>wave-down</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fill="#FFFFFF" fillRule="nonzero">
                <g id="wave-down">
                  <path
                    d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z"
                    id="Path-Copy-2"
                    transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-start mb-4 mt-4">
              <h3 className="text-white z-index-1 position-relative">
                {title}
              </h3>
              <p className="text-white opacity-8 mb-0">
                <AnimatedText text={description?.split(".")} loop />
              </p>
            </div>
          </div>
          <div className="row">
            {(categories.data || []).map((item, itemIndex) => {
              const { name, description } = item?.attributes || {}
              return (
                <div key={itemIndex} className="col-lg-4 mb-4">
                  <div className="info-horizontal bg-gray-100 border-radius-xl p-5 h-100">
                    <h4 className="text-primary text-bold">{name}</h4>
                    <p className="text-dark">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card card-profile overflow-hidden z-index-2 p-3 rounded-2">
                <Carousel id={"blogArticles"} height={300} showIndicators>
                  {(articles?.data || []).map((item, itemIndex) => {
                    const { title, description, image } = item?.attributes ?? {}
                    return (
                      <CarouselItem key={itemIndex} active={itemIndex === 0}>
                        <div className="page-header" style={{ height: 300 }}>
                          <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
                            <div
                              className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                              style={{
                                backgroundImage: `url('${getStrapiMedia(
                                  image
                                )}')`,
                              }}
                            ></div>
                          </div>
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
                                <h4 className="text-gradient text-primary">
                                  {title}
                                </h4>
                                <p className="text-dark pe-5 me-5">
                                  {description}
                                </p>
                                <div className="buttons">
                                  <button
                                    type="button"
                                    className="btn bg-gradient-primary mt-4"
                                  >
                                    Read more
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    )
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute w-100 bottom-0 mn-n1">
          <svg
            width="100%"
            viewBox="0 -1 1920 166"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>wave-up</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(0.000000, 5.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <g id="wave-up" transform="translate(0.000000, -5.000000)">
                  <path
                    d="M0,70 C298.666667,105.333333 618.666667,95 960,39 C1301.33333,-17 1621.33333,-11.3333333 1920,56 L1920,165 L0,165 L0,70 Z"
                    fill="#f8f9fa"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </section>
      <section className="pt-2 pb-6 bg-gray-100">
        <div className="container">
          <div className="row mx-auto mb-4 text-center">
            <div className="col-lg-12">
              <Swiper id="bannerBlogAds" height={150} slidesPerView={4}>
                {(banner?.data || []).map((item, itemIndex) => {
                  const { url } = item?.attributes || {}
                  return (
                    <div key={itemIndex} className="swiper-slide">
                      <img
                        style={{
                          width: 200,
                          height: 100,
                          objectFit: "contain",
                        }}
                        src={url}
                        alt="logo"
                      />
                    </div>
                  )
                })}
              </Swiper>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-3">
              <h1 className="text-gradient text-info">
                <IncreaseNumber initValue={0} countTo={postNumber || 0} />
              </h1>
              <h5>Posts</h5>
            </div>
            <div className="col-md-3">
              <h1 className="text-gradient text-info">
                <IncreaseNumber initValue={0} countTo={visiterNumber || 0} />+
              </h1>
              <h5>Visiters</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogAds
