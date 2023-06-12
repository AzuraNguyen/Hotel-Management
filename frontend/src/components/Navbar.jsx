import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import ButtonLogout from './ButtonLogout'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className='navbar_hotelName'>
        Group09 Hotel
      </Link>
      <div className='btn_logout'>
        <ButtonLogout/>
      </div>
    </nav>
  )
}

export default Navbar
