import { useEffect, useState } from "react"
import ModalImagen from "../ModalImagen/ModalImagen"
import NavBar from "../NavBar/NavBar"
import Main from "./Main/Main"
import { search, searchVideo } from "../PeticionesFetch/Peticiones"
import Selector from "../Selector/Selector"
import '../Home/home.css'

const Home = () => {
    const[imagenes, setImagenes] = useState([])
    const [typeSelector, setTypeSelector] = useState("v1")
    const [videos, setVideos] = useState([]) 

    useEffect(()=>{
        search( "gatos", setImagenes)
    },[])

   



    console.log({videos})
    return (
        <>
        <NavBar setImagenes={setImagenes} typeSelector={typeSelector} videos={videos} setVideos={setVideos} />
        <div className="container__selector">
            <Selector setTypeSelector={setTypeSelector} />
        </div>
        <Main imagenes={imagenes} typeSelector={typeSelector} videos={videos}/>
    </>
    )
}
export default Home 