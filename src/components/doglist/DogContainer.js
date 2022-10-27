import { useState } from "react"
import { DogList } from "./DogList"
import { DogSearch } from "./DogSearch"
import { useNavigate } from "react-router-dom"

export const DogContainer = () => {
  const [searchTerms, setSearchTerms] = useState("")
  const navigate = useNavigate();

  return <>
    <button onClick={() => navigate("/create")}>Click here to list your own dog!</button>
    <DogSearch setterFunction={setSearchTerms} />
    <DogList searchTermState={searchTerms}/>
  </>
}