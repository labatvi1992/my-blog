import { useTranslation } from "react-i18next"
import Link from "next/link"
import { getStrapiMedia } from "@/common/helpers/media"
import { TWelcomeProp } from "@/common/types/TWelcome"
import AnimatedText from "./animatedText"

const Welcome = (prop: TWelcomeProp) => {
  const { data } = prop || {}
  const { title, content, background, facebook, github, linkedin } = data || {}
  const { t } = useTranslation("common", { useSuspense: false })

  return (
    <header className="bg-gradient-dark mb-4">
      <div
        className="page-header min-vh-100"
        style={{
          backgroundImage: `url('${getStrapiMedia(background)}')`,
        }}
      >
        <span className="mask bg-gradient-info opacity-8"></span>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mx-auto my-auto">
              <h2 id="welcome-title" className="text-white text-truncate">
                <AnimatedText text={title.split(".")} loop />
              </h2>
              <p className="d-none d-lg-block lead mb-4 text-white opacity-8">
                {content}
              </p>
              <Link href={t("AboutUrl")}>
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
                  <i
                    className="fab fa-github text-lg text-white me-4"
                    aria-hidden
                  />
                </a>
                <a href={linkedin} target="_blank">
                  <i
                    className="fab fa-linkedin text-lg text-white"
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute w-100 z-index-1 bottom-0">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 40"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="moving-waves">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="-1"
                fill="rgba(255,255,255,0.40"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.35)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.25)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="8"
                fill="rgba(255,255,255,0.20)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="13"
                fill="rgba(255,255,255,0.15)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="16"
                fill="rgba(255,255,255,1"
              />
            </g>
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Welcome
