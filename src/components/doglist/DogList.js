import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DogEntry } from "./DogEntry"
export const DogList = ({ searchTermState }) => {
  //initial dog array
  const [dogs, setDogs] = useState([])
  const [filteredDogs, setFiltered] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [showImmunized, setShowImmunized] = useState(false) 
  const navigate = useNavigate()
  
  const localDitchedUser = localStorage.getItem("ditched-user")
  const ditchedUserObject = JSON.parse(localDitchedUser)

  /* useEffect for initial population of dog array */
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

/* useEffect for searching by dog breed */
useEffect(
  () => {
    const searchDogs = dogs.filter(dog => 
    {
      return dog.breed.toLowerCase().startsWith(searchTermState.toLowerCase())
    })
    setFiltered(searchDogs)
  },
  [searchTermState]
)
/* Use effect for showAll button */
useEffect(
  () => {
    if(showAll) {
      setFiltered(dogs)
    }
  },
  [showAll]

)

const toggleImmunized = () => {
  var immunizedCheckbox = document.getElementById("immunizedCheck");
  if(immunizedCheckbox.checked === true) {
    setShowImmunized(true)
  }
  else {
    setShowImmunized(false)
  }
}

useEffect(
  () => {
    if(showImmunized) {
      const immunizedDogs = dogs.filter(dog => {
        return dog.isImmunized
      })
      setFiltered(immunizedDogs)
    }
    else {
      setFiltered(dogs)
    }
  },
  [showImmunized]
)


  return <>
  <button id="showAllCheck" onClick={() => setShowAll(true)} >Show All </button>
  <label>
  <input type="checkbox" id="immunizedCheck" onClick={() => toggleImmunized() }/>
  Immunized
  </label>
  <h2>Our Wonderful Ditched Dogs</h2>
  <article className="dogList">
    {
      filteredDogs.map(
        (dog) => <DogEntry dogObject={dog} />
      )
    }
  </article> 
  
  
  
  </>
}