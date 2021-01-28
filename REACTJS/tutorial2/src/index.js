import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

let arr = [1,2,3,4,5]

ReactDOM.render(
  <App data={arr} />,
  document.getElementById('root')
);