import { TBlogArticleWelcomeProp } from "@/common/types/TBlogArticle"
import AnimatedText from "@/components/common/animatedText"
import Hero from "@/components/common/hero"
import Seo from "@/components/common/seo"

const ArticleWelcome = (prop: TBlogArticleWelcomeProp) => {
  const { seo, title, image } = prop || {}

  return (
    <>
      <Seo seo={seo} />
      <Hero backgroundImage={image}>
        <h2 id="welcome-title" className="text-white text-truncate">
          <AnimatedText text={[title || ""]} loop />
        </h2>
      </Hero>
    </>
  )
}

export default ArticleWelcome
