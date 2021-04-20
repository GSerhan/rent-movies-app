import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { createStore } from 'redux';
import store from './store/store';

store.dispatch({
    type: 'showStore',
});

console.log('store', store.getState());

// //STORE -> GLOBALIZED STATE
//
// //ACTION
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// };
//
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// };
//
// //REDUCER
// const counter = (state = 0, action) => {
//     switch(action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//     }
// };
//
// let store = createStore(counter);
//
// //Display it in the console
// store.subscribe(() => console.log(store.getState()));
//
// //DISPATCH
// // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// store.dispatch(increment());


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
