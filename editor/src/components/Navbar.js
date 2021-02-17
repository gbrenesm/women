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
      <div>
        <div onClick={() => setForm(true)}>
          <FontAwesomeIcon icon={faUserPlus} size='2x' className="icon"/>
          <p>Agrega mujer</p>
        </div>
        <div onClick={setWoman}>
          <FontAwesomeIcon icon={faIdCard} size='2x' className="icon"/>
          <p>Ver lista</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;