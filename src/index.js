import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import { Provider } from 'react-redux';
import store from './store';

const App = (
  <React.StrictMode>
    <Provider store={ store  }>
      <Todolist/>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(
  App,
  document.getElementById('root')
);