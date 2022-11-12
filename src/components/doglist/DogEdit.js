import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"



export const DogEdit = () => {

  const [dog, setDog] = useState({})
  
  const location = useLocation()
  const navigate = useNavigate()
  const localDitchedUser = localStorage.getItem("ditched-user")
  const ditchedUserObject = JSON.parse(localDitchedUser)
  useEffect (
    () => {
      fetch(`http://localhost:8088/dogs/${location.state.dogObject.id}`)
      .then(response => response.json())
      .then((userArray) => {
        setDog(userArray)
      })
    },
    []
  )


  const handleSaveButtonClick = (event) => {
    event.preventDefault()

    const dataToSendToAPI = {
      userId: ditchedUserObject.id,
      name: dog.name,
      breed: dog.breed,
      isImmunized: dog.isImmunized,
      dateAvailable: dog.dateAvailable,
      facilityId: dog.facilityId,
      description: dog.description,
      age: dog.age,
      isAdopted: false,
      imgUrl: dog.imgUrl
    }

    return fetch(`http://localhost:8088/dogs/${location.state.dogObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataToSendToAPI)
    })
      .then(response => response.json())
      .then(() => {
        navigate("/myDogs")
      })

}

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


    <div className="border-4 rounded-md bg-white w-full flex flex-col items-center justify-center">
        <form id="dogForm" className="dogForm">
          <h2 className="dogForm_title text-center text-2xl font-semibold">
            Editing your listing of {dog.name}
          </h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Name of your dog"
                value={dog.name}
                onChange={  
                  (evt) => {
                  const copy = {...dog}
                  copy.name = evt.target.value
                  setDog(copy)
                  }
                } />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="breed">Breed:</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Breed of your dog"
                value={dog.breed}
                onChange={  
                  (evt) => {
                  const copy = {...dog}
                  copy.breed = evt.target.value
                  setDog(copy)
                  }
                } />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Age of your dog"
                value={dog.age}
                onChange={  
                  (evt) => {
                  const copy = {...dog}
                  copy.age = parseInt(evt.target.value)
                  setDog(copy)
                  }
                } />
            </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Is your dog immunized?</label>
              <input
                required
                type="radio"
                className="form-control"
                name="immunizedRadio"
                onChange={  
                  (evt) => {
                  dog.isImmunized = true;
                  const copy = {...dog}
                  copy.isImmunized = true
                  setDog(copy)
                  }
               } />Yes
              <input
                required
                type="radio"
                className="form-control"
                name="immunizedRadio"
                onChange={  
                  (evt) => {
                  dog.isImmunized = false;
                  const copy = {...dog}
                  copy.isImmunized = false
                  setDog(copy)
                  }
                } />No
          </div>
        </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Earliest Drop-Off Date:</label>
          <input
              required
              type="text"
              className="form-control"
              placeholder="mm/dd/yyyy"
              value={dog.dateAvailable}
              onChange={  
                (evt) => {
                const copy = {...dog}
                copy.dateAvailable = evt.target.value
                setDog(copy)
                }
              } />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="facilitySelection">Select the care facility most convenient for you:</label>
          <input
              required
              type="text"
              className="form-control"
              placeholder="1: Franklin  2: Nashville"
              value={dog.facilityId}
              onChange={  
                (evt) => {
                const copy = {...dog}
                copy.facilityId = parseInt(evt.target.value)
                setDog(copy)
                }
              } />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description/Remarks about your dog</label>
          <textarea
              required
              type="text"
              className="form-control h-20 w-full"
              placeholder="Description"
              value={dog.description}
              onChange={  
                (evt) => {
                const copy = {...dog}
                copy.description = evt.target.value
                setDog(copy)
                }
              } />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group flex flex-col justify-center mt-2">
          <label htmlFor="imgLink"><p className="text-center">Link an image here:</p> </label>
          <input
              required
              type="text"
              className="form-control text-center"
              placeholder="blahblah.png"
              value={dog.imgUrl}
              onChange={  
                (evt) => {
                const copy = {...dog}
                copy.imgUrl = evt.target.value
                setDog(copy)
                }
              } />
              
        </div>
      </fieldset>
      <fieldset>
      <div className="form-group flex flex-col justify-center mt-5">
      <button onClick={
        (clickEvent) => handleSaveButtonClick(clickEvent)
      }
        className="btn btn-submit mt-6 border-2 rounded-md bg-white"
        type="submit">
        <p className="text-center hover:underline">Submit Doggy Changes!</p>
      </button>
      </div>
      </fieldset>
    </form>
    </div>
  </>
}