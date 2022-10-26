import Moment from "react-moment"
import ReactMarkdown from "react-markdown"
import { useTranslation } from "next-i18next"
import NextImage from "@/components/common/image"
import { TBlogArticleSectionProp } from "@/common/types/TBlogArticle"

const ArticleSection = (prop: TBlogArticleSectionProp) => {
  const { article } = prop || {}
  const { content, author, publishedAt } = article?.attributes || {}
  const { t } = useTranslation("blog")

  return (
    <section className="py-sm-5 py-5 min-vh-100">
      <div className="container">
        {article ? (
          <>
            <div className="row">
              <div className="col-lg-12">
                <ReactMarkdown source={content} escapeHtml={false} />
              </div>
            </div>
            <div className="row pt-3 border-top">
              <div className="col-lg-12">
                <div className="d-flex">
                  {author?.data?.attributes?.picture && (
                    <div
                      className="border border-4 border-dark rounded-circle"
                      style={{ width: 128, height: 128 }}
                    >
                      <NextImage
                        className="rounded-circle"
                        image={author?.data?.attributes?.picture}
                      />
                    </div>
                  )}
                  <div className="d-flex flex-column px-3">
                    <p className="lead mb-0 text-dark">
                      {t("Author")}: {author?.data?.attributes?.name}
                    </p>
                    <p className="text-dark">
                      <Moment format="DD/MM/YYYY">{publishedAt}</Moment>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="row">
            <div className="col-lg-12">
              <h1>{t("Not found post")}</h1>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ArticleSection
