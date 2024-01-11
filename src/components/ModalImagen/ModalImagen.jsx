import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modalImagen.css'
import BotonDescarga from '../TarjetaImagen/BotonDescarga/BotonDescarga';
import BotonClose from './BotonClose/BotonClose';
import TarjetaImagen from '../TarjetaImagen/TarjetaImagen';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalImagen( {img} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <div>
             <TarjetaImagen handleOpen={handleOpen} url={img.src.portrait} />
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container__modalImagen'>
            <div className='botonClose'>
       <BotonClose handleClose={handleClose} />
            </div>
            <div className='botonDescarga__modal'>
        <BotonDescarga />
            </div>
          <img className='imagen__modal' src={img.src.original}></img>
        </div>
      </Modal>
    </div>
  );
}
export default ModalImagen