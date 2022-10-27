import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const DogForm = () => {
  
  const [dogEntry, update] = useState({
    description: ""
  })
  
  const navigate = useNavigate();

  const localDitchedUser = localStorage.getItem("ditched-user")
  const ditchedUserObject = JSON.parse(localDitchedUser)
  
  return< (
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
              value={dogEntry.description}
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
          <label htmlFor="name">Name:</label>
          <input
              required autoFocus
              type="text"
              className="form-control"
              placeholder="Name of your dog"
              value={dogEntry.description}
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
          <label htmlFor="name">Name:</label>
          <input
              required autoFocus
              type="text"
              className="form-control"
              placeholder="Name of your dog"
              value={dogEntry.description}
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
          <label htmlFor="name">Name:</label>
          <input
              required autoFocus
              type="text"
              className="form-control"
              placeholder="Name of your dog"
              value={dogEntry.description}
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
          <label htmlFor="name">Name:</label>
          <input
              required autoFocus
              type="text"
              className="form-control"
              placeholder="Name of your dog"
              value={dogEntry.description}
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
          <label htmlFor="name">Name:</label>
          <input
              required autoFocus
              type="text"
              className="form-control"
              placeholder="Name of your dog"
              value={dogEntry.description}
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
          <label htmlFor="name">Name:</label>
          <input
              required autoFocus
              type="text"
              className="form-control"
              placeholder="Name of your dog"
              value={dogEntry.description}
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
          <label htmlFor="name">Name:</label>
          <input
              required autoFocus
              type="text"
              className="form-control"
              placeholder="Name of your dog"
              value={dogEntry.description}
              onChange={  
                (evt) => {
                const copy = {...dogEntry}
                copy.name = evt.target.value
                update(copy)
                }
              } />
        </div>
      </fieldset>
    </form>
  )
}