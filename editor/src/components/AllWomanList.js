import { useState, useEffect } from 'react';

// Import services
import { seeAllWomen } from '../services/woman';

// Import components
import Card from './Card';

const AllWomanList = () => {
  const [women, setWomen] = useState(null)
 

  useEffect(() => {
    const fectchWomen = async () => {
      const dataWomen = await seeAllWomen()
      setWomen(dataWomen.reverse())
    }

    fectchWomen()
  }, [])

  return (
    <>
      <h2>Listado de mujeres</h2>
      {women?.map(woman => (
        <Card key={woman._id} woman={woman} />
      ))}
    </>
  )
}

export default AllWomanList