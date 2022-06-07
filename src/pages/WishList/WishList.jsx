import React from 'react'
import './WishList.css'
import { useSelector } from 'react-redux'
import DeleteFromWishList from '../../component/DeleteFromWishList/DeleteFromWishList';

export default function WishList() {
  const wishlist = useSelector(store => store.wishlist)
  const quantity = wishlist.length
  return (
    <div className='wish-back'>
      <div className='wish-container'>
        <div className='quantity'>Number of books: <b>{quantity}</b></div>
        <div>
          {wishlist.map(book => (
            <div className='book' key={book.id}>
              <div className="links-book">
                <div className='image'>
                  <img src={book.image} alt="" />
                </div>
                <div>
                  <a className="name" href='#'>{book.name}</a>
                  <div className="author">{book.author}</div>
                  <div className="genre">{book.genre}</div>
                </div>
              </div>
              <div>
                <DeleteFromWishList id={book.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
