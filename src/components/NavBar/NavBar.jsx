import { useState } from 'react'
import BotonNavBar from '../BotonNavBar/BotonNavBar'
import InputSearch from '../InputSearch/InputSearch'
import './navBar.css'
import BotonesEnlaces from '../BotonesEnlaces/BotonesEnlaces'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavBar = ( {setImagenes, handleDatosCargados} ) => {
    return (
        <nav className='nav'>
            <div className='nav__image'>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1705007307/pixel_studio_ocmvav.png'></img>
            <BotonesEnlaces />
            </div>
            <div className='nav__input'>
            <InputSearch setImagenes={setImagenes}  />
            </div>
            <AccountCircleIcon fontSize='large' style={{cursor:"pointer"}} />
        </nav>
    )
}
export default NavBar