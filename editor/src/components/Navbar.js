import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus, faIdCard } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({ setForm, setAllWoman }) => {
  
  const setWoman = () => {
    setForm(false)
    setAllWoman(true)
  }

  return (
    <nav>
      <h1>Editor</h1>
      <hr/>
      <ul>
        <li onClick={() => setForm(true)}><span><FontAwesomeIcon icon={faUserPlus}/></span> Agregar mujer</li>
        <li onClick={setWoman}><span><FontAwesomeIcon icon={faIdCard}/></span>Ver lista completa</li>
      </ul>
    </nav>
  )
}

export default Navbar;