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
    <div className="form woman-form">
      <form onSubmit={submitForm}>
        <div>
          <h3>Información personal</h3>
          <div>
            <div>
              <label htmlFor="name" >Nombre:</label>
              <input type="text" name="name" id="name" placeholder="Nombre y apellidos" className="long" {...nameInput} />
            </div>
            <div>
              <label htmlFor="birthday" >Edad:</label>
              <input type="number" name="age" id="age" placeholder="Edad" {...age} />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="death" >Fecha de nacimiento:</label>
              <input type="date" name="birthday" id="birthday" {...birthDay}/>
            </div>
            <div>
              <label htmlFor="age" >Fecha de defunción:</label>
              <input type="date" name="death" id="death" {...dateOfDeath} />
            </div>
          </div>
        </div>

        <div>
          <h3>Inormación del evento</h3>
          <div>
            <div>
              <label htmlFor="eventsDay" >Fecha del evento:</label>
              <input type="date" name="eventsDay" id="eventsDay" {...eventsDayInput} />
            </div>
            <div>
              <label htmlFor="place" >Lugar:</label>
              <input type="text" name="place" id="place" placeholder="Ciudad o estado" className="long" {...placeInput} />
            </div>
            <div>
              <label htmlFor="who">¿Quién?:</label>
              <input type="text" name="who" id="who" placeholder="Nombre o relación" className="long" {...whoInput} />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="what" >¿Qué ocurrió?:</label>
              <select id="what">
                <option value="feminicidio">Feminicidio</option>
                <option value="intento">Inento de feminicidio</option>
                <option value="violación">violación</option>
                <option value="otra">otra</option>
              </select>
            </div>
            <div>
              <label htmlFor="other">¿Otra?:</label>
              <input type="text" name="other" id="other" placeholder="¿Qué ocurrió?" {...whatInput} />
            </div>
            
          </div>
          <div>
            <label htmlFor="description" >Breve descripción:</label>
            <textarea name="description" id="description" placeholder="Descripción del evento" {...descriptionInput} />
            <label htmlFor="note" >Nota:</label>
            <textarea  name="note" id="note" placeholder="¿Alguna nota?" {...noteInput} />
          </div>
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default AddWomanForm