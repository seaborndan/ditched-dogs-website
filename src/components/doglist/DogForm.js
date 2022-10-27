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

    const dataToSendToAPI = {
      userId: ditchedUserObject.id,
      name: dogEntry.name,
      breed: dogEntry.breed,
      isImmunized: dogEntry.isImmunized,
      dateAvailable: dogEntry.dateAvailable,
      facilityId: dogEntry.facilityId,
      description: dogEntry.description,
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
    <form className="dogForm">
      <h2 className="dogForm_title">
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
              required autoFocus
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
              required autoFocus
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
              required autoFocus
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
              required autoFocus
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
              required autoFocus
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
          <label htmlFor="facilitySelection">Select the care facility most convienent for you:</label>
          <input
              required autoFocus
              type="text"
              className="form-control"
              placeholder="1: Franklin  2: Nashville"
              value={dogEntry.facilityId}
              onChange={  
                (evt) => {
                const copy = {...dogEntry}
                copy.facilityId = parseInt(evt.target.value)
                update(copy)
                }
              } />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description/Remarks of your dog</label>
          <input
              required autoFocus
              type="text"
              className="form-control"
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
        <div className="form-group">
          <label htmlFor="imgLink">Link an image here: </label>
          <input
              required autoFocus
              type="text"
              className="form-control"
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
      <button onClick={
        (clickEvent) => handleSubmitClick(clickEvent)
      }
      className="btn btn-submit">
        Submit Doggy!
      </button>
    </form>
  )
}