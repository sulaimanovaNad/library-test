import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromWishList } from '../../store/actions';

export default function DeleteFromWishList({id}) {
    const dispatch = useDispatch();
    const clickToDeleteFromWishList = () => {
       dispatch(deleteFromWishList(id))
    }
  return (
    <div>
        <button className='delete-button' onClick={clickToDeleteFromWishList}>X</button>
    </div>
  )
}
