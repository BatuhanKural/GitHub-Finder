import { useState } from "react"

const SearchInput = ({setUserData}) => {
  const [username, setUsername] = useState("")

  const handleChange = (data) => {
    setUsername(data)
    console.log(username)
  }

  const handleKeyDown = e => {
    if(e.key === "Enter"){
      getData()
    }
  }

  const getData = () => {
    if(username === "") return
   const URL = `https://api.github.com/users/${username}`
   fetch(URL)
   .then(res => res.json())
   .then(data => setUserData(data)) 
  }

  return (
    <div className="w-full flex items-center bg-white pl-3 rounded-l-2xl shadow-2xl rounded-r-2xl sm:min-w-xl md:min-w-2xl">
        <input onKeyDown={handleKeyDown} onChange={e => handleChange(e.target.value)} className="grow outline-none" placeholder="Enter GitHub username..."/>
        <button onClick={getData} className="bg-green-700 hover:bg-green-600 p-3 rounded-r-2xl text-white cursor-pointer">Search</button>
    </div>
  )
}

export default SearchInput