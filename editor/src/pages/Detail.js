import { useState, useEffect } from 'react'

// Import services
import { seeDataDetail } from '../services/data';

const Detail = ({ match: { params: { dataid }}}) => {
  const [fact, setFact] = useState(null)

  useEffect(() => {
    const fetchData = async dataId => {
      const data = await seeDataDetail(dataId)
      setFact(data)
    }
    
    fetchData(dataid)
  }, [])

  return (
    <div>
      <h2>{fact?.woman.name}</h2>
    </div>
  )
}

export default Detail