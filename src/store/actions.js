import * as actions from './actionTypes'; 

export const addBook = book => ({
  type: actions.BOOK_ADD,
  payload: book
})

export const deleteBook = id => ({
  type: actions.BOOK_DELETE,
  payload: {id}
})

export const genreBook = (genre) => ({
  type: actions.BOOK_GENRE,
  payload: {genre}
})