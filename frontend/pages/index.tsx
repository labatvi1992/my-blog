import React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/seo"
import Welcome from "@/components/welcome"
import EcommerceAds from "@/components/ecommerceAds"
import BlogAds from "@/components/blogAds"
import Subscribe from "@/components/subscribe"
import { fetchAPI } from "@/common/helpers/api"

const Home = ({ global, homepage, featuredProduct, featuredBlog }) => {
  const welcome = homepage?.attributes?.welcome ?? {}
  return (
    <Layout global={global}>
      <Seo seo={homepage?.attributes?.seo} />
      <Welcome {...welcome} />
      <EcommerceAds {...featuredProduct} />
      <BlogAds {...featuredBlog} />
      <Subscribe />
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes, featuredProductRes, featuredBlogRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        seo: { populate: "*" },
        welcome: { populate: "*" },
      },
    }),
    fetchAPI("/featured-product", {
      populate: {
        galleryAds: { populate: "*" },
        productAds: { populate: "*" },
      },
    }),
    fetchAPI("/featured-blog", {
      populate: {
        articles: { populate: "*" },
        banner: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      homepage: homepageRes.data,
      featuredProduct: featuredProductRes.data,
      featuredBlog: featuredBlogRes.data,
    },
    revalidate: 1,
  }
}

export default Home
