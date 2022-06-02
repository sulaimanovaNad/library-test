import React from 'react'
import './Header.css'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <div>
            <Link className='links' to="/">Library</Link>
            <Link className='links' to="/wishlist">WishList</Link>
          </div>
        </div>
      </header>
    </div>
  )
}
