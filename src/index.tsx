import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import './index.css';
import {  Provider } from 'react-redux';
import { rootReducer } from './services/root-reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, legacy_createStore as createStore,} from 'redux';
import { BrowserRouter as Router } from "react-router-dom";
import { socketMiddleware } from './services/middleware/socketMiddleware';
import { wsUrl,
  wsUserUrl,
  wsActions,
  wsUserActions
 } from './utils/constant.js';


const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(socketMiddleware(wsUrl,wsActions,false)),
  applyMiddleware(socketMiddleware(wsUserUrl, wsUserActions, true))
  );


const store = createStore(rootReducer, enhancer)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <App/>
      </Router>
    </Provider>
  </React.StrictMode>,

);


