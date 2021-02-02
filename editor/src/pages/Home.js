import { useState, useEffect } from 'react';

// Import components
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Home = () => {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    const fectchEvents = async () => {
      
    }

    fectchEvents()
  }, [])

  return (
    <>
    <Navbar/>
    </>
  )
}

export default Home