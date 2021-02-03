const Navbar = ({ setForm }) => {
  
  return (
    <nav>
      <h1>Editor</h1>
      <ul>
        <li onClick={() => setForm(true)}>Agregar mujer</li>
        <li onClick={() => setForm(false)}>Ver lista de todas las mujeres</li>
      </ul>
    </nav>
  )
}

export default Navbar;