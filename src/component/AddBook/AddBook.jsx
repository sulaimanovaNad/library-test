import React, { useState } from 'react'
import './AddBook.css'
import { addBook } from '../../store/actions';
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

export default function AddBook() {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')

  const newBook = {
    id: uuidv4(),
    name: name,
    author: author,
    genre: genre
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }

  const handleGenreChange = (e) => {
    setGenre(e.target.value)
  }

  const handleAddBook = () => {
    dispatch(addBook(newBook))
    setName('')
    setAuthor('')
    setGenre('')
  }

  return (
    <div className='add-book'>
      <input placeholder='Name of new book' type='text' value={name} onChange={handleNameChange} />
      <input placeholder='Author name' type='text' value={author} onChange={handleAuthorChange} />
      <input placeholder='Genre' type='text' value={genre} onChange={handleGenreChange} />
      <button className='add-book-button' onClick={handleAddBook}>Add New Book</button>
    </div>
  )
}