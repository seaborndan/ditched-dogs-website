import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            {
               localStorage.getItem("ditched-user")
                    ? <li className="navbar__item navbar__logout">
                        <p class="">Hello Seaborn,
                        <Link class="hover:underline " to="" onClick={() => {
                            localStorage.removeItem("ditched-user")
                            navigate("/", {replace: true})
                        }}>   Logout</Link></p>
                    </li>
                    : ""
            }
        </ul>
    )
}
