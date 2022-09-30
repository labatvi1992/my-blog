import React from "react"
import { TBlogAdsProp } from "@/common/types/TBlogAds"
import Carousel from "./carousel/carousel"
import CarouselItem from "./carousel/carouselItem"
import IncreaseNumber from "./increaseNumber"
import { getStrapiMedia } from "@/common/helpers/media"

const BlogAds = (prop: TBlogAdsProp) => {
  const { title, description, articles, banner } = prop?.attributes ?? {}
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
            <div className="col-md-12 text-start mb-5 mt-5">
              <h3 className="text-white z-index-1 position-relative">
                {title}
              </h3>
              <p className="text-white opacity-8 mb-0">{description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card card-profile overflow-hidden z-index-2 p-1 rounded-2">
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
                                <h3 className="text-gradient text-primary">
                                  {title}
                                </h3>
                                <p className="lead pe-5 me-5">{description}</p>
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
            {(banner?.data || []).map((item, itemIndex) => {
              const { url } = item?.attributes || {}
              return (
                <div key={itemIndex} className="col mb-4">
                  <img
                    style={{ width: 100, height: 50, objectFit: "contain" }}
                    src={url}
                    alt="logo"
                  />
                </div>
              )
            })}
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-3">
              <h1 className="text-gradient text-info">
                <IncreaseNumber initValue={0} countTo={5234} />
              </h1>
              <h5>Posts</h5>
            </div>
            <div className="col-md-3">
              <h1 className="text-gradient text-info">
                <IncreaseNumber initValue={0} countTo={3400} />+
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
