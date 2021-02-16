import { useState, useEffect } from 'react'

// Import services
import { seeWomanDetails } from '../services/woman'

// Import components
import Detail from '../components/Detail'
import AddRecordForm from '../components/AddRecordForm'

const DetailPage = ({ match: { params: { womanid }}}) => {
  const [woman, setWoman] = useState(null)
  const [form, setForm] = useState(false)
  const [newNote, setNewNote] = useState(false)

  useEffect(() => {
    const fetchDetails = async womanId => {
      const details = await seeWomanDetails(womanId)
      setWoman(details)
      setNewNote(false)
    }

    fetchDetails(womanid)
  }, [womanid, newNote])

  return (
    <div>
      <p>Regresa</p>
      {woman? <Detail woman={woman}/> : <p>Cargando...</p>}
      <p onClick={() => setForm(!form)}>Añade una nota</p>
      {form && <AddRecordForm setNewNote={setNewNote} womanId={womanid} setForm={setForm}/>}
    </div>
  )
}

export default DetailPage