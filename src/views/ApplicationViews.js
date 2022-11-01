import { Outlet, Route, Routes } from "react-router-dom"
import { DogAdopt } from "../components/doglist/DogAdopt"
import { DogContainer } from "../components/doglist/DogContainer"
import { DogForm } from "../components/doglist/DogForm"
import { DogList } from "../components/doglist/DogList"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
             
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
                    <DogContainer />
                    <Outlet />
                </>
            }>

            </Route>
            <Route path="/create" element={ <DogForm></DogForm>
            }>
            </Route>
            <Route path="/adopt" element={ <DogAdopt></DogAdopt> }></Route>
        </Routes>
    )
}