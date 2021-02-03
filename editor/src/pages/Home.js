import { useState } from 'react';

// Import components
import Navbar from '../components/Navbar';
import AllWomanList from '../components/AllWomanList';
import AddWomanForm from '../components/AddWomanForm';

const Home = () => {
const [form, setForm] = useState(false)

  return (
    <div id="page">
      <Navbar setForm={setForm} />
      <div>
        {form? 
        <AddWomanForm setForm={setForm}/> :  <AllWomanList/>
        }
      </div>
    </div>
  )
}

export default Home