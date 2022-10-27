import {useLocation} from 'react-router-dom';

export const DogAdopt = () => {
  const location = useLocation();
  return <>
  <p>Hello this is {location.state.dogObject.name}</p>
  </>
}