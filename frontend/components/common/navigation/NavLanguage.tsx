import React, { useState } from "react"
import { TLanguageProp } from "@/common/types/TNav"

const NavLanguage = (prop: TLanguageProp) => {
  const { i18n, data } = prop || {}
  const [language, setLanguage] = useState(i18n.language || "en-US")

  const onChange = (lang: string) => {
    i18n.changeLanguage(lang, () => {
      setLanguage(lang)
    })
  }

  return (
    <li className="nav-item dropdown dropdown-hover ms-lg-auto mx-2">
      <a
        className="nav-link ps-2 d-flex justify-content-stretch cursor-pointer align-items-center"
        id="dropdownMenuLanguage"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={data[language].icon}
          alt="down-arrow"
          className="icon-xs me-2 d-block"
        />
        <span className="flex-fill">{i18n.t(data[language].name)}</span>
        <img
          src="/img/down-arrow-dark.svg"
          alt="down-arrow"
          className="arrow ms-2 d-block"
        />
      </a>
      <ul
        className="dropdown-menu dropdown-menu-animation dropdown-menu-end mt-0 mt-lg-3 p-3 border-radius-lg"
        aria-labelledby="dropdownMenuDocs"
      >
        <div className="d-block">
          <ul className="list-group">
            {(Object.values(data) || []).map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="nav-item list-group-item border-0 p-0"
              >
                <div
                  className="dropdown-item py-2 ps-3 border-radius-md"
                  onClick={() => onChange(item.id)}
                >
                  <div className="d-flex align-items-center">
                    {item.icon && (
                      <div className="icon-xs me-3 d-flex mt-1">
                        <img src={item.icon} className="d-block" />
                      </div>
                    )}
                    <div>
                      <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                        {i18n.t(item.name)}
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </li>
  )
}

export default NavLanguage