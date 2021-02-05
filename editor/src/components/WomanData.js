import { convertMonth } from '../services/convertMonth';

const WomanData = data => {

  const { day, month, year } = convertMonth(data.data.eventsDay)

  return (
    <>
      <p>Fecha del suceso: {day} de {month} de {year}</p>
      <p>¿Qué le sucedió?: {data.data.what}</p>
      <p>{data.data.description}</p>
      <p>{data.data.note}</p>
      <p>{data.data.place}</p>
      <p>{data.data.who}</p>
    </>
  )
}

export default WomanData