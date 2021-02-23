
import { convertMonth } from '../services/convertMonth'

const Detail = ({ woman, setForm, form }) => {

  let deathDate
  let birthDate
  let eventsDate
  
  if (woman.dateOfDeath){
    const { completeDay } = convertMonth(woman.dateOfDeath)
    deathDate = completeDay
  }

  if (woman.birthDay){
    const { completeDay } = convertMonth(woman.birthDay)
    birthDate = completeDay
  }

  if (woman.eventsDay){
    const { completeDay } = convertMonth(woman.eventsDay)
    eventsDate = completeDay
    console.log(woman)
  }
  return (
    <main>
      <div>
        <p className='what'><b>{woman.what}</b></p>
        <p onClick={() => setForm(!form)}>Añade una nota</p>
      </div>
      <h2>Datos personales</h2>
      <div>
        <p><b>Fecha de nacimiento:</b> {woman.birthDay? birthDate : 'No hay datos'}</p>
        <p><b>Fecha de defunción:</b> {woman.dateOfDeath? deathDate : 'No hay datos'}</p>
        </div>
      <h2>Datos del suceso</h2>
      <div>
        <p><b>Fecha:</b> {woman.eventsDay? eventsDate : 'No hay datos'}</p>
        <p><b>Lugar:</b> {woman.place}</p>
        <p><b>Edad:</b> {woman.age? woman.age : 'No hay datos'}</p>
        <p><b>Responsable:</b> {woman.who}</p>
        <p><b>Descripción:</b> {woman.description}</p>
        {woman.note && <p><b>Nota: </b>{woman.note}</p>}
      </div>
    </main>
  )
}

export default Detail