import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchProvider from './Context/search';
import BasketProvider from './Context/basket';
import WishlistProvider from './Context/wishlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WishlistProvider>
      <BasketProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </BasketProvider>
    </WishlistProvider>
  </React.StrictMode>
);

