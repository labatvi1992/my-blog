import { TBlogCategoryProp } from "@/common/types/TBlogCategory"

const Categories = (prop: TBlogCategoryProp) => {
  const { data } = prop || {}
  return (
    <div className="row">
      <div className="col-lg-12">
        <h4 className="text-dark text-center mt-3">Categories</h4>
        <div className="row">
          <div className="col-4 mx-auto">
            <div className="nav-wrapper position-relative end-0">
              <ul className="nav nav-pills nav-fill p-1" role="tablist">
                {(data || []).map((item, itemIndex) => {
                  const { name } = item?.attributes || {}
                  return (
                    <li className="nav-item" key={itemIndex}>
                      <a
                        className={`nav-link mb-0 px-0 py-1 ${
                          itemIndex === 0 ? "active" : ""
                        }`}
                        data-bs-toggle="tab"
                        href="#profile-tabs-simple"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="true"
                      >
                        {name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
