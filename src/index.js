import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { carProvider } from './CarContext';

ReactDOM.render(
  <React.StrictMode>
    <carProvider>
      <App/>
    </carProvider>
  </React.StrictMode>,
  document.getElementById('root')
)



