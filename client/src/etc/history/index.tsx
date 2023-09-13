import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Toppage from './Toppage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Toppage />
  </React.StrictMode>
);
