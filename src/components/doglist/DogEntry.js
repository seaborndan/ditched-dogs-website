import { Link, useNavigate } from 'react-router-dom';
import { DogAdopt } from './DogAdopt';
import "./DogList.css"
export const DogEntry = ( {dogObject} ) => {

  
  const navigate = useNavigate();

  if(dogObject.isAdopted === true) {
    return ""
  }

  const handleAdoptClick = (event) => {
    navigate("/adopt", {state:{dogObject}})
  }
  
  const handleImmunized = (immunizedProp) => {
    if(immunizedProp.isImmunized) {
      return `Has Immunizations`
    }
    else {
      return `No clue if this dog has had shots or not`
    }
  }

  return <section className="dogEntry-- flex flex-col">
    
    <img className="dog_img h-2/3" src={dogObject.imgUrl} />
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
        Adopt This Doggy!
    </button>
  </section>
}