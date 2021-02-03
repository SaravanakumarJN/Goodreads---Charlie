import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { genreReducer } from './genres/reducer'
import { bookReducer } from './search/reducer'

const rootReducer = combineReducers({
    genre : genreReducer,
    book : bookReducer
})

const customThunks = store => next => action => {
    return typeof action === "function" ? action(store.dispatch) : next(action)
}
const composedEnhancer = compose(applyMiddleware(customThunks), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, composedEnhancer)

export {store}