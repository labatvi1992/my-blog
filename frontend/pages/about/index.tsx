import React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/seo"
import Profile from "@/components/profile/profile"
import { fetchAPI } from "@/common/helpers/api"

const About = ({ global, profile }) => {
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.seo} />
      <Profile {...profile} />
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
