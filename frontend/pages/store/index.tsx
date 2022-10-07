import React from "react"
import Layout from "@/components/common/layout"
import Seo from "@/components/common/seo"
import AnimatedText from "@/components/common/animatedText"
import Hero from "@/components/common/hero"

const Store = ({ global }) => {
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.seo} />
      <Hero>
        <h2 id="welcome-title" className="text-white text-truncate">
          <AnimatedText text={["Store"]} loop />
        </h2>
      </Hero>
    </Layout>
  )
}

export default Store
