import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './Style/Style.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
