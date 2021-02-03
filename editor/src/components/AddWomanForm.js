// Import hooks
import useInput from '../hooks/useInput';

// Import services
import { addWoman } from '../services/woman';


const AddWomanForm = ({ setForm }) => {
  const nameInput   = useInput('')
  const birthDay    = useInput('')
  const dateOfDeath = useInput('')
  const age         = useInput('')

  const submitForm = async e => {
    e.preventDefault()
    await addWoman({
      name: nameInput.value,
      birthDay: birthDay.value,
      dateOfDeath: dateOfDeath.value,
      age: age.value
    })
    setForm(false)
  }
  
  return (
      <form onSubmit={submitForm}>
        <label htmlFor="name" >Nombre:</label>
        <input type="text" name="name" id="name" placeholder="" {...nameInput} />
        <label htmlFor="birthday" >Edad:</label>
        <input type="number" name="age" id="age" placeholder="" {...age} />
        <label htmlFor="death" >Fecha de nacimiento:</label>
        <input type="date" name="birthday" id="birthday" placeholder="" {...birthDay}/>
        <label htmlFor="age" >Fecha de defunción:</label>
        <input type="date" name="death" id="death" placeholder="" {...dateOfDeath} />
        <button type="submit">Agregar</button>
      </form>
  )
}

export default AddWomanForm