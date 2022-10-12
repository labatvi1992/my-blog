import { fetchAPI } from "@/common/helpers/api"
import { THomePageProp } from "@/common/types/THomePage"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"
import FeaturedBlog from "./featuredBlog"
import FeaturedProduct from "./featuredProduct"
import Subscribe from "./subscribe"
import Welcome from "./welcome"

const Home = (prop: THomePageProp) => {
  const { global, homepage, featuredProduct, featuredBlog } = prop || {}
  const welcome = homepage?.attributes?.welcome
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

export async function getStaticProps({ locale }) {
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
