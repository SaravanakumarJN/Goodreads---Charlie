
import { genreReducer } from './genres/reducer'
import { bookReducer } from './search/reducer'
import { disPostReducer } from "./Discussion/redux";
import { TriviaReducer } from "./Trivia/redux";
import { landingPage_reducers } from './landingPage/landingPage_reducers'
import { peopleData_reducers } from './peoplePage/peoplePage_reducers'

const rootReducer = combineReducers({
    genre : genreReducer,
    book : bookReducer,
    disPost: disPostReducer,
  trivia: TriviaReducer,
  signin:landingPage_reducers,
    peopleData:peopleData_reducers
})
const customThunks = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};
const composedEnhancer = compose(
  applyMiddleware(customThunks),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composedEnhancer);
export { store };
