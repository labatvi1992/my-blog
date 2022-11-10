import { useEffect, useRef, useState, MouseEvent, ChangeEvent } from "react"
import { debounce } from "lodash"
import { useRouter } from "next/router"
import { Trans } from "next-i18next"
import { TBlogCategoryProp } from "@/common/types/TBlogCategory"

declare var Isotope: any

const Categories = (prop: TBlogCategoryProp) => {
  const { data, articleCount, children } = prop || {}
  const tabRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isoTope, setIsoTope] = useState(null)
  const router = useRouter()

  const onLoadData = (e: MouseEvent<HTMLLIElement>, slug?: string) => {
    e.preventDefault()
    if (tabRef?.current) {
      const navItems = tabRef.current.querySelectorAll("li.nav-item")
      navItems.forEach(function (navItem) {
        navItem.classList.remove("filter-active")
      })
      const li: HTMLLIElement = e?.currentTarget
      li?.classList?.add("filter-active")
      isoTope.arrange({
        filter: li?.getAttribute("data-filter"),
      })
    }
    if (slug) {
      router.push(`/blog/${slug}`, undefined, { scroll: false })
    } else {
      router.push("/blog/", undefined, { scroll: false })
    }
  }

  const onFilter = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target?.value
    console.log("key: ", key)
  }, 500)

  useEffect(() => {
    const categoriesIsoTope = new Isotope(containerRef?.current, {
      itemSelector: ".article-item",
    })
    categoriesIsoTope.arrange()
    setIsoTope(categoriesIsoTope)
    return () => categoriesIsoTope.destroy()
  }, [])

  return (
    <div className="row">
      <div className="col-lg-12">
        <h3 className="text-dark text-center mt-3">
          <Trans ns="blog">Category</Trans>
        </h3>
        <div className="row" data-aos="fade">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="nav-wrapper">
              <ul
                ref={tabRef}
                className="categories-nav nav nav-pills nav-fill p-1"
                role="tablist"
              >
                <li
                  className={`nav-item d-flex align-items-center px-3 rounded-pill ${
                    router.query?.slug ? "" : "filter-active"
                  }`}
                  data-filter="*"
                  onClick={(e) => onLoadData(e)}
                >
                  <a className="nav-link mb-0 px-0 py-1">
                    <Trans ns="blog">All</Trans>
                  </a>
                </li>
                {(data || []).map((item, itemIndex) => {
                  const { name, slug } = item?.attributes || {}
                  return (
                    <li
                      className={`nav-item d-flex align-items-center px-3 rounded-pill ${
                        router.query?.slug === slug ? "filter-active" : ""
                      }`}
                      key={itemIndex}
                      data-filter={`.filter-${item.id}`}
                      onClick={(e) => onLoadData(e, slug)}
                    >
                      <a className={`nav-link mb-0 px-0 py-1`}>{name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-space-between py-2">
          <div className="col-lg-4 mx-auto">
            <div className="form-group form-inline">
              <Trans i18nKey="Filter label" ns="blog">
                <label className="me-2">Filter by blog title</label>
              </Trans>
              <input type="text" className="form-control" onChange={onFilter} />
            </div>
          </div>
        </div>
        <h4 className="my-4">
          <Trans i18nKey="Found post" ns="blog">
            <strong>{{ articleCount }}</strong> posts found
          </Trans>
        </h4>
        <div ref={containerRef} className="row" data-aos="fade">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Categories
