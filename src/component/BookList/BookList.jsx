import React from 'react'
import './BookList.css'
import image from '../../image/book.png'
import DeleteBook from '../DeleteBook/DeleteBook';

export default function BookList({books,categories,showCategories}) {
    books.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)

    return (
        <div>
            {!showCategories && books.map(book => (
                <div className='book' key={book.id}>
                    <div className="links-book">
                        <div className='image'>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <a className="name" href='#'>{book.name}</a>
                            <div className="author">{book.author}</div>
                            <div className="genre">{book.genre}</div>
                        </div>
                    </div>
                    <DeleteBook id={book.id}/>
                </div>
            ))}
            {showCategories && categories.map(book => (
                <div className='book' key={book.id}>
                    <div className="links-book">
                        <div className='image'>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <a className='name' href='#'>{book.name}</a>
                            <div className='author'>{book.author}</div>
                            <div className='genre'>{book.genre}</div>
                        </div>
                    </div>
                    <DeleteBook id={book.id}/>
                </div>))
            }
        </div>
    )
}
