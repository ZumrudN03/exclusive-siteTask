import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchProvider from './Context/search';
import BasketProvider from './Context/basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </BasketProvider>
  </React.StrictMode>
);

