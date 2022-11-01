import { useState } from "react"
import { DogList } from "./DogList"
import { DogSearch } from "./DogSearch"
import { useNavigate } from "react-router-dom"

export const DogContainer = () => {
  const [searchTerms, setSearchTerms] = useState("")
  const navigate = useNavigate();

  return <>
    <div className="flex flex-row justify-end mt-5">
    <DogSearch setterFunction={setSearchTerms} />
    </div>
    <DogList searchTermState={searchTerms}/>
  </>
}