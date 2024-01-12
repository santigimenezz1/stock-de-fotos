import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalVideo/modalVideo.css'
import download from 'downloadjs';
import TarjetaImagen from '../TarjetaImagen/TarjetaImagen';
import BotonClose from '../ModalImagen/BotonClose/BotonClose';
import BotonDescarga from '../TarjetaImagen/BotonDescarga/BotonDescarga';
import TarjetaVideo from '../TarjetaVideo/TarjetaVideo';

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

function ModalVideo( {vid} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 


  return (
    <div>
        <div>
             <TarjetaVideo handleOpen={handleOpen} vid={vid} />
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container__modalImagen'>
            <div className='botonCloseVideo'>
       <BotonClose handleClose={handleClose} />
            </div>
            <div className='botonDescarga__modal'>
        <BotonDescarga  />
            </div>
          <video style={{width:"100%", height:"100%", borderRadius:"20px", border:"none"}} controls className='imagen__modal' src={vid.video_files[0].link}></video >
        </div>
      </Modal>
    </div>
  );
}
export default ModalVideo