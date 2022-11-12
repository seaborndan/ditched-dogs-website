import { useEffect, useState } from "react"
import { MyDogEntry } from "./MyDogEntry"
import { useNavigate } from "react-router-dom"
export const MyDogs = () => {

  const [dogs, setDogs] = useState([])

  const navigate = useNavigate();
  const localDitchedUser = localStorage.getItem("ditched-user")
  const ditchedUserObject = JSON.parse(localDitchedUser)


  useEffect(
    () => {
        fetch(`http://localhost:8088/dogs`)
        .then(response => response.json())
        .then((dogArray) => {
            
          const userDogs = dogArray.filter(dog => 
            {
              return dog.userId === ditchedUserObject.id
            }
          )
          setDogs(userDogs)
        })
    },
    [] // When this array is empty, you are observing initial component state
)

  return <>
    <div className="flex flex-row bg-slate-300 rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-5 w-full">
      <div className="w-1/5">
        <a href="#" class="text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-20 h-30 mr-2" src="https://i.ibb.co/qMzfcdm/unnamed.png" alt="logo"/>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center w-3/5">
        <h1 className="text-4xl">Ditched Dogs</h1>
        <p class="">Your one-stop-shop to ditch your dogs or nab someone elses</p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center mt-6">
    <p>Your Wonderful Ditched Dogs</p>
      <article className="dogList">
        <div className="grid grid-cols-2 gap-10 max-w-5xl xs:grid-cols-2 h-3/5 mt-8">
          {
        
            dogs.map(
              (dog) => <MyDogEntry dogObject={dog} />
            )
          
          }
          
        </div>
        
      </article> 
      <button className="" onClick={() => navigate("/create")}><p className="text-center"></p>Click here to list your own dog!</button>
  </div>
  <div class="flex justify-center mb-10">

  </div>
  </>
}