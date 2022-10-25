import { useMemo } from "react"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { AboutUrl } from "assets/data/NavData"
import { getStrapiMedia } from "@/common/helpers/media"
import { TWelcomeProp } from "@/common/types/TWelcome"
import Hero from "../../common/hero"
import AnimatedText from "../../common/animatedText"

const Welcome = (prop: TWelcomeProp) => {
  const { data } = prop || {}
  const { title, content, background, facebook, github, linkedin } = data || {}
  const { t } = useTranslation("common")

  const component = useMemo(
    () => (
      <Hero backgroundImage={getStrapiMedia(background)}>
        <h2 id="welcome-title" className="text-white text-truncate">
          <AnimatedText text={title.split(".")} loop />
        </h2>
        <p className="d-none d-lg-block lead mb-4 text-white">{content}</p>
        <Link href={AboutUrl}>
          <button type="submit" className="btn bg-white text-dark my-3">
            {t("About me")}
          </button>
        </Link>
        <h6 className="text-white mt-4 mb-2">{t("Contact")}</h6>
        <div className="d-flex justify-content-center">
          <a href={facebook} target="_blank">
            <i
              className="fab fa-facebook text-lg text-white me-4"
              aria-hidden
            />
          </a>
          <a href={github} target="_blank">
            <i className="fab fa-github text-lg text-white me-4" aria-hidden />
          </a>
          <a href={linkedin} target="_blank">
            <i className="fab fa-linkedin text-lg text-white" aria-hidden />
          </a>
        </div>
      </Hero>
    ),
    [data, t]
  )
  return component
}

export default Welcome
