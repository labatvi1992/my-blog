import { useEffect, useRef, useState, MouseEvent } from "react"
import { TBlogCategoryProp } from "@/common/types/TBlogCategory"

declare var Isotope: any

const Categories = (prop: TBlogCategoryProp) => {
  const { data, children } = prop || {}
  const tabRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isoTope, setIsoTope] = useState(null)

  const onLoadData = (e: MouseEvent<HTMLLIElement>, id?: number) => {
    console.log("load data", id)
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
  }

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
        <h3 className="text-dark text-center mt-3">Danh mục</h3>
        <div className="row" data-aos="fade">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="nav-wrapper">
              <ul
                ref={tabRef}
                className="categories-nav nav nav-pills nav-fill p-1"
                role="tablist"
              >
                <li
                  className="nav-item d-flex align-items-center px-3 rounded-pill filter-active"
                  data-filter="*"
                  onClick={(e) => onLoadData(e)}
                >
                  <a className="nav-link mb-0 px-0 py-1">All</a>
                </li>
                {(data || []).map((item, itemIndex) => {
                  const { name } = item?.attributes || {}
                  return (
                    <li
                      className="nav-item d-flex align-items-center px-3 rounded-pill"
                      key={itemIndex}
                      data-filter={`.filter-${item.id}`}
                      onClick={(e) => onLoadData(e, item.id)}
                    >
                      <a className={`nav-link mb-0 px-0 py-1`}>{name}</a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <h4 className="my-4">
          Tìm thấy tất cả <strong>3</strong> bài viết
        </h4>
        <div ref={containerRef} className="row" data-aos="fade">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Categories
