import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// Import services
import { seeAllWomen } from '../services/woman';


const AllWomanList = () => {
  const [women, setWomen] = useState(null)
  const [changes, setChanges] = useState(false)

  useEffect(() => {
    const fectchWomen = async () => {
      const dataWomen = await seeAllWomen()
      setWomen(dataWomen.reverse())
      setChanges(false)
    }

    fectchWomen()
  }, [changes])

  

  return (
    <div className="table-content">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Suceso</th>
            <th>Fecha</th>
            <th>Lugar</th>
          </tr>
        </thead>
        <tbody>
          {women?.map(woman => (
            <tr key={woman._id}>
              <td><Link to={`/detail/${woman._id}`}>{woman.name}</Link></td>
              <td>{woman.what}</td>
              <td>{woman.eventsDay.slice(5, 7)} / {woman.eventsDay.slice(0, 4)}</td>
              <td>{woman.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllWomanList