import { useState } from 'react';

// Import components
import AddFactForm from './AddFactForm'

const Cards = ({ woman }) => {
  const [completeInfo, setCompleteInfo] = useState(false)

  return (
    <div className='card' >
      <h3 onClick={() => setCompleteInfo(!completeInfo)}>{woman.name}</h3>
      {completeInfo && 
      <>
        {woman.data? <p>Hey</p> : <AddFactForm womanId={woman._id}/>}
        
      </>}
    </div>
  )
}

export default Cards