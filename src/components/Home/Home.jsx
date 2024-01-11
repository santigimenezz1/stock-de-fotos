import { useEffect, useState } from "react"
import ModalImagen from "../ModalImagen/ModalImagen"
import NavBar from "../NavBar/NavBar"
import Main from "./Main/Main"
import { search } from "../PeticionesFetch/Peticiones"

const Home = () => {
    const[imagenes, setImagenes] = useState([])
    

    useEffect(()=>{
        search( "gatos", setImagenes)
    },[])

    return (
        <>
        <NavBar setImagenes={setImagenes} />
        <Main imagenes={imagenes} />
    </>
    )
}
export default Home 