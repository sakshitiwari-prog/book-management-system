import BookContext from '../Context/Books'
import { useContext } from 'react'
function useContextBook(){
    return useContext(BookContext)
}
export default useContextBook