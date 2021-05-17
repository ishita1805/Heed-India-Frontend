import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LoadProvider} from './context/load'
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <LoadProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </LoadProvider>,
  document.getElementById('root')
);

