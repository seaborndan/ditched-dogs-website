import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DogEntry } from "./DogEntry"
export const DogList = () => {
  const [dogs, setDogs] = useState([])
  const navigate = useNavigate()
  
  const localDitchedUser = localStorage.getItem("ditched-user")
  const ditchedUserObject = JSON.parse(localDitchedUser)


  useEffect(
    () => {
        fetch(`http://localhost:8088/dogs`)
        .then(response => response.json())
        .then((dogArray) => {
            setDogs(dogArray)
        })
    },
    [] // When this array is empty, you are observing initial component state
)

  return <><h2>Our Wonderful Ditched Dogs</h2>
  <article className="dogList">
    {
      dogs.map(
        (dog) => <DogEntry dogObject={dog} />
      )
    }
  </article> 
  
  
  
  </>
}