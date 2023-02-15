import React from 'react'
import useContextBook from './usecontextbook'
import BookShow from './BookShow'
function BookList() {
    const {books}=useContextBook()
    const renderedbooks=books.map((book)=>{
        return(<BookShow key={book.id} book={book}  ></BookShow>)
    })
    return (
    <div className='book-list'>
        {renderedbooks}
    </div>
    )
}

export default BookList
