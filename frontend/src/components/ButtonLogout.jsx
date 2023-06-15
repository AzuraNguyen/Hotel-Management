import React from 'react'
import {Link} from 'react-router-dom'
import './ButtonLogout.css'


const ButtonLogout = () => {
  return (
    <div className='logout_wrapper'>
      <Link to='/login' id='btn_logout'>
        Đăng xuất
      </Link>
    </div>
  )
}

export default ButtonLogout
