import { Chrono } from "react-chrono"
import ReactMarkdown from "react-markdown"
import moment from "moment"
import { TProjectProp } from "@/common/types/TProfile"

const ProfileProject = (prop: TProjectProp) => {
  const { data } = prop || {}
  const items = (data || []).map((item) =>
    Object.assign({ title: moment(item.date).format("MMM YYYY") })
  )
  console.log("project: ", data)
  return (
    <Chrono
      classNames={{
        card: "px-1 py-0",
      }}
      items={items}
      mode="VERTICAL"
      hideControls
      focusActiveItemOnLoad={false}
      disableNavOnKey
      disableAutoScrollOnClick
    >
      {(data || []).map((item, itemIndex) => {
        const { name, description, jobTitle } = item || {}
        return (
          <div key={itemIndex} className="container">
            <div className="row">
              <div className="col-xs-12">
                <div
                  className="position-sticky bg-white py-2"
                  style={{ top: -5 }}
                >
                  <h3 className="text-gradient text-info mb-0">{name}</h3>
                  <p className="text-dark fst-italic">{jobTitle}</p>
                </div>
                <div>
                  <ReactMarkdown
                    className="text-dark"
                    source={description}
                    escapeHtml={false}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Chrono>
  )
}

export default ProfileProject
