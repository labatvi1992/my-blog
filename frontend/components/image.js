import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"
import { PictureOutlined } from "@ant-design/icons"

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
  return (
    <PictureOutlined
      style={{ fontSize: "24px" }}
    />
  )
}

export default Image
