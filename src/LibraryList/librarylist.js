import { v4 as uuidv4 } from 'uuid';
import harry from '../image/harry.jpg'
import phineas from '../image/phineas.jpg'
import bonfire from '../image/bonfire.jpg'
import edge from '../image/edge.jpg'

export const libraryList = [
    {
        id: uuidv4(),
        name: 'Harry Potter and the Chamber of Secrets',
        author: '	J. K. Rowling',
        image: harry,
        genre: 'Fantasy'
      },
      {
        id: uuidv4(),
        name: 'Phineas redux',
        author: 'Anthony Trollope',
        image: phineas,
        genre: 'Novel'
      },
      {
        id: uuidv4(),
        name: 'The Bonfire of the Vanities',
        author: 'Tom Wolfe',
        image: bonfire,
        genre: 'Novel'
    },
    {
      id: uuidv4(),
      name: 'The Edge of the Sea',
      author: 'Rachel Carson',
      image: edge,
      genre: 'Non-fiction'
  }
]