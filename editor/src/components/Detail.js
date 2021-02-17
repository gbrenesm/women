
import { convertMonth } from '../services/convertMonth'

const Detail = ({ woman }) => {

  let deathDay
  let deathMonth
  let deathYear
  let birthDay
  let monthDay
  let yearDay
  let eventsDay
  let eventsMonth
  let eventsYear

  if (woman.dateOfDeath){
    const { day, month, year } = convertMonth(woman.dateOfDeath)
    deathDay = day
    deathMonth = month
    deathYear = year
  }

  if (woman.birthDay){
    const { day, month, year } = convertMonth(woman.birthDay)
    birthDay = day
    monthDay = month
    yearDay = year
  }

  if (woman.eventsDay){
    const { day, month, year } = convertMonth(woman.eventsDay)
    eventsDay = day
    eventsMonth = month
    eventsYear = year
  }
  return (
    <main>
      <h1>{woman?.name}</h1>
      <div>
        <h2>Datos personales</h2>
        <p><b>Fecha de nacimiento:</b> {woman.birthDay? `${birthDay} de ${monthDay} de ${yearDay}` : 'No hay datos'}</p>
        <p><b>Fecha de defunción:</b> {woman.dateOfDeath? `${deathDay} de ${deathMonth} de ${deathYear}` : 'No hay datos'}</p>
        </div>
        <div>
        <h2>Datos del suceso</h2>
        <div>
            <p><b>{woman.what}</b></p>
            <p><b>Fecha:</b> {woman.eventsDay? `${eventsDay} de ${eventsMonth} de ${eventsYear}` : 'No hay datos'}</p>
            <p><b>Edad:</b> {woman.age? woman.age : 'No hay datos'}</p>
        </div>
        <p><b>Responsable:</b> {woman.who}</p>
        <p><b>Descripción:</b> {woman.description}</p>
        {woman.note && <p><b>Nota: </b>{woman.note}</p>}
      </div>
    </main>
  )
}

export default Detail