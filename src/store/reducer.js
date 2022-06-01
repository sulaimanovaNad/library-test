import * as actions from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [
    {
      id: uuidv4(),
      name: 'Harry Potter and the Chamber of Secrets',
      author: '	J. K. Rowling',
      genre: 'fantasy'
    },
    {
      id: uuidv4(),
      name: 'The Ginger Man',
      author: 'J. P. Donleavy',
      genre: 'novel'
    },
    {
      id: uuidv4(),
      name: 'The Girl on the Train',
      author: 'Paula Hawkins',
      genre: 'thriller'
    }
  ]
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
        books: [state.books.map(b => action.payload.genre == b.genre)]
      };
    default:
      return state;
  }
}