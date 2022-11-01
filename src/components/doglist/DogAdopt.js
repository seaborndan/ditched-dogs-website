import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const DogAdopt = () => {
  const location = useLocation();
  const [doggie, assignDoggie] = useState({})
  const navigate = useNavigate()
  useEffect (
    () => {
       fetch(`http://localhost:8088/dogs/${location.state.dogObject.id}`)
        .then(response => response.json())
        .then((userArray) => {
          assignDoggie(userArray)
        })
    },
    []
  )
  
  
  
  const handleSaveButtonClick = (event, doggieParam) => {
    event.preventDefault()
    

    return fetch(`http://localhost:8088/dogs/${location.state.dogObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(doggieParam)
    })
      .then(response => response.json())
      .then(() => {
        navigate("/")
      })

} 






  return <>
  <p>Hello this is {location.state.dogObject.name}, are you sure you want to adopt him?  <button onClick={(event) => {
    const copy = {...doggie}
    copy.isAdopted = true
    //assignDoggie(copy)
    handleSaveButtonClick(event, copy)
  }}>Y</button>  |  N</p>
  </>
}