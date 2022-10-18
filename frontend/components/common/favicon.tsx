import Head from "next/head"
import { getStrapiMedia } from "@/common/helpers/media"
import { useGlobalContext } from "./globalContext"

const Favicon = () => {
  const global = useGlobalContext()
  console.log("Favicon: ", global)
  return (
    <Head>
      <link
        rel="shortcut icon"
        href={getStrapiMedia(global?.attributes?.favicon)}
      />
    </Head>
  )
}

export default Favicon
