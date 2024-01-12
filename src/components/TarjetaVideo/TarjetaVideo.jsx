import React, { useState } from 'react';
import download from 'downloadjs';
import '../TarjetaVideo/tarjetaVideo.css';
import BotonDescarga from '../TarjetaImagen/BotonDescarga/BotonDescarga';

const TarjetaVideo =  ({ vid, handleOpen }) => {

    const videosSd = vid.video_files.filter((vid)=>vid.quality === "sd")


  return (
    <div className="tarjetaVideo">
      <div onClick={() => handleOpen()}>
      <video src={videosSd[0].link} width="180%"  autoPlay loop style={{borderRadius:"20px"}}>
     </video>
      </div>
      <div className="botonDescarga">
        <div className="container__botonDescarga">
        </div>
      </div>
    </div>
  );
};
export default TarjetaVideo;
