import ModalImagen from "../../ModalImagen/ModalImagen";
import '../Main/main.css';

const Main = ({ imagenes }) => {
    return (
        <div>
            {imagenes.length > 0 ? (
                <div className="grid-container">
                    {imagenes.map((img) => (
                        <div className="grid-item" key={img.id}>
                            <ModalImagen img={img} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="container__error">
                    <h1>No se encontraron fotos para tu busqueda</h1>
                </div>
            )}
        </div>
        
    );
};

export default Main;
