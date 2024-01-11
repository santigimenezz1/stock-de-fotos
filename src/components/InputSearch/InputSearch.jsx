import { useEffect, useState } from 'react'
import '../InputSearch/inputSearch.css'
const InputSearch = ( {text, setText, setImagenes} ) => {

       const search = async () => {
           let data;
           let page = 1
           try {
               const response = await fetch(`https://api.pexels.com/v1/search?query=${text}&page=${page}`, {
                   method: 'GET',
                   headers: {
                       'Authorization': 'vOV8UbIS6FxoVnHMiHBiu3FJlx1PsUXTesSuS3LG8weefCDW11ymoWOl',
                   }
               });
               if (response.ok) {
                    data = await response.json();
                   console.log(data)
                   setImagenes(data.photos);
                   return
               } else {
                   console.error('Error al recuperar datos de la API');
               }
           } catch (error) {
               console.error('Error en la solicitud:', error);
           }
       }

       useEffect(()=>{
           search()
       },[])

       



   const handleSubmit = (event) => {
       event.preventDefault()
       search()
   }
   const handleChange = (event) => {
       setText(event.target.value)
   }


   return (
       <form onSubmit={handleSubmit} className="form">
           <input onChange={handleChange} className="form__input" placeholder="Busca fotos gratuitas"></input>
       </form>
   )
}
export default InputSearch