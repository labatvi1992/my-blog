import ReactMarkdown from "react-markdown"
import { TProfileProp } from "@/common/types/TProfile"
import { getStrapiMedia } from "@/common/helpers/media"
import ProfileHeader from "@/components/advance/about/profileHeader"
import ProfileWelcome from "./profileWelcome"
import ProfileProject from "./profileProject"
import IncreaseNumber from "../../common/increaseNumber"

const Profile = (prop: TProfileProp) => {
  const { data } = prop || {}
  const {
    name,
    jobTitle,
    avatar,
    welcome,
    personal,
    overview,
    education,
    workExperiences,
    projects,
  } = data?.attributes || {}
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
              <section id="personal">
                <div className="section-title">
                  <h2>Personal</h2>
                </div>
                <ReactMarkdown
                  className="text-dark"
                  source={personal}
                  escapeHtml={false}
                />
              </section>
              <section id="overview">
                <div className="section-title">
                  <h2>Overview</h2>
                </div>
                <ReactMarkdown
                  className="text-dark"
                  source={overview}
                  escapeHtml={false}
                />
              </section>
              <section id="education">
                <div className="section-title">
                  <h2>Education</h2>
                </div>
                <ReactMarkdown
                  className="text-dark"
                  source={education}
                  escapeHtml={false}
                />
              </section>
              <section id="workExperiences">
                <div className="section-title">
                  <h2>Work Experiences</h2>
                </div>
                <ReactMarkdown
                  className="text-dark"
                  source={workExperiences}
                  escapeHtml={false}
                />
              </section>
              <section id="projects">
                <div className="section-title">
                  <h2 className="mb-4">
                    Projects:
                    <strong className="ms-3 text-gradient text-info">
                      <IncreaseNumber
                        initValue={0}
                        countTo={projects?.length ?? 0}
                      />
                    </strong>
                  </h2>
                </div>
                <ProfileProject data={projects || []} />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
