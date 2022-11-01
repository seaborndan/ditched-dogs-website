export const DogSearch = ({ setterFunction }) => {
  return (
    <div>
      <input class="" onChange={
        (changeEvent) => {
          setterFunction(changeEvent.target.value)
        }
      }
      type="text" placeholder="Search by breed" />
    </div>
  )
}