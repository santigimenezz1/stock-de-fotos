import { useEffect, useState } from 'react'
import '../InputSearch/inputSearch.css'
import { search } from '../PeticionesFetch/Peticiones'
const InputSearch = ( {setImagenes} ) => {
    const [text, setText] = useState("")

   const handleSubmit = (event) => {
       event.preventDefault()
       search(text, setImagenes)
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