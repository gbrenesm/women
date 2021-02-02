const Navbar = ({ setForm }) => {
  
  return (
    <div>
      <ul>
        <li onClick={() => setForm(true)}>Agregar mujer</li>
        <li onClick={() => setForm(false)}>Ver lista de todas las mujeres</li>
      </ul>
    </div>
  )
}

export default Navbar;