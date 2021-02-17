// Import hooks
import useInput from '../hooks/useInput';

// Import services
import { addWoman } from '../services/woman';


const AddWomanForm = ({ setForm }) => {
  const nameInput        = useInput('')
  const birthDay         = useInput('')
  const dateOfDeath      = useInput('')
  const age              = useInput('')
  const eventsDayInput   = useInput('')
  const placeInput       = useInput('')
  const whoInput         = useInput('')
  const whatInput        = useInput('')
  const descriptionInput = useInput('')
  const noteInput        = useInput('')

  const submitForm = async e => {
    e.preventDefault()
    await addWoman({
      name: nameInput.value,
      birthDay: birthDay.value,
      dateOfDeath: dateOfDeath.value,
      age: age.value,
      eventsDay: eventsDayInput.value,
      place: placeInput.value,
      who: whoInput.value,
      what: whatInput.value,
      description: descriptionInput.value,
      note: noteInput.value
    })
    setForm(false)
  }
  
  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="name" >Nombre:</label>
        <input type="text" name="name" id="name" placeholder="" {...nameInput} />
        <label htmlFor="birthday" >Edad:</label>
        <input type="number" name="age" id="age" placeholder="" {...age} />
        <label htmlFor="death" >Fecha de nacimiento:</label>
        <input type="date" name="birthday" id="birthday" placeholder="" {...birthDay}/>
        <label htmlFor="age" >Fecha de defunción:</label>
        <input type="date" name="death" id="death" placeholder="" {...dateOfDeath} />
        <label htmlFor="eventsDay" >Fecha:</label>
        <input type="date" name="eventsDay" id="eventsDay" placeholder="" {...eventsDayInput} />
        <label htmlFor="place" >Lugar:</label>
        <input type="text" name="place" id="place" placeholder="" {...placeInput} />
        <label htmlFor="what" >¿Qué ocurrió?:</label>
        <input type="text" name="what" id="what" placeholder="" {...whatInput} />
        <label htmlFor="who" >¿Quién?:</label>
        <input type="text" name="who" id="who" placeholder="" {...whoInput} />
        <label htmlFor="description" >Breve descripción:</label>
        <textarea name="description" id="description" placeholder="" {...descriptionInput} />
        <label htmlFor="note" >Nota:</label>
        <textarea  name="note" id="note" placeholder="" {...noteInput} />
        <button type="submit">Agregar</button>
      </form>
    </>
  )
}

export default AddWomanForm