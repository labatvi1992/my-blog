import { useMemo } from "react"
import Head from "next/head"
import { getStrapiMedia } from "@/common/helpers/media"
import { useGlobalContext } from "./globalContext"

const Favicon = () => {
  const global = useGlobalContext()
  const component = useMemo(
    () => (
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global?.attributes?.favicon)}
        />
      </Head>
    ),
    [global]
  )
  return component
}

export default Favicon
