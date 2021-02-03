import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionType";

const initState = {
    books : [],
    wantToRead :[],
    read:[],
    currentlyReading: [],
    isLoading: false,
    isError: false
}

const reducer = (state = initState, {type, payload}) =>{
    switch (type) {
        case GET_BOOKS_REQUEST:
            return{
                ...state,
                books : [],
                isLoading: false,
                isError: false
            }
        case GET_BOOKS_SUCCESS:
            const allBooks = [...initState.books, payload.private_shelf]
            const want = [...initState.wantToRead, payload.to_read]
            const already = [...initState.read, payload.completed_books]
            const reading = [...initState.currentlyReading, payload.current_reading]
            
            return{
                ...state,
                books: allBooks,
                wantToRead :[want],
                read:[already],
                currentlyReading: [reading],
                isLoading: false,
                isError: false
            }
        case GET_BOOKS_FAILURE:
            return{
                ...state,
                isLoading: false,
                isError: true
            }      
    
        default:
            return{
                ...state,
            }
    }
}

export {reducer}