// Import hooks
import useInput from '../hooks/useInput';

// Impor services
import { addData } from '../services/data'

const AddFactForm = ({ womanId }) => {
  const eventsDayInput      = useInput('')
  const placeInput          = useInput('')
  const whoInput            = useInput('')
  const whatInput           = useInput('')
  const descriptionInput    = useInput('')
  const noteInput           = useInput('')

  const submitForm = async e => {
    e.preventDefault()
    await addData(womanId, {
      eventsDay: eventsDayInput.value,
      place: placeInput.value,
      who: whoInput.value,
      what: whatInput.value,
      description: descriptionInput.value,
      note: noteInput.value
    })
  }

  return (
    <form onSubmit={submitForm}>
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
  )
}

export default AddFactForm