import { useState } from 'react';

// Import components
import Navbar from '../components/Navbar';
import AllWomanList from '../components/AllWomanList';
import AddWomanForm from '../components/AddWomanForm';

const Home = () => {
const [form, setForm] = useState(false)

  return (
    <>
    <Navbar setForm={setForm} />
    {form? <AddWomanForm setForm={setForm}/> : <AllWomanList/>}
    </>
  )
}

export default Home