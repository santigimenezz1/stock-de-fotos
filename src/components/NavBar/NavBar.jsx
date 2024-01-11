import BotonNavBar from '../BotonNavBar/BotonNavBar'
import InputSearch from '../InputSearch/InputSearch'
import './navBar.css'

const NavBar = ( {setImagenes} ) => {
    return (
        <nav className='nav'>
            <div className='nav__image'>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704909412/Pexels-logo_j042fd.webp'></img>
            <BotonNavBar /> 
            <BotonNavBar /> 
            <BotonNavBar /> 
            </div>
            <div className='nav__input'>
            <InputSearch setImagenes={setImagenes}  />
            </div>
            <img className='logo__perfil' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1704910229/istockphoto-1095289632-170667a_cj1gnu.jpg'></img>
        </nav>
    )
}
export default NavBar