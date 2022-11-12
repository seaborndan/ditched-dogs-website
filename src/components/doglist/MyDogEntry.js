import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DogAdopt } from './DogAdopt';
import "./DogList.css"


export const MyDogEntry = ( {dogObject} ) => {

  const location = useLocation();
  const navigate = useNavigate();
  const localDitchedUser = localStorage.getItem("ditched-user")
  const ditchedUserObject = JSON.parse(localDitchedUser)

  if(dogObject.isDeleted === true) {
    return ""
  }

  const handleDeleteClick = () => {
    const dataToSendToAPI = {
      userId: ditchedUserObject.id,
      name: dogObject.name,
      breed: dogObject.breed,
      isImmunized: dogObject.isImmunized,
      dateAvailable: dogObject.dateAvailable,
      facilityId: dogObject.facilityId,
      description: dogObject.description,
      age: dogObject.age,
      isAdopted: true,
      imgUrl: dogObject.imgUrl,
      isDeleted: true
    }

    return fetch(`http://localhost:8088/dogs/${dogObject.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSendToAPI)
    })
      .then(response => response.json())
      .then(() => {
        window.location.reload()
      })

  }

  const handleImmunized = (immunizedProp) => {
    if(immunizedProp.isImmunized) {
      return `Has Immunizations`
    }
    else {
      return `No clue if this dog has had shots or not`
    }
  }

  const handleAdoptClick = (event) => {
    navigate("/edit", {state:{dogObject}})
  }

  return <section className="dogEntry-- flex flex-col">
    
    <img className="dog_img h-3/5" src={dogObject.imgUrl} />
    <header className="dog_name text-center">{dogObject.name} the Dog</header>
    <ul className='mt-3'>
      <p>Breed: {dogObject.breed}</p>
    </ul>
    <ul className=''>
      <p>Age: {dogObject.age} years old</p>
    </ul>
    <ul className=''>
      <p>Date Available: {dogObject.dateAvailable}</p>
    </ul>
    <ul className=''>
      <p>Facility: {dogObject.facilityId}</p>
    </ul>
    <ul className=''>
      <p>{handleImmunized(dogObject)}</p>
    </ul>
    <ul className=''>
      <p>{dogObject.description}</p>
    </ul>
    <button onClick={
        (clickEvent) => handleAdoptClick(clickEvent)
      }
      className="btn btn-submit hover:underline mt-2">
        Edit Your Dog Listing!
    </button>
    <button onClick={
        (clickEvent) => handleDeleteClick(clickEvent)
      }
      className="btn btn-submit hover:underline mt-2">
        Delete Your Dog Listing!
    </button>
  </section>
}