import * as actions from './actionTypes'; 

export const addBook = book => ({
  type: actions.BOOK_ADD,
  payload: book
})

export const deleteBook = id => ({
  type: actions.BOOK_DELETE,
  payload: {id}
})

export const genreBook = genre => ({
  type: actions.BOOK_GENRE,
  payload: {genre}
})

export const addToWishList = (book,id) => ({
  type: actions.BOOK_ADD_TO_WISHLIST,
  payload: {book,id}
})

export const deleteFromWishList = id => ({
  type: actions.BOOK_DELETE_FROM_WISHLIST,
  payload: {id}
})
