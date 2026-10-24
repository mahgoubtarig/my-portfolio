import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // هذا السطر ضروري جداً لتفعيل Tailwind
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);