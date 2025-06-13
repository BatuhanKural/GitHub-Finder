import UserLocation from "./UserLocation"
import UserSocials from "./UserSocials"
import UserText from "./UserText"

const UserInfo = ({userData}) => {
  return (
    <div>
        <UserText userData={userData}/>
        <UserSocials userData={userData}/>
        <UserLocation userData={userData}/>
    </div>
  )
}

export default UserInfo