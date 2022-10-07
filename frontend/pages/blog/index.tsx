import Seo from "@/components/common/seo"
import Layout from "@/components/common/layout"
import Hero from "@/components/common/hero"
import AnimatedText from "@/components/common/animatedText"

const Blog = ({ global }) => {
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.seo} />
      <Hero>
        <h2 id="welcome-title" className="text-white text-truncate">
          <AnimatedText text={["Blog"]} loop />
        </h2>
      </Hero>
    </Layout>
  )
}

export default Blog
