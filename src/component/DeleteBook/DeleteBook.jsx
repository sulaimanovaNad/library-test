import React from 'react'
import './DeleteBook.css'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../../store/actions';

export default function DeleteBook({id}) {
    const dispatch = useDispatch();
    const clickToDelete = () => {
       dispatch(deleteBook(id))
    }
  return (
    <div>
        <button className='delete-button' onClick={clickToDelete}>X</button>
    </div>
  )
}
