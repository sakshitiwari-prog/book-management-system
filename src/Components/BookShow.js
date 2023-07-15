
import { useState } from 'react'
import useContextBook from './usecontextbook'
import BookEdit from './BookEdit'

function BookShow({book}) {
    const {deletebyId}=useContextBook()
    const [edit, setEdit] = useState(false)
    let content=book.title
    function handleDeleteClick(){
        deletebyId(book.id)
    }
    function handleEditClick(){
        setEdit(!edit)
    }
    function handlesubmit(){
        setEdit(false)
    }
    
    if (edit){
        content=<BookEdit  book={book} handlesubmit={handlesubmit}></BookEdit>
    }
    return (
    <div className='book-show'>
        <img src={`https://picsum.photos/seed/${book.id}/20/20`} alt="book" />
        {content}
        <div className='actions'>
            <button className='edit'onClick={handleEditClick}>edit</button>
            <button className='delete' onClick={handleDeleteClick}>delete</button>
        </div>
    </div>
    )
}

export default BookShow
