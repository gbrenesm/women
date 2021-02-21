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
    <div className="form record-form">
    <h3>Añadir nota de periódico</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" >Título de la nota:</label>
        <input type="text" name="name" id="name"  placeholder="Título" className="long" {...nameInput} />
      </div>
      <div>
        <label htmlFor="newspaper" >Periódico:</label>
        <input type="text" name="newspaper" id="newspaper" placeholder="Nombre de la publicación" className="long" {...newspaperInput}/>
      </div>
      <div>
        <div>
          <label htmlFor="publicationDate" >Fecha de publicación:</label>
          <input type="date" name="publicationDate" id="publicationDate" {...publicationDateInput} />
        </div>
        <div>
          <label htmlFor="page" >Página(s):</label>
          <input type="text" name="page" id="page" placeholder="2, 5 y 7" {...pageInput}/>
        </div>
      </div>
      <div>
        <label htmlFor="publicationPlace" >Lugar de publicación:</label>
        <input type="text" name="publicationPlace" id="publicationPlace" placeholder="Ciudad o país"  {...publicationPlaceInput} />
      </div>
      <div>
        <label htmlFor="transcription" >Transcripción:</label>
        <br/>
        <textarea name="transcription" id="transcription" placeholder="Transcripción"  {...transcriptionInput} />
      </div>
      <div>
        <label htmlFor="file" >Imagen de la nota</label>
        <input type="file" name="file" id="file" onChange={uploadFile}/>
      </div>
      <div>
        <label htmlFor="url" >URL de la nota:</label>
        <input type="text" name="url" id="url" placeholder="https://..." className="long"  {...urlInput}/>
      </div>
      <div className="button">
        <button type="submit">Crear registro</button>
        <button onClick={() => setForm(false)} >Cancelar</button>
      </div>
    </form>
    </div>
  )
}

export default AddRecordForm