import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { SlUserFollowing } from "react-icons/sl";

const UserSocials = ({userData}) => {
  return (
    <div className="mt-4 p-2 flex justify-around rounded-2xl border-1">
      <div className="flex items-center gap-1">
        <IoLocationOutline title="Location" className="size-5" />
         <span>{userData.location ? userData.location.split(',')[0] : "Location"}</span>
      </div>
      <div className="flex items-center gap-1">
        <MdWorkOutline title="Company"  className="size-5" />
         <span>{userData.company ? userData.company.split(' ')[0] : "Company"}</span>
      </div>
      <div className="flex items-center gap-1">
        <CiCircleList title="Follower" className="size-5" />
         <span>{userData.followers ? userData.followers : 0}</span>
      </div>
      <div className="flex items-center gap-1">
        <SlUserFollowing title="Following" className="size-5" />
         <span>{userData.following ? userData.following : 0}</span>
      </div>
    </div>
  )
}

export default UserSocials