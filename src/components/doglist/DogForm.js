import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const DogForm = () => {
  
  const [dogEntry, update] = useState({
    description: ""
  })
  
  const navigate = useNavigate();

  const localDitchedUser = localStorage.getItem("ditched-user")
  const ditchedUserObject = JSON.parse(localDitchedUser)

  const handleSubmitClick = (event) => {
    event.preventDefault();

    if(dogEntry.description="") {
      navigate("/create")
    }


    var facilityGet = document.getElementById("facilitySelect");
    var facilityName = facilityGet.value
    var descrip = document.getElementById("dog_description").value

    const dataToSendToAPI = {
      userId: ditchedUserObject.id,
      name: dogEntry.name,
      breed: dogEntry.breed,
      isImmunized: dogEntry.isImmunized,
      dateAvailable: dogEntry.dateAvailable,
      facilityId: facilityName,
      description: descrip,
      age: dogEntry.age,
      isAdopted: false,
      imgUrl: dogEntry.imgUrl
    }

    


    return fetch(`http://localhost:8088/dogs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToSendToAPI)
      })
      .then(response => response.json())
      .then(() => {
        navigate("/")
      })
  }
  
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-50 dark:bg-gray-900">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-20 h-20 mr-2" src="https://i.ibb.co/qMzfcdm/unnamed.png" alt="logo"/>Ditched Dogs Dog Ditching Form!  
      </a>
      <div className="border-4 rounded-md bg-white w-1/3 flex flex-col items-center justify-center">
        <form id="dogForm" className="dogForm">
          <h2 className="dogForm_title text-center text-2xl font-semibold">
            New Dog Listing
          </h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Name of your dog"
                value={dogEntry.name}
                onChange={  
                  (evt) => {
                  const copy = {...dogEntry}
                  copy.name = evt.target.value
                  update(copy)
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
                value={dogEntry.breed}
                onChange={  
                  (evt) => {
                  const copy = {...dogEntry}
                  copy.breed = evt.target.value
                  update(copy)
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
                value={dogEntry.age}
                onChange={  
                  (evt) => {
                  const copy = {...dogEntry}
                  copy.age = parseInt(evt.target.value)
                  update(copy)
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
                  dogEntry.isImmunized = true;
                  const copy = {...dogEntry}
                  copy.isImmunized = true
                  update(copy)
                  }
               } />Yes
              <input
                required
                type="radio"
                className="form-control"
                name="immunizedRadio"
                onChange={  
                  (evt) => {
                  dogEntry.isImmunized = false;
                  const copy = {...dogEntry}
                  copy.isImmunized = false
                  update(copy)
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
              value={dogEntry.dateAvailable}
              onChange={  
                (evt) => {
                const copy = {...dogEntry}
                copy.dateAvailable = evt.target.value
                update(copy)
                }
              } />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="facilitySelection">Select the care facility most convenient for you:</label>
          <select id="facilitySelect">
            <option>
              Nashville
            </option>
            <option>
              Franklin
            </option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description/Remarks about your dog</label>
          <textarea
              required
              id="dog_description"
              type="text"
              className="form-control h-20 w-full"
              placeholder="Description"
              value={dogEntry.description}
              onChange={  
                (evt) => {
                const copy = {...dogEntry}
                copy.description = evt.target.value
                update(copy)
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
              value={dogEntry.imgUrl}
              onChange={  
                (evt) => {
                const copy = {...dogEntry}
                copy.imgUrl = evt.target.value
                update(copy)
                }
              } />
              
        </div>
      </fieldset>
      <fieldset>
      <div className="form-group flex flex-col justify-center mt-5">
      <button onClick={
        (clickEvent) => handleSubmitClick(clickEvent)
      }
        className="btn btn-submit mt-6 border-2 rounded-md bg-white"
        type="submit">
        <p className="text-center hover:underline">Submit Doggy!</p>
      </button>
      </div>
      </fieldset>
    </form>
    </div>
    </div>
  )
}