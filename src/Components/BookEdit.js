import React,{useState} from 'react'

function BookEdit({handlesubmit,title,id}) {
    
    const [tit, setTit] = useState(title)
    
    function save(e){
        e.preventDefault()
        handlesubmit(id,tit)
        
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
