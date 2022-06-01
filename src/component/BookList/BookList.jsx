import React from 'react'
import './BookList.css'
import image from '../../image/book.png'
import DeleteBook from '../DeleteBook/DeleteBook';

export default function BookList({books}) {

    books.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)

    return (
        <div>
            {books.map(book => (
                <div className='book' key={book.id}>
                    <div className="links-book">
                        <div className='image'>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <a href='#'>{book.name}</a>
                            <div>{book.author}</div>
                            <div>{book.genre}</div>
                        </div>
                    </div>
                    <DeleteBook id={book.id}/>
                </div>
            ))}
        </div>
    )
}
