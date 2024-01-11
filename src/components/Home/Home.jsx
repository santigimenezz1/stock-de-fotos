import { useState } from "react"
import ModalImagen from "../ModalImagen/ModalImagen"
import NavBar from "../NavBar/NavBar"
import Main from "./Main/Main"

const Home = () => {
    const[imagenes, setImagenes] = useState([])

    return (
        <>
        <NavBar setImagenes={setImagenes} />
        <Main imagenes={imagenes} />
    </>
    )
}
export default Home 