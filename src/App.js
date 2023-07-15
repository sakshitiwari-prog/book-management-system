
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
// import useContextBook from './usecontextbook'
import { useEffect } from "react";
import useContextBook from './Components/usecontextbook'

function App() {

  const {books,fetchbooks}=useContextBook()
  useEffect(() => {
    console.log(books);
    const s=(()=>{
      fetchbooks()
    })
    s()
    return console.log('hy');
},[])
  return (
    <div className="app"> 
      <h1>Readings</h1>
      <BookList ></BookList>
      <BookCreate ></BookCreate>
      
    </div>
  );
}

export default App;
