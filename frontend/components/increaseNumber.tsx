import { useEffect, useRef } from "react"
import { TIncreaseNumber } from "@/common/types/TIncreaseNumber"

declare var CountUp: any

const IncreaseNumber = (prop: TIncreaseNumber) => {
  const { className, initValue, countTo } = prop || {}
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let initStart = true

    const inView = () => {
      if (ref.current === undefined || ref.current === null) return false
      // get window height
      const windowHeight = window.innerHeight
      // get number of pixels that the document is scrolled
      const scrollY = window.scrollY || window.pageYOffset
      // get current scroll position (distance from the top of the page to the bottom of the current viewport)
      const scrollPosition = scrollY + windowHeight
      // get element position (distance from the top of the page to the bottom of the element)
      const elementHeight = ref?.current?.clientHeight ?? 0
      const elementPosition =
        ref.current.getBoundingClientRect().top + scrollY + elementHeight

      // is scroll position greater than element position? (is element in view?)
      if (scrollPosition > elementPosition) {
        return true
      }

      return false
    }

    const onScroll = () => {
      if (inView()) {
        if (initStart) {
          const countUp = new CountUp(ref.current, countTo)
          if (!countUp.error) {
            countUp.start()
          }
          initStart = false
        }
      }
    }

    onScroll()
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <span ref={ref} className={className}>
      {initValue}
    </span>
  )
}

export default IncreaseNumber
