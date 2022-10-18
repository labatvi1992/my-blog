import { fetchAPI } from "@/common/helpers/api"
import { THomePageProp } from "@/common/types/THomePage"
import { useGlobalContext } from "@/components/common/globalContext"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"
import FeaturedBlog from "./featuredBlog"
import FeaturedGallery from "./featuredGallery"
import Subscribe from "./subscribe"
import Welcome from "./welcome"

const Home = (prop: THomePageProp) => {
  const global = useGlobalContext()
  const { homepage, featuredGallery, featuredBlog } = prop || {}
  return (
    <Layout global={global}>
      <Seo seo={homepage?.attributes?.seo} />
      <Welcome data={homepage?.attributes?.welcome} />
      <FeaturedGallery data={featuredGallery} />
      <FeaturedBlog data={featuredBlog} />
      <Subscribe />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  // Run API calls in parallel
  const [homepageRes, featuredGalleryRes, featuredBlogRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        seo: { populate: "*" },
        welcome: { populate: "*" },
      },
    }),
    fetchAPI("/featured-gallery", {
      populate: {
        gallery: { populate: "*" },
        articles: { populate: "*" },
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
      featuredGallery: featuredGalleryRes.data,
      featuredBlog: featuredBlogRes.data,
    },
    revalidate: 1,
  }
}

export default Home
