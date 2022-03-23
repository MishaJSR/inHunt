import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";



// let renderTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// } 

// renderTree (store.getState());

// store.subscribe (() => {
//   let state = store.getState();
//   renderTree(state);
// });
// store.subscribe (renderTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
