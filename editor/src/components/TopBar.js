import { useHistory } from 'react-router-dom'

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const TopBar = ({ title, back }) => {
  const history = useHistory()

  return (
    <div className="topbar">
      {back && <p onClick={()=> history.push('/')}><FontAwesomeIcon icon={faChevronLeft}/> Regresa</p>}
      <h2>{title}</h2>
    </div>
  )
}

export default TopBar
