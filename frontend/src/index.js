// This file starts the React app
// Think of it like turning on the TV

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Find where we want to show the app (the 'root' div in index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Show our app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);