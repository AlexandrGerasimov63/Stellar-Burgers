import { IWsOrders } from "../../utils/types";

export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_FAILED: "WS_CONNECTION_FAILED" =
  "WS_CONNECTION_FAILED";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE: "WS_SEND_MESSAGE" = "WS_SEND_MESSAGE";

export interface IWsConnectedStart {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectedSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectedFailed {
  readonly type: typeof WS_CONNECTION_FAILED;
}

export interface IWsConnectedClose {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  payload: IWsOrders;
}

export interface IWsSendMessage {
  readonly type: typeof WS_SEND_MESSAGE;
  payload: IWsOrders;
}

export type TWsActions =
  | IWsConnectedStart
  | IWsConnectedSuccess
  | IWsConnectedFailed
  | IWsConnectedClose
  | IWsGetMessage
  | IWsSendMessage;

export const wsConnectedStart = (): IWsConnectedStart => {
  return {
    type: WS_CONNECTION_START,
  };
};

export const wsConnectedSuccess = (): IWsConnectedSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectedClosed = (): IWsConnectedClose => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};

export const wsConnectedFailed = (): IWsConnectedFailed => {
  return {
    type: WS_CONNECTION_FAILED,
  };
};

export function wsGetMessage(message: IWsOrders): IWsGetMessage {
  return {
    type: WS_GET_MESSAGE,
    payload: message,
  };
}

export function wsSendMessage(message: IWsOrders): IWsSendMessage {
  return {
    type: WS_SEND_MESSAGE,
    payload: message,
  };
}
