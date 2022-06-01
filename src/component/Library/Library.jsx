import React, { useState } from 'react'
import './Library.css'
import AddBook from '../AddBook/AddBook'
import BookList from '../BookList/BookList'
import { useSelector } from 'react-redux'
import Categories from '../Categories/Categories';

export default function Library() {

  const [showForm, setShowForm] = useState('')

  const books = useSelector(store => store.books);
  const quantity = books.length

  const clickShowForm = () => {
    setShowForm(!showForm)
  }

  const clickCloseForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <div className='book-form'>
        {!showForm && 
        <button onClick={clickShowForm}>
          Add book +
        </button>}
        {showForm && 
        <div className='add-book-form'>
          <button 
          className='add-book-close' 
          onClick={clickCloseForm}>Close form</button>
          <AddBook />
        </div>
        }
        {!showForm && <Categories books={books}/>}
        <div>Number of books: {quantity}</div>
      </div>
      <BookList books={books} />
    </div>
  )
}
