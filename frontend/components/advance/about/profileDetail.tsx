import { useMemo } from "react"
import { useTranslation } from "next-i18next"
import ReactMarkdown from "react-markdown"
import { getStrapiMedia } from "@/common/helpers/media"
import { TProfileDetailProp } from "@/common/types/TProfile"
import IncreaseNumber from "@/components/common/increaseNumber"
import ProfileHeader from "./profileHeader"
import ProfileProject from "./profileProject"

const ProfileDetail = (prop: TProfileDetailProp) => {
  const {
    name,
    jobTitle,
    avatar,
    personal,
    overview,
    education,
    workExperiences,
    projects,
  } = prop.data || {}
  const { t } = useTranslation("about")

  const headerComponent = useMemo(
    () => (
      <ProfileHeader
        name={name}
        jobTitle={jobTitle}
        avatar={getStrapiMedia(avatar)}
      />
    ),
    [name, jobTitle, avatar]
  )

  const personalComponent = useMemo(
    () => (
      <section id="personal">
        <div className="section-title">
          <h2>{t("Personal")}</h2>
        </div>
        <ReactMarkdown
          className="text-dark"
          source={personal}
          escapeHtml={false}
        />
      </section>
    ),
    [personal, t]
  )

  const overviewComponent = useMemo(
    () => (
      <section id="overview">
        <div className="section-title">
          <h2>{t("Overview")}</h2>
        </div>
        <ReactMarkdown
          className="text-dark"
          source={overview}
          escapeHtml={false}
        />
      </section>
    ),
    [overview, t]
  )

  const educationComponent = useMemo(
    () => (
      <section id="education">
        <div className="section-title">
          <h2>{t("Education")}</h2>
        </div>
        <ReactMarkdown
          className="text-dark"
          source={education}
          escapeHtml={false}
        />
      </section>
    ),
    [education, t]
  )

  const workExperiencesComponent = useMemo(
    () => (
      <section id="work-experiences">
        <div className="section-title">
          <h2>{t("Work Experiences")}</h2>
        </div>
        <ReactMarkdown
          className="text-dark"
          source={workExperiences}
          escapeHtml={false}
        />
      </section>
    ),
    [workExperiences, t]
  )

  const projectComponent = useMemo(
    () => (
      <section id="projects">
        <div className="section-title">
          <h2 className="mb-4">
            {t("Projects")}:
            <strong className="ms-3 text-gradient text-info">
              <IncreaseNumber initValue={0} countTo={projects?.length ?? 0} />
            </strong>
          </h2>
        </div>
        <ProfileProject data={projects || []} />
      </section>
    ),
    [projects, t]
  )

  return (
    <section className="py-sm-5 py-5 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">{headerComponent}</div>
          <div className="col-lg-9 col-md-8">
            {personalComponent}
            {overviewComponent}
            {educationComponent}
            {workExperiencesComponent}
            {projectComponent}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileDetail
