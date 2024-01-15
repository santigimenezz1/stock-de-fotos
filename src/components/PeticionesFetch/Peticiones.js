export const search = async (text, setImagenes) => {
    let data;
    let page = 1
    let type="v1"
    try {
        const response = await fetch(`https://api.pexels.com/${type}/search?query=${text}&page=${page}`, {
            method: 'GET',
            headers: {
                'Authorization': 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl',
            }
        });
        if (response.ok) {
             data = await response.json();
            setImagenes(data.photos);
            return
        } else {
            console.error('Error al recuperar datos de la API');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

export const searchVideo = async (text, setVideos) => {
    let data;
    let page = 1
    let type="videos"
    try {
        const response = await fetch(`https://api.pexels.com/${type}/search?query=${text}&page=${page}`, {
            method: 'GET',
            headers: {
                'Authorization': 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl',
            }
        });
        if (response.ok) {
             data = await response.json();
             setVideos(data.videos);
            return
        } else {
            console.error('Error al recuperar datos de la API');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}
export const searchFotografo = async ({ setFotografo }) => {
    let data;
  
    try {
      const response = await fetch('https://api.pexels.com/v1/photographers/2481684', {
        method: 'GET',
        headers: {
          'Authorization': 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl',
        },
      });
  
      if (response.ok) {
        data = await response.json();
        setFotografo(data);  // Aquí corregí setFotogrado a setFotografo
        return;
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
};

