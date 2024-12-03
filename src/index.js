import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the store
import App from './App';
import './index.css';


ReactDOM.render(
  <Provider store={store}> {/* Connect the Redux store */}
    <App />
  </Provider>,
  document.getElementById('root')
);
