import React from "react"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"
import AnimatedText from "@/components/common/animatedText"
import Hero from "@/components/common/hero"
import { getStrapiMedia } from "@/common/helpers/media"

const Store = ({ global }) => {
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.defaultSeo} />
      <Hero
        backgroundImage={getStrapiMedia(
          global?.attributes?.defaultSeo?.shareImage
        )}
      >
        <h2 id="welcome-title" className="text-white text-truncate">
          <AnimatedText text={["Store"]} loop />
        </h2>
      </Hero>
      <section className="py-sm-5 py-5 min-vh-100">
        <div className="container"></div>
      </section>
    </Layout>
  )
}

export default Store
