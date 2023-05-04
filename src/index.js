// $ npm install modern-normalize
// $ npm install react-router-dom
// $ npm i styled-components
// $ npm install axios
// Ключ API = "3672c0915275ace21cbbe4fc0e9b5fda";


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// basename="/goit-hw-react-05-movies/"

