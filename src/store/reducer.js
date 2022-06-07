import * as actions from './actionTypes';
import {libraryList} from '../LibraryList/librarylist'

const initialState = {
  books: libraryList,
  categories: [],
  wishlist: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.BOOK_ADD:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case actions.BOOK_DELETE:
      return {
        ...state,
        books: state.books.filter(b => action.payload.id !== b.id)
      };
    case actions.BOOK_GENRE:
      return {
        ...state,
        categories: state.books.filter(b => {
          if (action.payload.genre == b.genre) {
            return b
          }
        })
      };
    case actions.BOOK_ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload.book]
      };
    case actions.BOOK_DELETE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(b => action.payload.id !== b.id)
      };
    default:
      return state;
  }
}
