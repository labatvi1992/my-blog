import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useGlobalContext } from "@/components/common/globalContext"
import { THomeData, THomeProp } from "@/common/types/THome"
import FeaturedBlog from "@/components/advance/home/featuredBlog"
import FeaturedGallery from "@/components/advance/home/featuredGallery"
import Subscribe from "@/components/advance/home/subscribe"
import Welcome from "@/components/advance/home/welcome"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"
import apolloClient from "@/common/helpers/apolloClient"
import HOME_QUERY from "@/common/queries/homeQuery"

const Home = (prop: THomeProp) => {
  const global = useGlobalContext()
  const { homepage, featuredGallery, featuredBlog } = prop.data || {}
  return (
    <Layout global={global}>
      <Seo seo={homepage?.data?.attributes?.seo} />
      <Welcome data={homepage?.data?.attributes?.welcome} />
      <FeaturedGallery data={featuredGallery?.data} />
      <FeaturedBlog data={featuredBlog?.data} />
      <Subscribe />
    </Layout>
  )
}

export const getServerSideProps = async ({ locale }) => {
  const response = await apolloClient.query<THomeData | null>({
    query: HOME_QUERY,
    variables: { locale },
  })
  return {
    props: {
      ...response,
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  }
}

export default Home
