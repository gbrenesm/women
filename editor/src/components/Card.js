
// Import components
import WomanData from './WomanData'
import AddFactForm from './AddFactForm'

const Cards = ({ woman }) => {


  return (
    <div className='card' >
      <h3>{woman.name}</h3>
      {woman.data? <WomanData data={ woman.data } /> : <AddFactForm womanId={woman._id}/>}
    </div>
  )
}

export default Cards