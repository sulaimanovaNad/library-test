import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo.png'
import { useSelector } from 'react-redux'

export default function Header() {
  const wishlist = useSelector(store => store.wishlist)
  const quantity = wishlist.length
  return (
    <div>
      <header>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <div>
            <Link className='links' to="/">Library</Link>
            <Link className='links' to="/wishlist">WishList
            <div className='red-quantity'>{quantity}</div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
