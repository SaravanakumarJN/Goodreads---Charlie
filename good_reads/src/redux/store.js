import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer } from "./myBooks/reducer";
import { genreReducer } from "./genres/reducer";
import { bookReducer } from "./search/reducer";
import { disPostReducer } from "./Discussion/redux";
import { TriviaReducer } from "./Trivia/redux";
import { landingPage_reducers } from "./landingPage/landingPage_reducers";
import { peopleData_reducers } from "./peoplePage/peoplePage_reducers";
import { postReducer } from "./Post/postReducer";

import { allOption_reducers } from "./allOptions/allOption_reducers";
import { userReducer } from "./userData/reducer";
import { QuotesReducer } from "./Quotes/reducer";
import { reducerAdd } from "./Quotes/reduceradd";

const rootReducer = combineReducers({
  genre: genreReducer,
  book: bookReducer,
  disPost: disPostReducer,
  trivia: TriviaReducer,
  signin: landingPage_reducers,
  peopleData: peopleData_reducers,
  myBooks: reducer,
  posts: postReducer,
  group_reducer: allOption_reducers,
  user: userReducer,
  quotes: QuotesReducer,
  quotesLikes: reducerAdd,
});

const customThunks = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const composedEnhancer = compose(
  applyMiddleware(customThunks),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composedEnhancer);
export { store };
