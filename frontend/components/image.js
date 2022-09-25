import { getStrapiMedia } from "@/common/helpers/media"
import NextImage from "next/image"

const Image = ({ image }) => {
  const { alternativeText, width, height } = image?.data?.attributes ?? {};
  const src = getStrapiMedia(image);
  if (src) {
    return (
      <NextImage
        layout="responsive"
        width={width || "100%"}
        height={height || "100%"}
        objectFit="contain"
        src={src}
        alt={alternativeText || ""}
      />
    )
  }
  return null;
}

export default Image
