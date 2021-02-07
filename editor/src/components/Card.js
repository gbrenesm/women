import { Link } from 'react-router-dom'


const Cards = ({ woman, setChanges }) => {

  return (
    <div className='card' >
      <h3><Link to={`/detail/${woman._id}`}>{woman.name}</Link></h3>
    </div>
  )
}

export default Cards