import React, { useState ,useContext} from 'react'
import BookContext from '../Context/Books'

function BookCreate() {
    const {createBook}=useContext(BookContext)
    const [title, setTitle] = useState('')
    function submitHandler(e){
        // console.log('hy');
        e.preventDefault()
        createBook(title)
        setTitle('')
    }
    function changeHandler(e){
        // console.log('by');
        setTitle(e.target.value)
    }
    return (
    <div className='book-create'>
        <h1>Add a Book</h1>
        <form onSubmit={submitHandler} id='submit'>
            <label htmlFor="title">Title</label>
            <input type="text" className='input' name="title"value={title} onChange={changeHandler}  />
            {/* <button>click</button> */}
            <input type="submit" />
        </form>
    </div>
    )
}

export default BookCreate
