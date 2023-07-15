import React,{useState} from 'react'
import useContextBook from './usecontextbook'

function BookEdit({handlesubmit,book}) {
    const {editbyId}=useContextBook()
    const [tit, setTit] = useState(book.title)
    
    function save(e){
        e.preventDefault()
        handlesubmit()
        editbyId(book.id,tit)        
    }
    function change(e){
        setTit(e.target.value)
    }
    return (
    
        <form className='book-edit' onSubmit={save}>
            <label htmlFor="title">title</label>
            <input type="text" className='input' name='title' value={tit} onChange={change} />
            <button className='button is-primary'>Save</button>
        </form>
    
    )
}

export default BookEdit
