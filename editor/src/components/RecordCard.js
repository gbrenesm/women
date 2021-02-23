import { convertMonth } from '../services/convertMonth'

const RecordCard = ({ record }) => {
  const { completeDay } = convertMonth(record.publicationDate)
  return (
    <div>
      <div>
        <img src={record.file} alt={`${record.name}`}/>
      </div>
      <div>
        <a href={record.url}>{record.name}</a>
        <p>{record.newspaper}, pp. {record.page}</p>
        <p>{completeDay}, {record.publicationPlace}</p>
        <p><b>Transcripción:</b> {record.transcription}</p>
      </div>
    </div>
  )
}

export default RecordCard