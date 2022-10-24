import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login.js"
import { Register } from "../auth/Register.js"
import { NavBar } from "../nav/NavBar.js"
import { ApplicationViews } from "../views/ApplicationViews.js"
import { Authorized } from "../views/Authorized.js"

export const DitchedDogs = () => {
  return <Routes>
    <Route path ="/login" element={<Login />} />
    <Route path ="/register" element={<Register />} />

    <Route path="*" element={
      <Authorized>
        <>
          <NavBar />
          <ApplicationViews />
        </>
      </Authorized>
    } />
  </Routes>
}