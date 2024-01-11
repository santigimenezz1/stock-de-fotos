import ModalImagen from "../../ModalImagen/ModalImagen"
import '../Main/main.css'

const Main =   ( {imagenes} ) => {
    return(
        <div class="grid-container">
        {
            imagenes.map((img)=>(
                    <div className="grid-item" key={img.id}>
                    <ModalImagen img={img} />
            </div>
           )) 
        }
        </div>
    )
}
export default Main 