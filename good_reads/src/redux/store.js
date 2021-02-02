import {applyMiddleware, combineReducers, createStore} from 'redux'

const rootReducer = combineReducers()

const customThunks = store => next => action => {
    return typeof action === "function" ? action(store.dispatch) : next(action)
}
const composedEnhancer = (applyMiddleware(customThunks), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, composedEnhancer)

export {store}