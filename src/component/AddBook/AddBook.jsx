import './AddBook.css'
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../store/actions';
import Header from '../Header/Header';

export default function AddBook() {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [image, setImage] = useState('')
  const [genre, setGenre] = useState('')

  const newBook = {
    id: uuidv4(),
    name: name,
    author: author,
    image: image,
    genre: genre
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
  }

  const handleImageChange = (e) => {
    setImage(e.target.value)
  }

  const handleGenreChange = (e) => {
    setGenre(e.target.value)
  }

  const handleAddBook = () => {
    if (name === '') {
      alert('Please enter name')
    } else if (author === '') {
      alert('Please enter author')
    } else if (genre === '') {
      alert('Please enter genre')
    } else {
      dispatch(addBook(newBook))
    }
    setName('')
    setAuthor('')
    setImage('')
    setGenre('')
  }

  return (
    <>
      <Header />
      <div className='add-book-back'>
        <div className="container">
          <div className='add-book'>
            <h1>Add your book</h1>
            <input placeholder='Name of new book' type='text' value={name} onChange={handleNameChange} />
            <input placeholder='Author name' type='text' value={author} onChange={handleAuthorChange} />
            <input placeholder='Image link' type='text' value={image} onChange={handleImageChange} />
            <div>
            <p>Please choose your genre:</p>
            <input onChange={handleGenreChange} type="radio" id="genre1" name="genre" value="Fantasy"/>
            <label for="genre1">Fantasy</label>
            <input onChange={handleGenreChange} type="radio" id="genre2" name="genre" value="Novel"/>
            <label for="genre2">Novel</label>
            <input onChange={handleGenreChange} type="radio" id="genre3" name="genre" value="Non-fiction"/>
            <label for="genre3">Non-fiction</label>
            </div>
            <button className='add-book-button' onClick={handleAddBook}>Add New Book</button>
          </div>
        </div>
      </div>
    </>
  )
}
