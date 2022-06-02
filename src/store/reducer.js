import * as actions from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      id: uuidv4(),
      name: 'Harry Potter and the Chamber of Secrets',
      author: '	J. K. Rowling',
      genre: 'Fantasy'
    },
    {
      id: uuidv4(),
      name: 'The Ginger Man',
      author: 'J. P. Donleavy',
      genre: 'Novel'
    },
    {
      id: uuidv4(),
      name: 'The Girl on the Train',
      author: 'Paula Hawkins',
      genre: 'Thriller'
    }
  ],
  categories:[],
  wishlist:[]
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
          if(action.payload.genre == b.genre){
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
