import { TBlogSectionProp } from "@/common/types/TBlog"
import Articles from "./articles"
import Categories from "./categories"

const BlogSection = (prop: TBlogSectionProp) => {
  const { categories, articles } = prop || {}
  return (
    <section className="py-sm-5 py-5 min-vh-100">
      <div className="container">
        <Categories
          data={categories || []}
          articleCount={articles?.length || 0}
        >
          <Articles articles={articles || []} />
        </Categories>
      </div>
    </section>
  )
}

export default BlogSection
