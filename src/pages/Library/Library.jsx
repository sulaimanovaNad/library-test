import React, { useState } from 'react'
import './Library.css'
import AddBook from '../../component/AddBook/AddBook'
import BookList from '../../component/BookList/BookList'
import { useSelector } from 'react-redux'
import Categories from '../../component/Categories/Categories';
import Header from '../../component/Header/Header'

export default function Library() {

  const [showForm, setShowForm] = useState('')
  const [showCategories, setShowCategories] = useState('')

  const books = useSelector(store => store.books);
  const categories = useSelector(store => store.categories);
  const quantity = books.length
  const quantityCategories = categories.length

  const clickShowForm = () => {
    setShowForm(!showForm)
  }

  const clickCloseForm = () => {
    setShowForm(!showForm)
  }

  const clickShowCategories = () => {
    setShowCategories(!showCategories)
  }

  const clickShowBook = () => {
    setShowCategories(!showCategories)
  }

  return (
    <div>
      <Header />
      <div className='library'>
        <div className='container'>
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
            {!showCategories && <button onClick={clickShowCategories}>Show Categories</button>}
            {showCategories && <button onClick={clickShowBook}>Show All Book</button>}
            {showCategories && <Categories />}
            {!showCategories && <div className='quantity'>Number of books: <b>{quantity}</b></div>}
            {showCategories && <div className='quantity'>Number of books: {quantityCategories}</div>}
          </div>
          <BookList books={books} categories={categories} showCategories={showCategories} />
        </div>
      </div>
    </div>
  )
}
