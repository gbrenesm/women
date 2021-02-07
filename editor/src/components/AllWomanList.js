import { useState, useEffect } from 'react';

// Import services
import { seeAllWomen } from '../services/woman';

// Import components
import Card from './Card';

const AllWomanList = () => {
  const [women, setWomen] = useState(null)
  const [changes, setChanges] = useState(false)

  useEffect(() => {
    const fectchWomen = async () => {
      const dataWomen = await seeAllWomen()
      setWomen(dataWomen.reverse())
      setChanges(false)
      console.log(dataWomen)
    }

    fectchWomen()
  }, [changes])

  return (
    <div className="card-content">
      <h1>Listado de mujeres</h1>
      <div>
        {women?.map(woman => (
          <Card key={woman._id} woman={woman} setChanges={setChanges}/>
        ))}
      </div>
    </div>
  )
}

export default AllWomanList