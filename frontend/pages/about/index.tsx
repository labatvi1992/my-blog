import React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/seo"

const About = ({ global }) => {
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.seo} />
      <section className="py-sm-7 py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row py-5">
                <div className="col-lg-3 col-md-5 position-relative my-auto">
                  <img
                    className="img border-radius-lg max-width-200 w-100 position-relative z-index-2"
                    src="/img/bruce-mars.jpg"
                    alt="bruce"
                  />
                </div>
                <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-sm-0 mt-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="mb-0">Michael Roven</h4>
                    <div className="d-block">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-info text-nowrap mb-0"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-auto">
                      <span className="h6">323</span>
                      <span>Posts</span>
                    </div>
                    <div className="col-auto">
                      <span className="h6">3.5k</span>
                      <span>Followers</span>
                    </div>
                    <div className="col-auto">
                      <span className="h6">260</span>
                      <span>Following</span>
                    </div>
                  </div>
                  <p className="text-lg mb-0">
                    Decisions: If you can’t decide, the answer is no. If two
                    equally difficult paths, choose the one more painful in the
                    short term (pain avoidance is creating an illusion of
                    equality). Choose the path that leaves you more equanimous.{" "}
                    <br />
                    <a
                      href="javascript:;"
                      className="text-info icon-move-right"
                    >
                      More about me
                      <i className="fas fa-arrow-right text-sm ms-1"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
