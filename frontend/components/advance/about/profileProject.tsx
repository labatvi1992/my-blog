import React from "react"
import { Chrono } from "react-chrono"
import ReactMarkdown from "react-markdown"
import moment from "moment"
import { TProjectProp } from "@/common/types/TProfile"

const ProfileProject = (prop: TProjectProp) => {
  const { data } = prop || {}

  const items = (data || []).map((item) =>
    Object.assign({ title: moment(item.date).format("MMM YYYY") })
  )

  const children = (data || []).map((item) => {
    const { date, name, description, jobTitle } = item || {}
    return (
      <div key={date} className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="position-sticky bg-white py-2" style={{ top: -5 }}>
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
  })

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
      allowDynamicUpdate
    >
      {children}
    </Chrono>
  )
}

export default React.memo(ProfileProject)
