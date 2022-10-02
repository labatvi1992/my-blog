import ReactMarkdown from "react-markdown"
import { TProfileProp } from "@/common/types/TProfile"
import { getStrapiMedia } from "@/common/helpers/media"
import ProfileHeader from "@/components/profile/profileHeader"
import ProfileWelcome from "./profileWelcome"

const Profile = (prop: TProfileProp) => {
  const {
    name,
    jobTitle,
    avatar,
    welcome,
    overview,
    education,
    workExperiences,
    projects,
  } = prop.attributes || {}
  return (
    <>
      <ProfileWelcome data={welcome} />
      <section className="py-sm-5 py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <ProfileHeader
                name={name}
                jobTitle={jobTitle}
                avatar={getStrapiMedia(avatar)}
              />
            </div>
            <div className="col-lg-9 col-md-8">
              <section id="overview">
                <div className="container">
                  <div className="section-title">
                    <h2>Overview</h2>
                  </div>
                  <ReactMarkdown
                    className="text-dark"
                    source={overview}
                    escapeHtml={false}
                  />
                </div>
              </section>
              <section id="education">
                <div className="container">
                  <div className="section-title">
                    <h2>Education</h2>
                  </div>
                  <ReactMarkdown
                    className="text-dark"
                    source={education}
                    escapeHtml={false}
                  />
                </div>
              </section>
              <section id="workExperiences">
                <div className="container">
                  <div className="section-title">
                    <h2>Work Experiences</h2>
                  </div>
                  <ReactMarkdown
                    className="text-dark"
                    source={workExperiences}
                    escapeHtml={false}
                  />
                </div>
              </section>
              <section id="projects">
                <div className="container">
                  <div className="section-title">
                    <h2>Projects</h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
