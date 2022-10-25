import { fetchAPI } from "@/common/helpers/api"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useGlobalContext } from "@/components/common/globalContext"
import { THomePageProp } from "@/common/types/THomePage"
import FeaturedBlog from "@/components/advance/home/featuredBlog"
import FeaturedGallery from "@/components/advance/home/featuredGallery"
import Subscribe from "@/components/advance/home/subscribe"
import Welcome from "@/components/advance/home/welcome"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"

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

export const getServerSideProps = async ({ locale }) => {
  const [homepageRes, featuredGalleryRes, featuredBlogRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        seo: { populate: "*" },
        welcome: { populate: "*" },
      },
      locale,
    }),
    fetchAPI("/featured-gallery", {
      populate: {
        gallery: { populate: "*" },
        articles: { populate: "*" },
      },
      locale,
    }),
    fetchAPI("/featured-blog", {
      populate: {
        articles: { populate: "*" },
        banner: { populate: "*" },
        categories: { populate: "*" },
      },
      locale,
    }),
  ])

  return {
    props: {
      homepage: homepageRes.data,
      featuredGallery: featuredGalleryRes.data,
      featuredBlog: featuredBlogRes.data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

export default Home
