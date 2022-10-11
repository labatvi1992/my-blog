import { getStrapiMedia } from "@/common/helpers/media"
import NextImage from "next/image"

const Image = ({ className, image }) => {
  const { alternativeText, width, height } = image?.data?.attributes ?? {}
  const src = getStrapiMedia(image)
  if (src) {
    return (
      <NextImage
        className={className}
        layout="responsive"
        width={width || "100%"}
        height={height || "100%"}
        objectFit="cover"
        src={src}
        alt={alternativeText || ""}
      />
    )
  }
  return null
}

export default Image
