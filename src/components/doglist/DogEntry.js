import { Link, useNavigate } from 'react-router-dom';
import { DogAdopt } from './DogAdopt';

export const DogEntry = ( {dogObject} ) => {

  const navigate = useNavigate();
  const handleAdoptClick = (event) => {
    navigate("/adopt", {state:{dogObject}})
  }

  return <section className="dogEntry-- flex flex-col">
    <header className="text-center">{dogObject.name} the Dog</header>
    <img className="dog_img h-2/3" src={dogObject.imgUrl} />
    <button onClick={
        (clickEvent) => handleAdoptClick(clickEvent)
      }
      className="btn btn-submit hover:underline">
        Adopt This Doggy!
    </button>
  </section>
}