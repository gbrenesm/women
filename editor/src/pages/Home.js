import { useState } from 'react';

// Import components
import Navbar from '../components/Navbar';
import AllWomanList from '../components/AllWomanList';
import AddWomanForm from '../components/AddWomanForm';

const Home = () => {
  // This state is for changing between the woman list and the form to add a woman
const [form, setForm] = useState(false)

  // This state is for changing between see the complete list of woman or see the details of one woman
const [allWoman, setAllWoman] = useState(true)

  return (
    <>
      <Navbar setForm={setForm} setAllWoman={setAllWoman} />
      <div>
        {form? 
        <AddWomanForm setForm={setForm}/> :  <AllWomanList allWoman={allWoman} setAllWoman={setAllWoman}/>
        }
      </div>
    </>
  )
}

export default Home