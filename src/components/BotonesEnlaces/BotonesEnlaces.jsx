import { useState } from "react"
import BotonNavBar from "../BotonNavBar/BotonNavBar"

const BotonesEnlaces = () => {
    const [botonActive, setBotonActive] = useState("Inicio")

    return (
        <div style={{display:"flex", gap:"15px"}}>
        <div>
            <BotonNavBar  text={"Inicio"} botonActive={botonActive}  setBotonActive={setBotonActive}/> 
            </div>
            <div>
            <BotonNavBar text={"Explorar"} botonActive={botonActive} setBotonActive={setBotonActive} /> 
            </div>
            <div>
            <BotonNavBar text={"Crear"} botonActive={botonActive} setBotonActive={setBotonActive}  /> 
            </div>
        </div>
    )
}
export default BotonesEnlaces