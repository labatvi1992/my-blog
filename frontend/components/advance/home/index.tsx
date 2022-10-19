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

export default Home
