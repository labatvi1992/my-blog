import { TProfileHeaderProp } from "@/common/types/TProfile"
import ProfileNav from "./profileNav"

const ProfileHeader = (prop: TProfileHeaderProp) => {
  const { name, avatar, jobTitle } = prop || {}
  return (
    <div className="position-sticky d-flex flex-column" style={{ top: 70 }}>
      <div className="d-flex flex-column align-items-center">
        <img
          style={{ width: 160, height: 160 }}
          width={160}
          height={160}
          src={avatar}
          alt=""
          className="img-fluid rounded-circle border border-5 border-dark mt-3"
        />
        <h4 className="text-dark text-center mt-3">{name}</h4>
        <h6 className="text-bold text-gradient text-info mb-4">{jobTitle}</h6>
      </div>
      <div className="nav-wrapper position-relative end-0 mb-4">
        <ProfileNav />
      </div>
    </div>
  )
}

export default ProfileHeader
