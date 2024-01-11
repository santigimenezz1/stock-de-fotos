import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import ModalImagen from "./components/ModalImagen/ModalImagen"


const Inicio =  () => {
    const[text, setText] = useState("paris")
    const[imagenes, setImagenes] = useState([])
    console.log(imagenes)
    return (
        <>
            <NavBar text={text} setText={setText} setImagenes={setImagenes} />
            <div class="grid-container">
            {
                imagenes.map((img)=>(
                        <div className="grid-item">
                        <ModalImagen img={img} />
                </div>
               
               ))
               
            }
            </div>

        </>
    )
}
export default Inicio