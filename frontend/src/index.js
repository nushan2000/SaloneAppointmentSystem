import React from 'react';
import ReactDOM from 'react-dom'; // Import from 'react-dom' instead of 'react-dom/client'
import './index.css';
import { GlobalStyles } from './global-styles.js';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import "@fontsource/inter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
