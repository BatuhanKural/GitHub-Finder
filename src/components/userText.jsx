const UserText = ({userData}) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:flex-row flex flex-col gap-4">
        <div className="w-32 h-32 md:shrink-0">
          <img className="w-full h-full rounded-xl" src={userData.avatar_url ? userData.avatar_url : "https://placehold.co/128x128"} alt="" /> 
        </div>
        <div>
          <h2 className="text-2xl">{userData.name ? userData.name : "Name"}</h2>
          <span className="text-xs">@{userData.login ? userData.login : "username"}</span>
          <p className="text-[0.875rem]">{userData.bio ? userData.bio : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit vel ipsum ipsam odio impedit! Eum numquam consectetur illo. Eveniet officia omnis illo quaerat obcaecati ex impedit pariatur nisi temporibus vitae."}</p>
        </div>
      </div>
  )
}

export default UserText