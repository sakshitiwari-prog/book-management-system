import { createContext ,useState} from "react";
function Provider({children}){
    
    return <BookContext.Provider value={{}}>
        {children}
    </BookContext.Provider>
}
const BookContext=createContext()
export {Provider}
export default BookContext