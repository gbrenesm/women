import { useState } from 'react'
import axios from 'axios'

// Import services
import { addRecord } from '../services/record'

// Import hooks
import useInput from '../hooks/useInput'

const AddRecordForm = ({ setNewNote, womanId, setForm }) => {
  const nameInput             = useInput('')
  const newspaperInput        = useInput('')
  const publicationDateInput  = useInput('')
  const pageInput             = useInput('')
  const publicationPlaceInput = useInput('')
  const transcriptionInput    = useInput('')
  const urlInput              = useInput('')
  const [imageURL, setImageURL] = useState(null)

  const uploadFile = async ({ target: { files } }) => {
    console.log(files)
    try {
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'Woman_project')
      const { data: { secure_url } } = await axios.post('https://api.cloudinary.com/v1_1/dxncdwsau/image/upload', data)
      setImageURL(secure_url)
    } catch(error) {
      console.log(error)
    }
  } 

  const handleSubmit = async e => {
    e.preventDefault()
    await addRecord(womanId, {
      name: nameInput.value,
      newspaper: newspaperInput.value,
      publicationDate: publicationDateInput.value,
      page: pageInput.value,
      publicationPlace: publicationPlaceInput.value,
      transcription: transcriptionInput.value,
      url: urlInput.value,
      file: imageURL,
    })
    setNewNote(true)
    setForm(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" >Título de la nota</label>
      <input type="text" name="name" id="name"  placeholder="" {...nameInput} />
      <label htmlFor="newspaper" >Periódico</label>
      <input type="text" name="newspaper" id="newspaper"  placeholder="" {...newspaperInput}/>
      <label htmlFor="publicationDate" >Fecha de publicación</label>
      <input type="date" name="publicationDate" id="publicationDate" placeholder=""  {...publicationDateInput} />
      <label htmlFor="page" >Página(s)</label>
      <input type="text" name="page" id="page" {...pageInput}/>
      <label htmlFor="publicationPlace" >Lugar de publicación</label>
      <input type="text" name="publicationPlace" id="publicationPlace" placeholder=""  {...publicationPlaceInput} />
      <label htmlFor="transcription" >Transcripción</label>
      <textarea name="transcription" id="transcription" placeholder=""  {...transcriptionInput} />
      <label htmlFor="file" >Imagen de la nota</label>
      <input type="file" name="file" id="file" placeholder="" onChange={uploadFile}/>
      <label htmlFor="url" >URL de la nota</label>
      <input type="text" name="url" id="url" {...urlInput}/>
      <button type="submit">Crear registro</button>
    </form>
  )
}

export default AddRecordForm