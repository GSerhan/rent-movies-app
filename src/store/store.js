import { createStore } from "redux";
import reducerMovies from './reducers/reducerMovies'

const store = createStore(reducerMovies);

export default store;
