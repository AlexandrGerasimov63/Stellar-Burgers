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

import {
  WS_CONNECTION_START,
  WS_CONNECTION_FAILED,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from './services/actions/wsAction';

import { WS_USER_CONNECTION_START,
WS_USER_CONNECTION_SUCCESS,
WS_USER_CONNECTION_CLOSED,
WS_USER_CONNECTION_FAILED,
WS_USER_GET_MESSAGE,
WS_USER_SEND_MESSAGE
} from './services/actions/wsActionUsers';

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_FAILED,
  onMessage: WS_GET_MESSAGE,
};

const wsUserActions = {
  wsInit: WS_USER_CONNECTION_START,
  wsSendMessage: WS_USER_SEND_MESSAGE,
  onOpen: WS_USER_CONNECTION_SUCCESS,
  onClose: WS_USER_CONNECTION_CLOSED,
  onError: WS_USER_CONNECTION_FAILED,
  onMessage: WS_USER_GET_MESSAGE,
};

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
const wsUserUrl = 'wss://norma.nomoreparties.space/orders';

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


