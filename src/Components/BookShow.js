import React from 'react'
import { useState } from 'react'
import BookEdit from './BookEdit'
function BookShow({id,title,onDelete,onEdit}) {
    const [edit, setEdit] = useState(false)
    let content =title
    function handleDeleteClick(){
        onDelete(id)
    }
    function handleEditClick(){
        setEdit(!edit)
    }
    function handlesubmit(id,title){
        onEdit(id,title)
        setEdit(false)
    }
    
    if (edit){
        content=<BookEdit  title={title} id={id} handlesubmit={handlesubmit}></BookEdit>
    }
    return (
    <div className='book-show'>
        <img src={`https://picsum.photos/seed/${id}/200/300`} alt="book" />
        {content}
        <div className='actions'>
            <button className='edit'onClick={handleEditClick}>edit</button>
            <button className='delete' onClick={handleDeleteClick}>delete</button>
        </div>
    </div>
    )
}

export default BookShow
