import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../store/actions';

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
    if(name === ''){
      alert('Please enter name')
    }else if(author === ''){
      alert('Please enter author')
    }else if(genre === ''){
      alert('Please enter genre')
    }else{
      dispatch(addBook(newBook))
    }
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
