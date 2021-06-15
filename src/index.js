import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/app/appContainer';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
      <Router>
        <AppContainer />,
      </Router>
  </Provider>
  , document.getElementById('root')
);