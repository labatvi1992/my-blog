import { useTranslation } from "next-i18next"
import { TBlogWelcomeProp } from "@/common/types/TBlog"
import { getStrapiMedia } from "@/common/helpers/media"
import AnimatedText from "@/components/common/animatedText"
import Hero from "@/components/common/hero"
import Seo from "@/components/common/seo"
import { useMemo } from "react"

const BlogWelcome = (prop: TBlogWelcomeProp) => {
  const { global } = prop || {}
  const { t } = useTranslation("blog")

  const component = useMemo(
    () => (
      <>
        <Seo seo={global?.attributes?.defaultSeo} />
        <Hero
          backgroundImage={getStrapiMedia(
            global?.attributes?.defaultSeo?.shareImage
          )}
        >
          <h2 id="welcome-title" className="text-white text-truncate">
            <AnimatedText text={[t("Welcome you to my blog")]} loop />
          </h2>
        </Hero>
      </>
    ),
    [global, t]
  )

  return component
}

export default BlogWelcome
