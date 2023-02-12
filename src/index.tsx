import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import './index.css';
import {  Provider } from 'react-redux';
import { rootReducer } from './services/root-reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, legacy_createStore as createStore,} from 'redux';
import { BrowserRouter as Router } from "react-router-dom";

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer)


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


