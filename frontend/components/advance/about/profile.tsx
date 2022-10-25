import { TProfileProp } from "@/common/types/TProfile"
import ProfileWelcome from "./profileWelcome"
import ProfileDetail from "./profileDetail"

const Profile = (prop: TProfileProp) => {
  const { data } = prop || {}
  const {
    welcome,
    name,
    jobTitle,
    avatar,
    personal,
    overview,
    education,
    workExperiences,
    projects,
  } = data?.attributes || {}
  return (
    <>
      <ProfileWelcome data={welcome} />
      <ProfileDetail
        data={{
          name,
          jobTitle,
          avatar,
          personal,
          overview,
          education,
          workExperiences,
          projects,
        }}
      />
    </>
  )
}

export default Profile
