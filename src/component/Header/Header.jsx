import './Header.css'
import React, { useState } from 'react'
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
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div>
            <Link className='links' to="/">Home</Link>
            <Link className='links' to="/addbook">Add your book</Link>
            <Link className='links' to="/wishlist">Your wishlist
              <div className='red-quantity'>{quantity}</div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
