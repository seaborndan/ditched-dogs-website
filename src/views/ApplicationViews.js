import { Outlet, Route, Routes } from "react-router-dom"
import { DogList } from "../components/doglist/DogList"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Ditched Dogs</h1>
                    <div>Your one-stop-shop to ditch your dogs or nab someone elses</div>
                    <DogList />
                    <Outlet />
                </>
            }>

            </Route>
        </Routes>
    )
}