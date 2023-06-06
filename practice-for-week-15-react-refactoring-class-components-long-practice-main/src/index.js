import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import NewApp from './NewApp';
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <NewApp />
    </React.StrictMode>,
    document.getElementById('root')
  );
})
