import React, { useEffect } from "react"
import { TAnimatedTextProp } from "@/common/types/TAnimatedText"

declare var Typed: any

const AnimatedText = (prop: TAnimatedTextProp) => {
  const { text, loop = false } = prop || {}
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null)

  useEffect(() => {
    const options = {
      strings: text,
      typeSpeed: 90,
      backSpeed: 20,
      backDelay: 200,
      startDelay: 500,
      loop: loop,
    }

    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [text])

  return <span ref={el} />
}

export default AnimatedText
