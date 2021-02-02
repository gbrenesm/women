import { useState, useEffect } from 'react';

// Import services
import { seeAllWomen } from '../services/woman';

// Import components
import Card from '../components/Card';

const AllWomanList = () => {
  const [women, setWomen] = useState(null)

  useEffect(() => {
    const fectchWomen = async () => {
      const dataWomen = await seeAllWomen()
      console.log(dataWomen)
      setWomen(dataWomen)
    }

    fectchWomen()
  }, [])

  return (
    <>
      {women?.map(event => (
        <Card key={event._id} event={event} />
      ))}
    </>
  )
}

export default AllWomanList