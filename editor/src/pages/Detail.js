import { useState } from 'react'

const Detail = ({ match: { params: { dataid }}}) => {
  const [fact, setFact] = useState(null)


  return (
    <div>
      <h2>{fact?.woman.name}</h2>
    </div>
  )
}

export default Detail