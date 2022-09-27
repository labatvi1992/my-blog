import React from "react"
import Articles from "@/components/articles"
import Layout from "@/components/layout"
import Seo from "@/components/seo"
import { fetchAPI } from "@/common/helpers/api"

const Home = ({ global, articles, homepage }) => {
  return (
    <Layout global={global}>
      <Seo seo={homepage?.attributes?.seo} />
      <header className="bg-gradient-dark">
        <div className="page-header min-vh-75" style={{
          backgroundImage: "url('/img/office-dark.jpg')"
        }}>
          <span className="mask bg-gradient-info opacity-8"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mx-auto my-auto">
                <h1 className="text-white">Work with an amazing design</h1>
                <p className="lead mb-4 text-white opacity-8">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game</p>
                <button type="submit" className="btn bg-white text-dark">Create Account</button>
                <h6 className="text-white mb-2 mt-5">Find us on</h6>
                <div className="d-flex justify-content-center">
                  <a href="javascript:;"><i className="fab fa-facebook text-lg text-white me-4"></i></a>
                  <a href="javascript:;"><i className="fab fa-instagram text-lg text-white me-4"></i></a>
                  <a href="javascript:;"><i className="fab fa-twitter text-lg text-white me-4"></i></a>
                  <a href="javascript:;"><i className="fab fa-google-plus text-lg text-white"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute w-100 z-index-1 bottom-0">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="moving-waves">
                <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
                <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
                <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1" />
              </g>
            </svg>
          </div>
        </div>
      </header>
      <section className="py-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1>{homepage?.attributes?.hero?.title}</h1>
              <Articles articles={articles} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
