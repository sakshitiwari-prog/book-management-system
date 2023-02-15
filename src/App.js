
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
// import useContextBook from './usecontextbook'

function App() {

  return (
    <div className="app"> 
      <h1>Readings</h1>
      <BookList ></BookList>
      <BookCreate ></BookCreate>
      
    </div>
  );
}

export default App;
