import { fetchAPI } from "@/common/helpers/api"
import { TProfileData } from "@/common/types/TProfile"
import { useGlobalContext } from "@/components/common/globalContext"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"
import Profile from "./profile"

type TAboutProp = {
  profile?: TProfileData
}

const About = ({ profile }: TAboutProp) => {
  const global = useGlobalContext()
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.defaultSeo} />
      <Profile data={profile} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [profileRes] = await Promise.all([
    fetchAPI("/profile", {
      populate: {
        welcome: { populate: "*" },
        avatar: { populate: "*" },
        projects: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      profile: profileRes.data,
    },
    revalidate: 1,
  }
}

export default About
