import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useGlobalContext } from "@/components/common/globalContext"
import { TPageProp } from "@/common/types/TPage"
import { TProfileResponse } from "@/common/types/TProfile"
import Profile from "@/components/advance/about/profile"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"
import apolloClient from "@/common/helpers/apolloClient"
import ABOUT_QUERY from "@/common/queries/aboutQuery"

type TAboutProp = {} & TPageProp<TProfileResponse>

const About = ({ data }: TAboutProp) => {
  const global = useGlobalContext()
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.defaultSeo} />
      <Profile data={data?.profile?.data} />
    </Layout>
  )
}

export const getServerSideProps = async ({ locale }) => {
  const response = await apolloClient.query<TProfileResponse | null>({
    query: ABOUT_QUERY,
    variables: { locale },
  })
  return {
    props: {
      ...response,
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  }
}

export default About
