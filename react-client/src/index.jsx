import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { HashRouter } from 'react-router-dom';
import App from './components/App.jsx';


ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'));
