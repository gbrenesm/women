import { Link } from 'react-router-dom'

import { convertMonth } from '../services/convertMonth'

const Cards = ({ woman, setChanges }) => {

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
    <div className='card' >
      <div>
        <h3><Link to={`/detail/${woman._id}`}>{woman.name}</Link></h3>
      </div>
      <div>
        <p><b>{woman.what.toUpperCase()}</b></p>
        <div>
          <h2>Datos personales</h2>
          <p><b>Fecha de nacimiento:</b> {woman.birthDay? `${birthDay} de ${monthDay} de ${yearDay}` : 'No hay datos'}</p>
          <p><b>Fecha de defunción:</b> {woman.dateOfDeath? `${deathDay} de ${deathMonth} de ${deathYear}` : 'No hay datos'}</p>
        </div>
        <div>
          <h2>Datos del suceso</h2>
          <p><b>Responsable:</b> {woman.who? woman.who : 'No hay datos'}</p>
          <p><b>Fecha:</b> {woman.eventsDay? `${eventsDay} de ${eventsMonth} de ${eventsYear}` : 'No hay datos'}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards