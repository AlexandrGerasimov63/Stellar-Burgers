import {
  WS_CONNECTION_START,
  WS_CONNECTION_FAILED,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from "../services/actions/wsAction";

import {
WS_USER_CONNECTION_START,
WS_USER_CONNECTION_SUCCESS,
WS_USER_CONNECTION_CLOSED,
WS_USER_CONNECTION_FAILED,
WS_USER_GET_MESSAGE,
WS_USER_SEND_MESSAGE
} from "../services/actions/wsActionUsers";

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_FAILED,
  onMessage: WS_GET_MESSAGE,
};

export const wsUserActions = {
  wsInit: WS_USER_CONNECTION_START,
  wsSendMessage: WS_USER_SEND_MESSAGE,
  onOpen: WS_USER_CONNECTION_SUCCESS,
  onClose: WS_USER_CONNECTION_CLOSED,
  onError: WS_USER_CONNECTION_FAILED,
  onMessage: WS_USER_GET_MESSAGE,
};

export const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
export const wsUserUrl = 'wss://norma.nomoreparties.space/orders';
