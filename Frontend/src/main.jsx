import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './styles/reset.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/utilities.css';
import './styles/dark-fixes.css';

// Theme bootstrap — apply saved theme before React mounts (no flash)
try {
  const saved = localStorage.getItem('nx-theme');
  const theme = saved === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
} catch { /* storage blocked — default light */ }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);