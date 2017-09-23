
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducres from './reducers'

let store = createStore(reducres ,{} , applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
          <App />
    </Provider>
  ,document.getElementById("root")
);

console.log('----stripekey-----'+process.env.REACT_APP_STRIPE_KEY);

console.log('------------'+process.env.NODE_ENV);