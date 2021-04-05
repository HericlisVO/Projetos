import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './routers'
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
export default App;