import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register = (props) => {
    const [customer, setCustomer] = useState({
        email: "",
        fullName: ""
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("ditched-user", JSON.stringify({
                        id: createdUser.id,
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-50 dark:bg-gray-900 shadow dark:border md:mt-0 w-full">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-20 h-20 mr-2" src="https://i.ibb.co/qMzfcdm/unnamed.png" alt="logo"/>Ditched Dogs  
            </a>
            <div className="border-4 rounded-lg bg-white w-full shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="flex flex-col justify-center my-8">
                    <form className="form--login" onSubmit={handleRegister}>
                        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-2">Please Register for Ditched Dogs</h1>
                        <fieldset>
                        <label htmlFor="fullName">
                            <p className="text-center"> Full Name </p>
                        </label>
                        <input onChange={updateCustomer}
                           type="text" id="fullName" className="form-control text-center w-full mb-2"
                           placeholder="Enter your name" required autoFocus />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email"> 
                                <p className="text-center">Email address</p>
                            </label>
                            <input onChange={updateCustomer}
                                type="email" id="email" className="form-control text-center w-full mb-2"
                                placeholder="email@example.com" required />
                        </fieldset>
                        <fieldset className="flex flex-col justify-center hover:underline">
                            <button type="submit" className=""> Register </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

