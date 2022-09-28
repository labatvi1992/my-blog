import React from "react"
import Articles from "@/components/articles"
import Layout from "@/components/layout"
import Seo from "@/components/seo"
import Welcome from "@/components/welcome"
import EcommerceAds from "@/components/ecommerceAds"
import { fetchAPI } from "@/common/helpers/api"

const Home = ({ global, articles, homepage }) => {
  const welcome = homepage?.attributes?.welcome ?? {}
  return (
    <Layout global={global}>
      <Seo seo={homepage?.attributes?.seo} />
      <Welcome {...welcome} />
      <EcommerceAds />
      <section className="py-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
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
        welcome: { populate: "*" },
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
