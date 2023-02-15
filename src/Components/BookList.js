import React from 'react'
import BookShow from './BookShow'
import { useContext } from 'react'
import BookContext from '../Context/Books'
function BookList({list,onDelete,onEdit}) {
    const {count,incrementCount}=useContext(BookContext)
    function handleClick(){
        incrementCount()
    }
    const renderedbooks=list.map((book)=>{
        const {id,title}=book
        return(<BookShow key={id} id={id} onEdit={onEdit} onDelete={onDelete} title={title}></BookShow>)
    })
    return (
    <div className='book-list'>
        {count}
        <button onClick={handleClick}>click</button>
        {renderedbooks}
    </div>
    )
}

export default BookList
