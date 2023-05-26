import {Link, NavLink} from 'react-router-dom'


import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to='/' className='home'>
          Hello
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
