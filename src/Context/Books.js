import { createContext, useState ,useEffect} from "react";
function BookProvider({ children }) {
    const [books, setBooks] = useState([])
    useEffect(() => {
    console.log(books)
    }, [])
    
    const deletebyId = (id) => {
        const updatelist = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatelist)
    }
    const editbyId = (id, newtitle) => {
        const updatedbooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newtitle }
            }
            return book
        })
        setBooks(updatedbooks)
    }
    const createBook = (title) => {
        setBooks([...books, { id: Math.round(Math.random() * 999), title }])
        // console.log(books,'i');
    }
    const valueToShare={
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