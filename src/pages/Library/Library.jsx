import './Library.css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import back from '../../image/back.jpg'
import Header from '../../component/Header/Header'
import BookList from '../../component/BookList/BookList'
import Categories from '../../component/Categories/Categories';

export default function Library() {
  const [showCategories, setShowCategories] = useState('')

  const books = useSelector(store => store.books);
  const categories = useSelector(store => store.categories);
  const quantity = books.length
  const quantityCategories = categories.length

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
        <div className='fon'></div>
        <div className='container'>
          <div className='book-form'>
            <button onClick={clickShowCategories}>Show Categories</button>
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
