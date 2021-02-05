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
    }

    fectchWomen()
  }, [changes])

  return (
    <>
      <h2>Listado de mujeres</h2>
      <div className="card-content">
        {women?.map(woman => (
          <Card key={woman._id} woman={woman} setChanges={setChanges}/>
        ))}
      </div>
    </>
  )
}

export default AllWomanList