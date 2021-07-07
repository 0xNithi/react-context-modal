import React from 'react';
import ReactDOM from 'react-dom';
import 'style/index.css';
import { ModalProvider } from 'contexts/ModalProvider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
