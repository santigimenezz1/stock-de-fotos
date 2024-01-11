import './tarjetaImagen.css'
import BotonDescarga from './BotonDescarga/BotonDescarga'
const TarjetaImagen = ( {url, handleOpen} ) => {

    return (
        <div className="tarjetaImagen">
            <div onClick={()=>handleOpen()}>
            <img src={url}></img>
            </div>
            <div className='botonDescarga'>
                <div className='container__botonDescarga'>
            <BotonDescarga />
                </div>
            </div>
        </div>
    )
}
export default TarjetaImagen