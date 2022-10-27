export const DogSearch = ({ setterFunction }) => {
  return (
    <div>
      <input onChange={
        (changeEvent) => {
          setterFunction(changeEvent.target.value)
        }
      }
      type="text" placeholder="Search by breed" />
    </div>
  )
}