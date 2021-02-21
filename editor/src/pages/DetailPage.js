import { useState, useEffect } from 'react'


// Import services
import { seeWomanDetails } from '../services/woman'

// Import components
import TopBar from '../components/TopBar'
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
    <div className='page details-page'>
      <TopBar title={woman?.name} back={true}/>
      <div>
        {woman?
        <Detail 
          woman={woman}
          setForm={setForm}
          form={form}/> 
        : <div className="loader"></div>}
        {form && <AddRecordForm setNewNote={setNewNote} womanId={womanid} setForm={setForm}/>}
      </div>
    </div>
  )
}

export default DetailPage