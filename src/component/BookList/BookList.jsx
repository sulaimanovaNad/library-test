import './BookList.css'
import React from 'react'
import DeleteBook from '../DeleteBook/DeleteBook';
import AddToWishList from '../AddToWishList/AddToWishList';

export default function BookList({books,categories,showCategories}) {
    books.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)

    return (
        <div>
            {!showCategories && books.map(book => (
                <div className='book' key={book.id}>
                    <div className="links-book">
                        <div className='image'>
                            <img src={book.image} alt="" />
                        </div>
                        <div>
                            <a className="name" href='#'>{book.name}</a>
                            <div className="author">{book.author}</div>
                            <div className="genre">{book.genre}</div>
                        </div>
                    </div>
                    <div>
                    <DeleteBook id={book.id}/>
                    <AddToWishList book={book} id={book.id}/>
                    </div>
                </div>
            ))}
            {showCategories && categories.map(book => (
                <div className='book' key={book.id}>
                    <div className="links-book">
                        <div className='image'>
                            <img src={book.image} alt="" />
                        </div>
                        <div>
                            <a className='name' href='#'>{book.name}</a>
                            <div className='author'>{book.author}</div>
                            <div className='genre'>{book.genre}</div>
                        </div>
                    </div>
                    <div>
                    <DeleteBook id={book.id}/>
                    <AddToWishList book={book} id={book.id}/>
                    </div>
                </div>))
            }
        </div>
    )
}
