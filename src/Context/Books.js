import axios from "axios";
import { createContext, useState,useEffect ,useCallback} from "react";
function BookProvider({ children }) {
    const [books, setBooks] = useState([])
    
    
    const fetchbooks=async()=>{
        const response=await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }
    // const stablefetchbook=useCallback(fetchbooks,[]);
    // useEffect(() => {
    //     fetchbooks()
    //     // console.log(books);
    // },[fetchbooks])
    const deletebyId = async(id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        // console.log(res)
        const updatelist = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatelist)
    }
    const editbyId = async(id, newtitle) => {
        
            const res=await axios.put(`http://localhost:3001/books/${id}`,{
                title:newtitle
            })
            // console.log(res)
        
        const updatedbooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...res.data }
            }
            return book
        })
        setBooks(updatedbooks)
    }
    const createBook = async(title) => {
        const response=await axios.post('http://localhost:3001/books',
        {
            title:title
        })
        console.log(response.data)
        
        setBooks([...books, response.data])
        
    }
    const valueToShare={
        fetchbooks,
        books,
        createBook,
        editbyId,
        deletebyId
    }
    
    return <BookContext.Provider value={valueToShare }>
        {children}
    </BookContext.Provider>
}
const BookContext = createContext()
export { BookProvider }
export default BookContext