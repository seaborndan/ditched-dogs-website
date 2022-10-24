import { Link } from 'react-router-dom';

export const DogEntry = ( {dogObject} ) => {


  return <section className="dogEntry--">
    <header>{dogObject.name} the Dog</header>
    <img className="dog_img" src={dogObject.imgUrl} />
  </section>
}