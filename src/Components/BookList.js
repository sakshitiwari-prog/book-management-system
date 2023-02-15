import React from 'react'
import BookShow from './BookShow'
function BookList({list,onDelete,onEdit}) {
    const renderedbooks=list.map((book)=>{
        const {id,title}=book
        return(<BookShow key={id} id={id} onEdit={onEdit} onDelete={onDelete} title={title}></BookShow>)
    })
    return (
    <div className='book-list'>
        {renderedbooks}
    </div>
    )
}

export default BookList
