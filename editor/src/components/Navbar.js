const Navbar = ({ setForm, setAllWoman }) => {
  
  const setWoman = () => {
    setForm(false)
    setAllWoman(true)
  }

  return (
    <nav>
      <h1>Editor</h1>
      <ul>
        <li onClick={() => setForm(true)}>Agregar mujer</li>
        <li onClick={setWoman}>Ver lista de todas las mujeres</li>
      </ul>
    </nav>
  )
}

export default Navbar;