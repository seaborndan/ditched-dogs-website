import { Link, useNavigate } from 'react-router-dom';
import { DogAdopt } from './DogAdopt';

export const DogEntry = ( {dogObject} ) => {

  const navigate = useNavigate();
  const handleAdoptClick = (event) => {
    navigate("/adopt", {state:{dogObject}})
  }

  return <section className="dogEntry--">
    <header>{dogObject.name} the Dog</header>
    <img className="dog_img" src={dogObject.imgUrl} />
    <button onClick={
        (clickEvent) => handleAdoptClick(clickEvent)
      }
      className="btn btn-submit">
        Adopt This Doggy!
    </button>
  </section>
}