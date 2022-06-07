import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo.png'
import { useSelector } from 'react-redux'

export default function Header() {
  const wishlist = useSelector(store => store.wishlist)
  const quantity = wishlist.length

  const handleClickLink = () => {
    document.getElementsByClassName('links').style = 'background: red'
  }

  return (
    <div>
      <header>
        <div className='container'>
          <div className='logo'>
          <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div>
            <Link className='links' to="/" onChange={handleClickLink}>Home</Link>
            <Link className='links' to="/addbook" onChange={handleClickLink}>Add your book</Link>
            <Link className='links' to="/wishlist" onChange={handleClickLink}>Your wishlist
            <div className='red-quantity'>{quantity}</div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
