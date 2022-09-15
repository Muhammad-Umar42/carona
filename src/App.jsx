import React from 'react'
import { useState } from 'react'
import Country from './component/country'
import Covid from './component/Covid'
import Graph from './component/graph'

function App() {
  const [confrm, setConfrm] = useState([])
  const [dead, setDead] = useState([])
  const [recover, setRecover] = useState([])
  const [isCountry, setIsCountry] = useState([])
  const [globalConfrm, setGlobalConfrm] = useState([])
  const [globalDead, setGlobalDead] = useState([])
  const [globalRecover, setGlobalRecover] = useState([])

  // console.log(globalDead)

  return (
    <>
      <Covid confrm={confrm} recover={recover} dead={dead} isCountry={isCountry}
        setGlobalConfrm={setGlobalConfrm} setGlobalDead={setGlobalDead} setGlobalRecover={setGlobalRecover} />
      <Country setConfrm={setConfrm} setRecover={setRecover} setDead={setDead} setIsCountry={setIsCountry} />
      <Graph confrm={confrm} recover={recover} dead={dead}
        globalConfrm={globalConfrm} globalDead={globalDead} globalRecover={globalRecover} />
    </>
  )
}

export default App
