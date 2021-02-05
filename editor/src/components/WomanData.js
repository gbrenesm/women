import { convertMonth } from '../services/convertMonth';

const WomanData = data => {

  const { day, month, year } = convertMonth(data.data.eventsDay)

  return (
    <>
      <div>
        <p><b>Fecha del suceso:</b> {day} de {month} de {year}</p>
        <p><b>Lugar:</b> {data.data.place}</p>
      </div>
      <div>
        <p><b>¿Qué le sucedió?:</b> {data.data.what}</p>
        <p><b>Responsable: </b>{data.data.who}</p>
      </div>
      <p><b>Breve descripción:</b> {data.data.description}</p>
      {data.data.note && <p><b>Notas adicionales: </b>{data.data.note}</p>}
    </>
  )
}

export default WomanData