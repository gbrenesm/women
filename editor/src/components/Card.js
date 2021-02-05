
// Import components
import WomanData from './WomanData'
import AddFactForm from './AddFactForm'

const Cards = ({ woman, setChanges }) => {

  return (
    <div className='card' >
      <h3>{woman.name}</h3>
      {woman.data? <WomanData data={ woman.data } /> : <AddFactForm womanId={woman._id} setChanges={setChanges}/>}
    </div>
  )
}

export default Cards