import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import App from './components/App';
import GiftPage from './components/GiftPage/GiftPage';
import Recipient from './components/Recipient/Recipient';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
  <Router>
    <Route component={App}>
      <Route path="/" component={GiftPage} />
      <Route path="/recipient" component={Recipient} />
    </Route>
  </Router>
), document.getElementById('app'));