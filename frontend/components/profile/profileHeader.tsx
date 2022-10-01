import { TProfileHeaderProp } from "@/common/types/TProfile"
import ProfileNav from "./profileNav"

const ProfileHeader = (prop: TProfileHeaderProp) => {
  const { name, avatar, facebookUrl, githubUrl, linkedinUrl } = prop || {}
  return (
    <div className="position-sticky d-flex flex-column" style={{ top: 100 }}>
      <div className="d-flex flex-column align-items-center">
        <img
          style={{ width: 160, height: 160 }}
          width={160}
          height={160}
          src={avatar}
          alt=""
          className="img-fluid rounded-circle border border-5 border-dark my-3"
        />
        <h4 className="text-dark text-center">{name}</h4>
        <div className="d-flex justify-content-center my-4">
          <a href={facebookUrl} target="_blank">
            <i className="fab fa-facebook text-lg text-dark me-4" aria-hidden />
          </a>
          <a href={githubUrl} target="_blank">
            <i className="fab fa-github text-lg text-dark me-4" aria-hidden />
          </a>
          <a href={linkedinUrl} target="_blank">
            <i className="fab fa-linkedin text-lg text-dark" aria-hidden />
          </a>
        </div>
      </div>
      <div className="nav-wrapper position-relative end-0 mb-4">
        <ProfileNav />
      </div>
    </div>
  )
}

export default ProfileHeader
