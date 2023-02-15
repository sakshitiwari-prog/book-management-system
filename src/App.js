import { useState ,useEffect} from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";


function App() {
  const [books,setBooks]=useState([])
  const deletebyId=(id)=>{
    const updatelist=books.filter((book)=>{
      return book.id!==id
    })
    setBooks(updatelist)
  }
  const editbyId=(id,newtitle)=>{
    const updatedbooks=books.map((book)=>{
      if(book.id===id ){
        return {...book,title:newtitle}
      }
      return book
    })
    setBooks(updatedbooks)
  }
  const createBook=(title)=>{
    setBooks([...books,{id:Math.round(Math.random()*999) ,title}])
    // console.log(books,'i');
  }
  useEffect(() => {
    console.log(books);
    
  }, [books])
  
  
  return (
    <div className="app"> 
      <h1>Readings</h1>
      <BookList list={books} onDelete={deletebyId} onEdit={editbyId}></BookList>
      {/* <bookEdit onDelete={deletebyId}></bookEdit> */}
      <BookCreate  onCreate={createBook}></BookCreate>
      
    </div>
  );
}

export default App;
