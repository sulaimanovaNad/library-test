import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineClose } from "react-icons/ai";
import { deleteBook } from '../../store/actions';

export default function DeleteBook({id}) {
    const dispatch = useDispatch();
    const clickToDelete = () => {
       dispatch(deleteBook(id))
    }
  return (
    <div>
        <button className='crud-button' onClick={clickToDelete}><AiOutlineClose/></button>
    </div>
  )
}
