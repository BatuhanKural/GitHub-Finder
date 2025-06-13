import { useState } from "react"
import SearchInput from "./components/SearchInput"
import UserInfo from "./components/UserInfo"

function App() {
  const [userData, setUserData] = useState({})
  return (
    <div className="p-3 sm:justify-center flex flex-col gap-10 items-center max-w-3xl h-screen mx-auto">
      <SearchInput setUserData={setUserData}/>
      <UserInfo userData={userData}/>
    </div>
  )
}

export default App
