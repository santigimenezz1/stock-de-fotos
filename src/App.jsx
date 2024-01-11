import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ModalImagen from "./components/ModalImagen/ModalImagen"
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const Inicio =  () => {
       return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/explorar" element={<Home />}/>
          <Route path="/crear" element={<Home />}/>
          <Route path="/perfil" element={<Home />}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Inicio