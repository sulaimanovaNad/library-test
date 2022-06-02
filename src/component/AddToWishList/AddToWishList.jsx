import React from 'react'
import './AddToWishList.css'
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList } from '../../store/actions';

export default function AddToWishList({book,id}) {
  const wishlist = useSelector(store => store.wishlist)
  const dispatch = useDispatch();

  const inWishlist = wishlist.some(book => book.id === id)

    const clickToAddToWishList = () => {
       if(inWishlist){
         alert('Already in WishList')
       }else{
        dispatch(addToWishList(book))
       }
    }
  return (
    <div>
        <button onClick={clickToAddToWishList} className='heart'><FaHeart/></button>
    </div>
  )
}
