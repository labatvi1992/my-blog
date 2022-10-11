import React from "react"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"
import Welcome from "@/components/advance/home/welcome"
import FeaturedProduct from "@/components/advance/home/featuredProduct"
import FeaturedBlog from "@/components/advance/home/featuredBlog"
import Subscribe from "@/components/advance/home/subscribe"
import { fetchAPI } from "@/common/helpers/api"

const Home = ({ global, homepage, featuredProduct, featuredBlog }) => {
  const welcome = homepage?.attributes?.welcome ?? {}
  return (
    <Layout global={global}>
      <Seo seo={homepage?.attributes?.seo} />
      <Welcome data={welcome} />
      <FeaturedProduct data={featuredProduct} />
      <FeaturedBlog data={featuredBlog} />
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
        saleProducts: { populate: "*" },
      },
    }),
    fetchAPI("/featured-blog", {
      populate: {
        articles: { populate: "*" },
        banner: { populate: "*" },
        categories: { populate: "*" },
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
