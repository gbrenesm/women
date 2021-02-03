import { useState } from 'react';

// Import components
import AddFactForm from './AddFactForm'

const Cards = ({ woman }) => {
  const [completeInfo, setCompleteInfo] = useState(false)

  return (
    <div>
      <h2 onClick={() => setCompleteInfo(!completeInfo)}>{woman.name}</h2>
      {completeInfo && 
      <>
        <p>Agregar suceso</p>
        <AddFactForm womanId={woman._id}/>
      </>}
    </div>
  )
}

export default Cards