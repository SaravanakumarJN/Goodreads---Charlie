import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { landingPage_reducers } from './landingPage/landingPage_reducers'
import { peopleData_reducers } from './peoplePage/peoplePage_reducers'

const rootReducer = combineReducers({
    signin:landingPage_reducers,
    peopleData:peopleData_reducers
})

const customThunks = store => next => action => {
    return typeof action === "function" ? action(store.dispatch) : next(action)
}
const composedEnhancer = compose(applyMiddleware(customThunks), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(rootReducer, composedEnhancer)

export {store}