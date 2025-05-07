import { useState } from "react"
import RobotsList from "./componentes/RobotList"
import SearchBar from "./componentes/SearchBar"

import searchRobots from "./api"


function App() {
  const [robots, setRobots] = useState([])

  const handleSubmit = async(term) => {
    console.log('Usted esta buscando con: ', term)
    const result = await searchRobots(term)
    setRobots(result)
  }

  return (
    <>
      <h1> Picture App </h1>
      <SearchBar onSubmit={handleSubmit} />
      <RobotsList robots={robots}/>  
    
    </>
  )
}

export default App