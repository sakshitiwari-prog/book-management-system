import { createContext ,useState} from "react";
function Provider({children}){
    const  [count, setCount] = useState(3)
    const valueToShare={
        count,
        incrementCount:()=>{
            setCount(count+1)
        }
    }
    return <BookContext.Provider value={valueToShare}>
        {children}
    </BookContext.Provider>
}
const BookContext=createContext()
export {Provider}
export default BookContext