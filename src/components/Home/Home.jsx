import { useEffect, useState } from "react"
import ModalImagen from "../ModalImagen/ModalImagen"
import NavBar from "../NavBar/NavBar"
import Main from "./Main/Main"
import { search, searchFotografo, searchVideo } from "../PeticionesFetch/Peticiones"
import Selector from "../Selector/Selector"
import '../Home/home.css'
import BotonesEnlacesMobile from "../BotonesEnlacesMobile/BotonesEnlacesMobile"

const Home = () => {
    const[imagenes, setImagenes] = useState([])
    const [typeSelector, setTypeSelector] = useState("v1")
    const [videos, setVideos] = useState([]) 
    const [fotografo, setFotografo] = useState()

    useEffect(()=>{
        search( "gatos", setImagenes)
    },[])

    useEffect(()=>{
        searchVideo( "tigers", setVideos)
    },[])

    

   


    console.log({imagenes})
    return (
        <>
        <NavBar setImagenes={setImagenes} typeSelector={typeSelector} videos={videos} setVideos={setVideos} />
        <div className="container__selector">
            <Selector setTypeSelector={setTypeSelector} />
        </div>
        <div className="titulo">
            <h1>Fotos de gatos</h1>
        </div>
        <Main imagenes={imagenes} typeSelector={typeSelector} videos={videos}/>
    </>
    )
}
export default Home 