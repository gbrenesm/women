import { useState, useEffect } from 'react'

// Import services
import { seeWomanDetails } from '../services/woman'

// Import components
import Detail from '../components/Detail'

const DetailPage = ({ match: { params: { womanid }}}) => {
  const [woman, setWoman] = useState(null)

  useEffect(() => {
    const fetchDetails = async womanId => {
      const details = await seeWomanDetails(womanId)
      setWoman(details)
      console.log(details)
    }
    fetchDetails(womanid)
  }, [womanid])

  return (
    <div>
      <p>Regresa</p>
      {woman? <Detail woman={woman}/> : <p>Cargando...</p>}
    </div>
  )
}

export default DetailPage