import React from "react"
import Carousel from "./carousel"

const BlogAds = () => {
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
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill="#FFFFFF" fill-rule="nonzero">
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
            <div className="col-md-8 text-start mb-5 mt-5">
              <h3 className="text-white z-index-1 position-relative">
                Featured Blog
              </h3>
              <p className="text-white opacity-8 mb-0">
                Top 10 latest articles on my blog
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card card-profile overflow-hidden z-index-2 p-1 rounded-2">
                <Carousel id={"blogArticles"} height={400} showIndicators />
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
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(0.000000, 5.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
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
      <section className="pt-2 pb-6 bg-gray-100" id="count-stats">
        <div className="container">
          <div className="row mb-7">
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="/img/logos/gray-logos/logo-coinbase.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="/img/logos/gray-logos/logo-nasa.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="/img/logos/gray-logos/logo-netflix.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="/img/logos/gray-logos/logo-pinterest.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="/img/logos/gray-logos/logo-spotify.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="/img/logos/gray-logos/logo-vodafone.svg"
                alt="logo"
              />
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-3">
              <h1
                className="text-gradient text-info"
                id="state1"
                data-count-to="5234"
              >
                0
              </h1>
              <h5>Projects</h5>
              <p>
                Of “high-performing” level are led by a certified project
                manager
              </p>
            </div>
            <div className="col-md-3">
              <h1 className="text-gradient text-info">
                <span id="state2" data-count-to="3400">
                  0
                </span>
                +
              </h1>
              <h5>Hours</h5>
              <p>That meets quality standards required by our users</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogAds
