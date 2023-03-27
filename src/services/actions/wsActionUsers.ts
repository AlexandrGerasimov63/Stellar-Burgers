import { IWsOrders } from "../../utils/types";

export const WS_USER_CONNECTION_START: "WS_USER_CONNECTION_START" =
  "WS_USER_CONNECTION_START";
export const WS_USER_CONNECTION_SUCCESS: "WS_USER_CONNECTION_SUCCESS" =
  "WS_USER_CONNECTION_SUCCESS";
export const WS_USER_CONNECTION_CLOSED: "WS_USER_CONNECTION_CLOSED" =
  "WS_USER_CONNECTION_CLOSED";
export const WS_USER_CONNECTION_FAILED: "WS_USER_CONNECTION_FAILED" =
  "WS_USER_CONNECTION_FAILED";
export const WS_USER_GET_MESSAGE: "WS_USER_GET_MESSAGE" = "WS_USER_GET_MESSAGE";
export const WS_USER_SEND_MESSAGE: "WS_USER_SEND_MESSAGE" =
  "WS_USER_SEND_MESSAGE";

export interface IWsUserConnectionStart {
  readonly type: typeof WS_USER_CONNECTION_START;
}
export interface IWsUserConnectionSuccess {
  readonly type: typeof WS_USER_CONNECTION_SUCCESS;
}
export interface IWsUserConnectionClosed {
  readonly type: typeof WS_USER_CONNECTION_CLOSED;
}
export interface IWsUserConnectionFailed {
  readonly type: typeof WS_USER_CONNECTION_FAILED;
}
export interface IWsUserGetMessage {
  readonly type: typeof WS_USER_GET_MESSAGE;
  payload: IWsOrders;
}
export interface IWsUserSendMessage {
  readonly type: typeof WS_USER_SEND_MESSAGE;
  payload: IWsOrders;
}

export type TWsUserAction =
  | IWsUserConnectionStart
  | IWsUserConnectionSuccess
  | IWsUserConnectionClosed
  | IWsUserConnectionFailed
  | IWsUserGetMessage
  | IWsUserSendMessage

export function wsUserConnectedStart(): IWsUserConnectionStart {
  return {
    type: WS_USER_CONNECTION_START,
  };
}

export function wsUserConnectedSuccess(): IWsUserConnectionSuccess {
  return {
    type: WS_USER_CONNECTION_SUCCESS,
  };
}

export function wsUserConnectedClosed(): IWsUserConnectionClosed {
  return {
    type: WS_USER_CONNECTION_CLOSED,
  };
}

export function wsUserConnectedFailed(): IWsUserConnectionFailed {
  return {
    type: WS_USER_CONNECTION_FAILED,
  };
}

export function wsUserGetMessage(message: IWsOrders): IWsUserGetMessage {
  return {
    type: WS_USER_GET_MESSAGE,
    payload: message,
  };
}

export function wsUserSendMessage(message: IWsOrders): IWsUserSendMessage {
  return {
    type: WS_USER_SEND_MESSAGE,
    payload: message,
  };
}
