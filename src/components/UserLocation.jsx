import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiType } from "react-icons/fi";

const UserLocation = ({userData}) => {
  return (
    <div className="mt-4 p-2 flex flex-col justify-around rounded-2xl border-1">
          <div className="flex items-center gap-1">
            <AiOutlineGlobal title="GitHub Link"  className="size-5" />
             <a href={userData.html_url ? userData.html_url : "https://github.com/username"}>{userData.html_url ? userData.html_url : "https://github.com/username"}</a>
          </div>
          <div className="flex items-center gap-1">
            <FaGithub title="GitHub Id"  className="size-5" />
             <span>{userData.id ? userData.id : "ID"}</span>
          </div>
          <div className="flex items-center gap-1">
            <RiGitRepositoryLine title="Public Repositories"  className="size-5" />
             <span>{userData.public_repos ? userData.public_repos : 0}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiType title="Account Type" className="size-5" />
             <span>{userData.type ? userData.type : "Account Type"}</span>
          </div>
        </div>
  )
}

export default UserLocation