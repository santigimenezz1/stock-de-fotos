 import { useState } from 'react';
import BotonNavBar from '../BotonNavBar/BotonNavBar'
import BotonesEnlaces from '../BotonesEnlaces/BotonesEnlaces'
import '../BotonesEnlacesMobile/botonesEnlacesMobile.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const BotonesEnlacesMobile = () => {
    const [estadoOn, setEstadoOn] = useState(false)
    return (
        <div className='container_enlacesMobile'>
        <div className='BotonesEnlacesMobile' onClick={()=>setEstadoOn(!estadoOn)}>
            <button className='boton_mobile'>Inicio</button>
            <ArrowDropDownIcon />
        </div>
        <div className={!estadoOn ? "enlaces__mobileOf" : "enlaces__mobile"  }>
            <button>Inicio</button>
            <button>Exporar</button>
            <button>Crear</button>
        </div>
        </div>
        
    )
}
export default BotonesEnlacesMobile
