import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    
    const localDitchedUser = localStorage.getItem("ditched-user")
    const ditchedUserObject = JSON.parse(localDitchedUser)
    
    useEffect(
        () => {
            fetch(`http://localhost:8088/users/${ditchedUserObject.id}`)
            .then(response => response.json())
            .then((userArray) => {
                setUser(userArray)
            })
        },
        []
    )


    return (
        <ul className="navbar flex flex-row justify-evenly">
            {
               localStorage.getItem("ditched-user")
                    ? <><li className="navbar__item mr-5">
                       <Link class="hover:underline" to="/myDogs" onClick={() => {
                        navigate("/myDogs", {replace: true})
                       }}><p>My Listings</p></Link>
                    </li>
                    <li className="navbar__item mr-5">
                        <Link class="hover:underline" to="/" onClick={() => {
                            navigate("/", {replace: true})
                        }}>Home</Link>
                    </li>
                    <li className="navbar__item navbar__logout">
                        <p class="">Hello {user.fullName},
                        <Link class="hover:underline " to="" onClick={() => {
                            localStorage.removeItem("ditched-user")
                            navigate("/", {replace: true})
                        }}>   Logout</Link></p>
                    </li>
                    </>
                    : ""
            }
        </ul>
    )
}
