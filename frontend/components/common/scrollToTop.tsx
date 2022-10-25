import { useEffect, useState } from "react"
import { useTranslation } from "next-i18next"
import { TScrollToTopProp } from "@/common/types/TScrollToTop"

const ScrollToTop = (prop: TScrollToTopProp) => {
  const { top = 50, icon = "fas fa-angle-up" } = prop || {}
  const [visible, setVisible] = useState(false)
  const { t } = useTranslation("common")

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top)
    }
    onScroll()
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {visible && (
        <button
          style={{ width: 48, height: 48 }}
          className="position-fixed d-flex justify-content-center align-items-center bottom-4 end-3 btn bg-gradient-info z-index-2 mb-0"
          onClick={scrollTop}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={t("Scroll to top")}
        >
          <i
            className={`d-flex justify-content-center align-items-center text-white fs-3 icon ${icon}`}
            aria-hidden="true"
          />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
