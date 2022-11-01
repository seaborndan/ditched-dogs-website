import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [email, set] = useState("example@email.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("ditched-user", JSON.stringify({
                        id: user.id,
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-20 h-20 mr-2" src="https://i.ibb.co/qMzfcdm/unnamed.png" alt="logo"/>
                Ditched Dogs    
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleLogin} class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" value={email} onChange={evt => set(evt.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                        </div>

                        
                        <button type="submit" class="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p class="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/register">Sign up</Link></a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>


    )
 /*   return (

        <main className="">
            <section className="">
                <form className="" onSubmit={handleLogin}>
                    <h1 className="">Ditched Dogs</h1>
                    <h2 className="">Please sign in</h2>
                    
                    <fieldset className="">
                        <p>Email address</p>
                        <input className="" type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset className="">
                        <button type="">
                            Sign in
                        </button>
                    </fieldset>
                </form>
                <section className="">
                <Link to="/register">Not a member yet?</Link>
                </section>
            </section>
            
        </main> 
        
        
    ) */
}

