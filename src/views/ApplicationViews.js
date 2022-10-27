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
                    <h1>Ditched Dogs</h1>
                    <div>Your one-stop-shop to ditch your dogs or nab someone elses</div>
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