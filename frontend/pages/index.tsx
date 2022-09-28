import React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/seo"
import Welcome from "@/components/welcome"
import EcommerceAds from "@/components/ecommerceAds"
import BlogAds from "@/components/blogAds"
import Subscribe from "@/components/subscribe"
import { fetchAPI } from "@/common/helpers/api"

const Home = ({ global, homepage }) => {
  const welcome = homepage?.attributes?.welcome ?? {}
  return (
    <Layout global={global}>
      <Seo seo={homepage?.attributes?.seo} />
      <Welcome {...welcome} />
      <EcommerceAds />
      <BlogAds />
      <Subscribe />
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
